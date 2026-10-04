# 이미지 제작 기록

현재 이미지는 실사를 대체한 귀여운 2D 빵 캐릭터입니다. 메인 1장과 메뉴별 대표 이미지 16장을 내장 `image_gen` 도구로 각각 새로 생성했습니다. 이미지 압축 요청에 따라 생성 원본에서 메인 최대 폭 1280px·메뉴별 960×960px, JPEG 품질 82로 최적화했습니다. 기존 17장 합계 3,485,875바이트에서 1,989,598바이트로 약 43% 감소했습니다. 기존 생성 원본은 기본 생성 폴더에 보존했습니다. 서비스 실행 중에는 생성 도구나 AI API를 사용하지 않습니다.

## 공유 썸네일

`social-preview.jpg`: 1200×630px, JPEG 품질 82, 134,535바이트. 내장 `image_gen` 도구에서 메인 캐릭터 이미지를 참조해 생성한 정적 서비스 미리보기입니다. 결과별 동적 이미지가 아닙니다.

```text
Use case: ads-marketing. Asset type: static Open Graph social preview thumbnail for the Korean bakery quiz website '오늘은 어떤 빵을 먹을까?'. Edit the attached hero illustration into a polished very wide landscape composition, target 1200x630 (1.91:1). Preserve the exact cute hand-painted bread character family, cocoa brown outlines, warm golden colors and cream #FFF9F2 background. Place the original seven bread characters together across the lower half, fully visible including feet. Upper half: large beautifully legible bold dark cocoa Korean headline exactly '오늘은 어떤 빵을 먹을까?' on one or two centered lines. Smaller brown subtitle exactly '12개의 선택으로 찾는 오늘의 빵 취향'. The headline must be the primary text and have generous clear space, no text overlaps faces. Gentle friendly illustrated bakery mood. Keep all characters safely inside the central 85%, with top and bottom safe margins. No additional text, CTA, URLs, logos, photos, watermark or decorative clutter. Output an original coherent share card, not a browser screenshot.
```

## 현재 캐릭터 이미지 프롬프트

### hero.jpg

```text
Use case: illustration-story. Asset type: hero cute bread character for a Korean bakery preference website. Primary request: An adorable little bakery family: a smiling crescent croissant, iced cinnamon roll, strawberry fruit sandwich, golden egg tart, round bagel, crumbly scone and square milk bread standing together. A balanced friendly group portrait, every character fully visible in the central 75% with generous empty margin. Landscape 3:2 composition. Style: charming original kawaii 2D storybook illustration, soft hand-painted gouache texture, clean thick rounded cocoa brown outlines, warm golden ochre bread colors, tiny shiny dark oval eyes, a little smiling mouth, rosy peach cheeks, tiny rounded arms and feet. Simplify the bread into a friendly character but keep its distinctive recognizable shape and key ingredients. No human clothing or accessories. Background: uniform warm cream #FFF9F2, a very faint grounding shadow only, no plates or furniture.  Calm friendly coherent bakery mascot series. No text, logos, watermark, photorealism, 3D render, realistic photography, extra objects or neon colors.
```

### cinnamon-roll.jpg

```text
Use case: illustration-story. Asset type: cinnamon-roll cute bread character for a Korean bakery preference website. Primary request: One round cinnamon roll character. Show an unmistakable brown cinnamon spiral on top, white icing ribbons, soft golden dough. Style: charming original kawaii 2D storybook illustration, soft hand-painted gouache texture, clean thick rounded cocoa brown outlines, warm golden ochre bread colors, tiny shiny dark oval eyes, a little smiling mouth, rosy peach cheeks, tiny rounded arms and feet. Simplify the bread into a friendly character but keep its distinctive recognizable shape and key ingredients. No human clothing or accessories. Background: uniform warm cream #FFF9F2, a very faint grounding shadow only, no plates or furniture. Composition: square image, one complete character centered, occupying 65% of the image, full silhouette and feet visible with generous margin. Calm friendly coherent bakery mascot series. No text, logos, watermark, photorealism, 3D render, realistic photography, extra objects or neon colors.
```

### financier.jpg

