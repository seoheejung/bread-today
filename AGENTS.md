# AGENTS.md

## 프로젝트

`bread-today`는 12개의 질문으로 오늘의 빵 취향을 판정하고 16개 결과 중 하나를 보여주는 정적 웹 서비스다.

## 기술 스택

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages
- Web Share API / Clipboard API
- Backend 없음
- Database 없음
- Build 없음
- Package Manager 없음

React, Vue, Vite, TypeScript, npm 패키지, 서버, DB 등은 사용자 요청 없이 추가하지 않는다.

## 파일 구조

```text
bread-today/
├── index.html
├── data/
│   └── results.js
├── assets/
│   └── images/
├── AGENTS.md
├── DESIGN.md
└── README.md
```

- 화면, 질문, 판정 로직은 `index.html`에서 관리
- 16개 결과 데이터는 `data/results.js`에서 관리
- 결과 이미지는 `assets/images/`에서 관리
- 불필요한 디렉터리 분리 금지

## 작업 기준

우선순위:

```text
사용자 지시
→ DESIGN.md
→ AGENTS.md
→ README.md
→ 기존 코드
```

현재 요구사항에 필요한 범위만 구현한다.

향후 기능을 예상해 구조나 기능을 미리 추가하지 않는다.

## 판정 규칙

4개 축을 사용한다.

- `D / S` — 달달 / 담백
- `M / T` — 말랑촉촉 / 씹는맛
- `R / L` — 진한 풍미 / 깔끔한 풍미
- `F / B` — 조합파 / 본체파

각 축은 3문항이며 다수 선택값으로 판정한다.

가능한 결과는 정확히 16개다.

동일한 답변에는 항상 동일한 결과가 나와야 한다.

## 결과 데이터

`data/results.js`는 콘텐츠 데이터만 관리한다.

각 결과는 최소한 다음 값을 가진다.

```js
{
  code,
  name,
  traits,
  title,
  description,
  pairing,
  image,
  alt
}
```

결과 데이터를 HTML 여러 위치에 중복 작성하지 않는다.

## GitHub Pages

정적 파일은 상대 경로를 사용한다.

```html
<script src="./data/results.js"></script>
<img src="./assets/images/croissant.webp">
```

`/assets/...` 형태의 루트 절대경로는 사용하지 않는다.

결과 공유 URL은 query parameter를 사용한다.

```text
?result=STRB
```

별도 Router를 추가하지 않는다.

## 디자인

UI 작업은 `DESIGN.md`를 기준으로 한다.

- 모바일 우선
- 한 화면에 한 질문
- 빵 이미지 중심
- 동일한 질문 레이아웃 유지
- 과도한 모션 금지
- 가짜 결과 분석 로딩 금지
- 영상 히어로, glassmorphism, 과도한 gradient 금지

## 코드

- 표준 HTML/CSS/JavaScript 사용
- 현재 기능에 필요한 코드만 작성
- 승인 없는 의존성 추가 금지
- 승인 없는 `package.json` 생성 금지
- 요청과 관계없는 리팩터링 금지
- 의미 없는 추상화 금지

주석이 필요한 경우 짧은 명사형으로 작성한다.

```js
// 질문별 선택값 저장
// 축별 다수값 계산
// 최종 결과 코드 생성
```

## 테스트

단위 테스트 프레임워크를 별도로 추가하지 않는다.

실제 사용자 흐름을 기준으로 검증한다.

```text
메인
→ 테스트 시작
→ 12문항 응답
→ 결과 확인
→ 공유
→ 다시 하기
```

함께 확인한다.

- 이전 질문 이동
- 답변 수정 반영
- 16개 결과 매핑
- GitHub Pages 상대 경로
- 모바일 화면
- 키보드 조작

## 완료 기준

- 12개 질문 정상 동작
- 16개 결과 코드 누락·중복 없음
- 결과 이미지 정상 연결
- 답변 수정이 결과에 반영됨
- 공유 URL 직접 접근 가능
- 다시 하기 시 상태 초기화
- 모바일 가로 스크롤 없음
- 승인되지 않은 의존성 없음
- `DESIGN.md`, `README.md`와 실제 구현이 충돌하지 않음