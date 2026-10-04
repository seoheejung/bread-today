import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';

const checkOnly = process.argv.includes('--check');
let hasMismatch = false;

for (const filename of ['index.html', '404.html']) {
  const path = new URL(filename, import.meta.url);
  const html = (await readFile(path, 'utf8')).replace(/\r\n?/g, '\n');
  const hashesFor = (pattern) => [...new Set([...html.matchAll(pattern)].map((match) =>
    `'sha256-${createHash('sha256').update(match[1], 'utf8').digest('base64')}'`
  ))].join(' ');
  const scriptHashes = hashesFor(/<script\b(?![^>]*\bsrc\s*=)[^>]*>([\s\S]*?)<\/script>/gi);
  const styleHashes = hashesFor(/<style\b[^>]*>([\s\S]*?)<\/style>/gi);
  const policy = [
    "default-src 'none'",
    `script-src 'self' ${scriptHashes}`,
    "script-src-attr 'none'",
    `style-src 'self' ${styleHashes}`,
    "style-src-attr 'none'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'none'",
    "object-src 'none'",
    "base-uri 'none'",
    "form-action 'none'"
  ].join('; ');
  const tag = `  <meta http-equiv="Content-Security-Policy" content="${policy}">`;
  const existing = html.match(/^[ \t]*<meta\s+http-equiv="Content-Security-Policy"[^>]*>/m);
  const updated = existing
    ? html.replace(existing[0], tag)
    : html.replace('  <meta charset="utf-8">', `  <meta charset="utf-8">\n${tag}`);
  if (updated === html) {
    console.log(`${filename}: CSP hashes valid`);
  } else if (checkOnly) {
    hasMismatch = true;
    console.error(`${filename}: CSP hashes need updating; run node update-csp.mjs`);
  } else {
    await writeFile(path, updated, 'utf8');
    console.log(`${filename}: CSP updated`);
  }
}

if (hasMismatch) process.exitCode = 1;