```text
Use case: illustration-story. Asset type: financier cute bread character for a Korean bakery preference website. Primary request: One small rectangular almond financier character, browned butter edges, golden dense interior, unmistakable ingot shape. Style: charming original kawaii 2D storybook illustration, soft hand-painted gouache texture, clean thick rounded cocoa brown outlines, warm golden ochre bread colors, tiny shiny dark oval eyes, a little smiling mouth, rosy peach cheeks, tiny rounded arms and feet. Simplify the bread into a friendly character but keep its distinctive recognizable shape and key ingredients. No human clothing or accessories. Background: uniform warm cream #FFF9F2, a very faint grounding shadow only, no plates or furniture. Composition: square image, one complete character centered, occupying 65% of the image, full silhouette and feet visible with generous margin. Calm friendly coherent bakery mascot series. No text, logos, watermark, photorealism, 3D render, realistic photography, extra objects or neon colors.
```

### sando.jpg

```text
Use case: illustration-story. Asset type: sando cute bread character for a Korean bakery preference website. Primary request: One triangular strawberry fruit sando character, white fluffy bread, whipped cream, clear sliced red strawberry cross section. Style: charming original kawaii 2D storybook illustration, soft hand-painted gouache texture, clean thick rounded cocoa brown outlines, warm golden ochre bread colors, tiny shiny dark oval eyes, a little smiling mouth, rosy peach cheeks, tiny rounded arms and feet. Simplify the bread into a friendly character but keep its distinctive recognizable shape and key ingredients. No human clothing or accessories. Background: uniform warm cream #FFF9F2, a very faint grounding shadow only, no plates or furniture. Composition: square image, one complete character centered, occupying 65% of the image, full silhouette and feet visible with generous margin. Calm friendly coherent bakery mascot series. No text, logos, watermark, photorealism, 3D render, realistic photography, extra objects or neon colors.
```

### madeleine.jpg

```text
Use case: illustration-story. Asset type: madeleine cute bread character for a Korean bakery preference website. Primary request: One golden shell-shaped madeleine character, distinctive scalloped ridges and a gently rounded body. Style: charming original kawaii 2D storybook illustration, soft hand-painted gouache texture, clean thick rounded cocoa brown outlines, warm golden ochre bread colors, tiny shiny dark oval eyes, a little smiling mouth, rosy peach cheeks, tiny rounded arms and feet. Simplify the bread into a friendly character but keep its distinctive recognizable shape and key ingredients. No human clothing or accessories. Background: uniform warm cream #FFF9F2, a very faint grounding shadow only, no plates or furniture. Composition: square image, one complete character centered, occupying 65% of the image, full silhouette and feet visible with generous margin. Calm friendly coherent bakery mascot series. No text, logos, watermark, photorealism, 3D render, realistic photography, extra objects or neon colors.
```

### egg-tart.jpg

```text
Use case: illustration-story. Asset type: egg-tart cute bread character for a Korean bakery preference website. Primary request: One Portuguese egg tart character, golden pleated flaky pastry cup with a bright yellow custard center and a few caramel spots. Style: charming original kawaii 2D storybook illustration, soft hand-painted gouache texture, clean thick rounded cocoa brown outlines, warm golden ochre bread colors, tiny shiny dark oval eyes, a little smiling mouth, rosy peach cheeks, tiny rounded arms and feet. Simplify the bread into a friendly character but keep its distinctive recognizable shape and key ingredients. No human clothing or accessories. Background: uniform warm cream #FFF9F2, a very faint grounding shadow only, no plates or furniture. Composition: square image, one complete character centered, occupying 65% of the image, full silhouette and feet visible with generous margin. Calm friendly coherent bakery mascot series. No text, logos, watermark, photorealism, 3D render, realistic photography, extra objects or neon colors.
```

### kouign-amann.jpg

```text
Use case: illustration-story. Asset type: kouign-amann cute bread character for a Korean bakery preference website. Primary request: One round kouign-amann character, folded petal-shaped laminated layers and dark golden caramelized sugar edges. Style: charming original kawaii 2D storybook illustration, soft hand-painted gouache texture, clean thick rounded cocoa brown outlines, warm golden ochre bread colors, tiny shiny dark oval eyes, a little smiling mouth, rosy peach cheeks, tiny rounded arms and feet. Simplify the bread into a friendly character but keep its distinctive recognizable shape and key ingredients. No human clothing or accessories. Background: uniform warm cream #FFF9F2, a very faint grounding shadow only, no plates or furniture. Composition: square image, one complete character centered, occupying 65% of the image, full silhouette and feet visible with generous margin. Calm friendly coherent bakery mascot series. No text, logos, watermark, photorealism, 3D render, realistic photography, extra objects or neon colors.
```

### dacquoise.jpg

```text
Use case: illustration-story. Asset type: dacquoise cute bread character for a Korean bakery preference website. Primary request: One oval almond dacquoise sandwich character, pale golden delicately crackled shells, a visible thin pink berry cream filling. Style: charming original kawaii 2D storybook illustration, soft hand-painted gouache texture, clean thick rounded cocoa brown outlines, warm golden ochre bread colors, tiny shiny dark oval eyes, a little smiling mouth, rosy peach cheeks, tiny rounded arms and feet. Simplify the bread into a friendly character but keep its distinctive recognizable shape and key ingredients. No human clothing or accessories. Background: uniform warm cream #FFF9F2, a very faint grounding shadow only, no plates or furniture. Composition: square image, one complete character centered, occupying 65% of the image, full silhouette and feet visible with generous margin. Calm friendly coherent bakery mascot series. No text, logos, watermark, photorealism, 3D render, realistic photography, extra objects or neon colors.
```

### scone.jpg

```text
Use case: illustration-story. Asset type: scone cute bread character for a Korean bakery preference website. Primary request: One classic round crumbly scone character, uneven golden top, visible split and fluffy pale interior. Style: charming original kawaii 2D storybook illustration, soft hand-painted gouache texture, clean thick rounded cocoa brown outlines, warm golden ochre bread colors, tiny shiny dark oval eyes, a little smiling mouth, rosy peach cheeks, tiny rounded arms and feet. Simplify the bread into a friendly character but keep its distinctive recognizable shape and key ingredients. No human clothing or accessories. Background: uniform warm cream #FFF9F2, a very faint grounding shadow only, no plates or furniture. Composition: square image, one complete character centered, occupying 65% of the image, full silhouette and feet visible with generous margin. Calm friendly coherent bakery mascot series. No text, logos, watermark, photorealism, 3D render, realistic photography, extra objects or neon colors.
```

### focaccia.jpg

```text
Use case: illustration-story. Asset type: focaccia cute bread character for a Korean bakery preference website. Primary request: One thick rectangular focaccia slice character, pillowy dimpled golden surface with little green rosemary sprigs and red cherry tomato halves. Style: charming original kawaii 2D storybook illustration, soft hand-painted gouache texture, clean thick rounded cocoa brown outlines, warm golden ochre bread colors, tiny shiny dark oval eyes, a little smiling mouth, rosy peach cheeks, tiny rounded arms and feet. Simplify the bread into a friendly character but keep its distinctive recognizable shape and key ingredients. No human clothing or accessories. Background: uniform warm cream #FFF9F2, a very faint grounding shadow only, no plates or furniture. Composition: square image, one complete character centered, occupying 65% of the image, full silhouette and feet visible with generous margin. Calm friendly coherent bakery mascot series. No text, logos, watermark, photorealism, 3D render, realistic photography, extra objects or neon colors.
```

### white-roll.jpg

```text
Use case: illustration-story. Asset type: white-roll cute bread character for a Korean bakery preference website. Primary request: One very fluffy round white milk bread roll character, pale creamy body, soft central crease, gently browned edges. Style: charming original kawaii 2D storybook illustration, soft hand-painted gouache texture, clean thick rounded cocoa brown outlines, warm golden ochre bread colors, tiny shiny dark oval eyes, a little smiling mouth, rosy peach cheeks, tiny rounded arms and feet. Simplify the bread into a friendly character but keep its distinctive recognizable shape and key ingredients. No human clothing or accessories. Background: uniform warm cream #FFF9F2, a very faint grounding shadow only, no plates or furniture. Composition: square image, one complete character centered, occupying 65% of the image, full silhouette and feet visible with generous margin. Calm friendly coherent bakery mascot series. No text, logos, watermark, photorealism, 3D render, realistic photography, extra objects or neon colors.
```

### ciabatta.jpg

```text
Use case: illustration-story. Asset type: ciabatta cute bread character for a Korean bakery preference website. Primary request: One rustic elongated rectangular ciabatta roll character, flour-dusted golden surface with a cut edge showing large irregular air pockets. Style: charming original kawaii 2D storybook illustration, soft hand-painted gouache texture, clean thick rounded cocoa brown outlines, warm golden ochre bread colors, tiny shiny dark oval eyes, a little smiling mouth, rosy peach cheeks, tiny rounded arms and feet. Simplify the bread into a friendly character but keep its distinctive recognizable shape and key ingredients. No human clothing or accessories. Background: uniform warm cream #FFF9F2, a very faint grounding shadow only, no plates or furniture. Composition: square image, one complete character centered, occupying 65% of the image, full silhouette and feet visible with generous margin. Calm friendly coherent bakery mascot series. No text, logos, watermark, photorealism, 3D render, realistic photography, extra objects or neon colors.
```

### shokupan.jpg

```text
Use case: illustration-story. Asset type: shokupan cute bread character for a Korean bakery preference website. Primary request: One thick square slice of shokupan milk bread character, clean white fluffy interior, thin golden brown crust, gently domed square outline. Style: charming original kawaii 2D storybook illustration, soft hand-painted gouache texture, clean thick rounded cocoa brown outlines, warm golden ochre bread colors, tiny shiny dark oval eyes, a little smiling mouth, rosy peach cheeks, tiny rounded arms and feet. Simplify the bread into a friendly character but keep its distinctive recognizable shape and key ingredients. No human clothing or accessories. Background: uniform warm cream #FFF9F2, a very faint grounding shadow only, no plates or furniture. Composition: square image, one complete character centered, occupying 65% of the image, full silhouette and feet visible with generous margin. Calm friendly coherent bakery mascot series. No text, logos, watermark, photorealism, 3D render, realistic photography, extra objects or neon colors.
```

### salt-bread.jpg

```text
Use case: illustration-story. Asset type: salt-bread cute bread character for a Korean bakery preference website. Primary request: One Korean butter salt bread character, plump rolled crescent with a smooth golden surface and three white salt flakes, visibly different from a flaky laminated croissant. Style: charming original kawaii 2D storybook illustration, soft hand-painted gouache texture, clean thick rounded cocoa brown outlines, warm golden ochre bread colors, tiny shiny dark oval eyes, a little smiling mouth, rosy peach cheeks, tiny rounded arms and feet. Simplify the bread into a friendly character but keep its distinctive recognizable shape and key ingredients. No human clothing or accessories. Background: uniform warm cream #FFF9F2, a very faint grounding shadow only, no plates or furniture. Composition: square image, one complete character centered, occupying 65% of the image, full silhouette and feet visible with generous margin. Calm friendly coherent bakery mascot series. No text, logos, watermark, photorealism, 3D render, realistic photography, extra objects or neon colors.
```

### croissant.jpg

```text
Use case: illustration-story. Asset type: croissant cute bread character for a Korean bakery preference website. Primary request: One classic French croissant character, curved crescent silhouette, three deeply golden laminated segments, clear thin curved pastry lines. Style: charming original kawaii 2D storybook illustration, soft hand-painted gouache texture, clean thick rounded cocoa brown outlines, warm golden ochre bread colors, tiny shiny dark oval eyes, a little smiling mouth, rosy peach cheeks, tiny rounded arms and feet. Simplify the bread into a friendly character but keep its distinctive recognizable shape and key ingredients. No human clothing or accessories. Background: uniform warm cream #FFF9F2, a very faint grounding shadow only, no plates or furniture. Composition: square image, one complete character centered, occupying 65% of the image, full silhouette and feet visible with generous margin. Calm friendly coherent bakery mascot series. No text, logos, watermark, photorealism, 3D render, realistic photography, extra objects or neon colors.
```

### bagel.jpg

```text
Use case: illustration-story. Asset type: bagel cute bread character for a Korean bakery preference website. Primary request: One plain round bagel character, golden smooth dense dough and an obvious central hole, a tiny white cream cheese accent on one side. Style: charming original kawaii 2D storybook illustration, soft hand-painted gouache texture, clean thick rounded cocoa brown outlines, warm golden ochre bread colors, tiny shiny dark oval eyes, a little smiling mouth, rosy peach cheeks, tiny rounded arms and feet. Simplify the bread into a friendly character but keep its distinctive recognizable shape and key ingredients. No human clothing or accessories. Background: uniform warm cream #FFF9F2, a very faint grounding shadow only, no plates or furniture. Composition: square image, one complete character centered, occupying 65% of the image, full silhouette and feet visible with generous margin. Calm friendly coherent bakery mascot series. No text, logos, watermark, photorealism, 3D render, realistic photography, extra objects or neon colors.
```

### campagne.jpg

```text
Use case: illustration-story. Asset type: campagne cute bread character for a Korean bakery preference website. Primary request: One round pain de campagne sourdough loaf character, brown rustic thick crust, cream flour dusting and a large cross-shaped scoring on top. Style: charming original kawaii 2D storybook illustration, soft hand-painted gouache texture, clean thick rounded cocoa brown outlines, warm golden ochre bread colors, tiny shiny dark oval eyes, a little smiling mouth, rosy peach cheeks, tiny rounded arms and feet. Simplify the bread into a friendly character but keep its distinctive recognizable shape and key ingredients. No human clothing or accessories. Background: uniform warm cream #FFF9F2, a very faint grounding shadow only, no plates or furniture. Composition: square image, one complete character centered, occupying 65% of the image, full silhouette and feet visible with generous margin. Calm friendly coherent bakery mascot series. No text, logos, watermark, photorealism, 3D render, realistic photography, extra objects or neon colors.
```

## 초기 실사 버전 제작 기록

아래는 교체 전 실사 이미지의 제작 기록입니다. 현재 UI에는 위 캐릭터 버전이 사용됩니다.

## 공통 프롬프트

아래 템플릿의 `{name}`과 `{subject}`를 표에 맞게 대입했습니다.

```text
Use case: product-mockup. Asset type: bakery preference quiz local web asset {name}. Primary request: {subject} One product centered on a small matte ivory ceramic plate against a seamless warm ivory linen backdrop. Square image. Full bread visible with breathing room. Style: realistic premium bakery food photography, consistent soft natural morning window light from upper left, warm neutral colors, fine edible textures, minimal styling. Camera 45 degree overhead angle. No text, logos, watermarks, people, hands, graphics or illustrations.
```

| 파일명 (`.jpg`) | `{subject}` |
| --- | --- |
| cinnamon-roll | One round cinnamon roll, fluffy spiral dough with cinnamon sugar and a little white icing. |
| financier | Two classic rectangular golden brown almond financiers, dense moist crumb, browned butter edges; one broken to reveal interior. |
| sando | One Japanese strawberry fruit sando cut into two neat triangles, soft white bread with fresh strawberries and white whipped cream. |
| madeleine | Three classic shell-shaped plain madeleines, delicate golden yellow moist crumb. |
| egg-tart | Two Portuguese egg tarts with thin flaky pastry crust and yellow custard with gently browned spots. |
| kouign-amann | One classic round kouign-amann, very crisp caramelized sugar laminated buttery dough, visible folded layers. |
| dacquoise | Two oval almond dacquoise sandwiches, airy pale golden crackled shells and thin berry cream filling. |
| scone | Two plain lightly sweet scones, irregular round shapes with crumbly golden surface; one split showing dry fluffy crumb. |
| focaccia | One thick rectangular slice of rosemary and cherry tomato focaccia, airy moist crumb, glossy olive oil surface. |
| white-roll | Three soft white milk bread rolls, extremely pale cream lightly baked surface, one gently pulled open to show fluffy white crumb. |
| ciabatta | One rustic rectangular ciabatta roll cut in half to show large irregular air pockets and moist interior, lightly floured golden crust. |
| shokupan | One Japanese square shokupan milk bread loaf with two thick slices, soft white fine crumb, thin light brown crust. |
| salt-bread | Two classic Korean crescent shaped butter salt bread rolls, glossy golden crust with a few flakes of coarse salt, crisp butter-baked bottom. NOT laminated croissants. |
| croissant | One beautiful classic French butter croissant, deeply golden crisp thin laminated layers, no filling or topping. |
| bagel | One plain round golden bagel and one half spread with plain cream cheese, showing dense chewy white crumb. |
| campagne | One small round rustic pain de campagne sourdough loaf scored with a cross, thick flour dusted deep brown crust, two slices showing grainy elastic crumb. |

## 메인 이미지 프롬프트

```text
Use case: product-mockup. Asset type: bakery preference quiz local web asset hero. Primary request: A generous but carefully arranged assortment of a croissant, cinnamon roll with icing, egg tart, sliced rustic sourdough loaf, financier, bagel and a small milk bread roll on a warm ivory linen bakery counter. Wide editorial bakery still life, overhead at a slight angle, natural soft morning light. The bread collection occupies the entire middle of the image, beautiful golden brown realistic flaky surfaces. Minimal props: a small edge of parchment, no cups, no utensils. Landscape 3:2. Style: realistic premium bakery food photography, consistent soft natural morning window light from upper left, warm neutral colors, fine edible textures, minimal styling. Camera 45 degree overhead angle. No text, logos, watermarks, people, hands, graphics or illustrations.
```
