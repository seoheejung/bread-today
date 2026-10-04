---
version: alpha
name: Bread Today
description: "오늘은 어떤 빵을 먹을까? 베이커리 취향 테스트 디자인 시스템"

colors:
  background: "#FFF9F2"
  surface: "#FFFFFF"
  surface-warm: "#FFF3E4"
  primary: "#8A4F2D"
  primary-hover: "#724025"
  primary-soft: "#F1DDCB"
  accent: "#E6A15A"
  text-primary: "#2C211B"
  text-secondary: "#6F625A"
  text-muted: "#95877E"
  border: "#E8DDD3"
  selected: "#F4E3D3"
  focus: "#8A4F2D"
  success: "#477A58"

typography:
  display:
    fontFamily: "Pretendard Variable"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.03em
  h1:
    fontFamily: "Pretendard Variable"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.025em
  h2:
    fontFamily: "Pretendard Variable"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: -0.02em
  body-lg:
    fontFamily: "Pretendard Variable"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: -0.01em
  body:
    fontFamily: "Pretendard Variable"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: -0.01em
  label:
    fontFamily: "Pretendard Variable"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: -0.005em
  caption:
    fontFamily: "Pretendard Variable"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0em

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px

rounded:
  sm: 8px
  md: 12px
  lg: 20px
  xl: 28px
  full: 999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    height: 52px
    padding: 16px

  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"

  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    height: 52px
    padding: 16px

  answer-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: 20px

  answer-card-selected:
    backgroundColor: "{colors.selected}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: 20px

  result-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.xl}"
    padding: 24px

  progress-track:
    backgroundColor: "{colors.primary-soft}"
    rounded: "{rounded.full}"
    height: 6px

  progress-fill:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.full}"
    height: 6px

---

# Design System: 오늘은 어떤 빵을 먹을까?

## Overview

`bread-today`는 12개의 선택을 통해 사용자의 오늘의 베이커리 취향을 찾는 서비스다.

화면은 성격 테스트 사이트보다 **작은 베이커리에서 진열된 빵을 하나씩 고르는 경험**에 가깝게 만든다.

디자인의 중심은 빵을 알아볼 수 있는 귀여운 캐릭터 이미지와 다음 세 가지다.

- 먹고 싶어 보이는 빵 이미지
- 질문과 선택지의 빠른 이해
- 결과 빵에 대한 명확한 집중

전체 분위기는 따뜻하고 편안하며, 작은 눈과 미소·발그레한 볼을 가진 귀여운 빵 캐릭터로 친근하게 표현한다. 질문과 결과 설명은 차분하고 읽기 쉽게 유지한다.

베이지, 크림, 브라운 계열을 기본으로 사용하고 빵 캐릭터의 황금빛 색이 화면에서 가장 풍부한 색상이 되도록 한다. 실사 사진 대신 같은 화풍의 2D 일러스트를 사용한다.

### Design principles

1. **Bread first**  
   UI보다 빵 이미지와 콘텐츠가 먼저 보이게 한다.

2. **One decision at a time**  
   질문 화면에서는 한 번에 하나의 선택에만 집중한다.

3. **Warm, not decorative**  
   따뜻한 인상은 색상과 여백으로 만들고 불필요한 장식으로 만들지 않는다.

4. **Consistent shell**  
   질문이 바뀌어도 레이아웃 구조는 유지한다.

5. **Content-driven result**  
   결과 화면은 빵 이름, 이미지, 취향 설명이 시각적 중심이다.

### Tone

사용해야 하는 분위기:

- 따뜻함
- 담백함
- 친근함
- 부드러움
- 먹음직스러움
- 여유 있는 공간감

피해야 하는 분위기:

- 화려한 MBTI 테스트
- 게임 UI
- 키치한 스티커 콜라주
- 과도한 레트로
- 네온 컬러
- 유아용 캐릭터 UI
- 지나친 럭셔리 베이커리 연출

---

## Colors

색상 토큰이 실제 값의 기준이다.

본문의 색상 설명과 YAML 토큰이 충돌하면 YAML 값을 따른다.

### Background

`background`는 전체 페이지 기본 배경이다.

완전한 흰색 대신 따뜻한 크림색을 사용해 베이커리의 자연스러운 분위기를 만든다.

```text
background
#FFF9F2
```

큰 영역을 `primary` 색상으로 채우지 않는다.

### Surface

카드, 선택지, 결과 콘텐츠의 기본 표면은 `surface`를 사용한다.

```text
surface
#FFFFFF
```

보조 영역에는 `surface-warm`을 사용할 수 있다.

```text
surface-warm
#FFF3E4
```

페이지 안에서 여러 종류의 베이지색을 임의로 추가하지 않는다.

### Primary

주요 행동과 선택 상태는 브라운 계열의 `primary`를 사용한다.

```text
primary
#8A4F2D
```

사용 위치:

- 주요 CTA
- 진행률
- 활성 상태
- 키보드 포커스
- 필요한 강조 텍스트

한 화면에서 여러 요소가 동시에 강한 primary 강조를 갖지 않도록 한다.

### Accent

`accent`는 작은 시각적 강조에만 사용한다.

```text
accent
#E6A15A
```

사용 가능한 영역:

- 작은 배지
- 결과 화면의 세부 강조
- 제한적인 아이콘

CTA 기본색으로 사용하지 않는다.

### Text

본문 텍스트에 순수 검정 `#000000`을 사용하지 않는다.

기본:

```text
text-primary
#2C211B
```

설명:

```text
text-secondary
#6F625A
```

보조 정보:

```text
text-muted
#95877E
```

### Selection

선택된 답변 카드는 `selected` 배경과 primary 계열 테두리 또는 강조를 함께 사용한다.

색상 차이만으로 선택 상태를 표현하지 않는다.

체크 표시, 테두리, 텍스트 변화 중 하나 이상을 함께 사용한다.

### Color usage ratio

대략적인 시각적 비중:

```text
Background / Surface  75%
Text / Neutral        15%
Primary                8%
Accent                 2%
```

정확한 면적 계산 규칙이 아니라 화면 구성 판단 기준이다.

---

## Typography

기본 서체는 `Pretendard Variable`을 사용한다.

프로젝트에 해당 폰트가 아직 존재하지 않는 경우 **디자인 구현만을 위해 임의로 패키지나 폰트 파일을 추가하지 않는다.**

현재 환경에서 사용할 수 없는 경우 시스템 sans-serif fallback을 사용하고, 폰트 설치는 별도 요구사항으로 처리한다.

### Hierarchy

#### Display

서비스 첫 화면 제목이나 결과 빵 이름처럼 가장 중요한 텍스트에 사용한다.

```text
40px / 700
```

모바일에서는 화면 폭에 따라 32px까지 낮출 수 있고, 높이 700px 이하의 작은 화면에서는 메인 제목을 28px로 낮춰 시작 버튼을 먼저 보여준다.

#### H1

페이지 단위 주요 제목.

```text
32px / 700
```

#### H2

콘텐츠 영역 제목.

```text
24px / 700
```

#### Body Large

질문 문장이나 결과의 주요 설명.

```text
18px / 400
```

#### Body

일반 설명과 선택지.

```text
16px / 400
```

#### Label

진행률, 취향 태그, 버튼처럼 작은 크기에서 강조가 필요한 텍스트.

```text
14px / 600
```

### Rules

- 한 화면에서 font weight는 가급적 `400`, `600`, `700` 안에서 사용한다.
- 본문을 모두 bold 처리하지 않는다.
- 질문 문장은 선택지보다 명확하게 높은 계층을 가진다.
- 결과 빵 이름은 결과 코드나 취향 태그보다 항상 강하게 보인다.
- 지나친 letter spacing을 사용하지 않는다.
- 한국어 본문을 중앙 정렬로 길게 작성하지 않는다.

---

## Layout

### Page structure

기본 페이지는 중앙 정렬된 단일 컬럼 구조를 사용한다.

```text
Viewport
└── Page
    └── Content Container
        ├── Header / Progress
        ├── Main Content
        └── Primary Action
```

### Content width

질문과 결과 화면의 본문 최대 폭:

```text
640px
```

결과 이미지처럼 시각 요소가 필요한 경우:

```text
720px
```

까지 허용한다.

데스크톱 화면이라는 이유로 콘텐츠를 좌우로 과도하게 확장하지 않는다.

### Page padding

모바일:

```text
16px
```

태블릿 이상:

```text
24px
```

넓은 데스크톱:

```text
32px
```

### Vertical rhythm

주요 영역 사이:

```text
32px ~ 48px
```

관련 콘텐츠 내부:

```text
8px ~ 24px
```

`spacing` 토큰 범위를 우선 사용하고 임의의 13px, 19px 같은 값을 반복적으로 만들지 않는다.

### Landing

첫 화면의 우선순위:

```text
서비스 제목
↓
짧은 설명
↓
귀여운 빵 캐릭터 모음
↓
내 빵 찾기
↓
12문항 · 약 1분 · 16가지 결과
↓
부가 설명
```

모바일 첫 화면에서 CTA를 찾기 위해 긴 스크롤이 필요하지 않도록 한다.

### Question

질문 화면:

```text
진행률
↓
질문 번호
↓
질문
↓
선택지 A
↓
선택지 B
↓
이전 이동
```

선택지 두 개는 동일한 시각적 중요도를 가진다.

기본 상태에서 특정 선택지를 primary 색상으로 강조하지 않는다.

### Result

결과 화면:

```text
결과 안내
↓
대표 빵 이미지
↓
빵 이름
↓
취향 태그
↓
결과 설명
↓
기본 빵 소개
↓
오늘 이렇게 먹기
↓
맛 변형 및 활용 4가지
↓
같이 먹으면 좋은 빵 2가지
↓
공유
↓
다시 하기
```

결과 페이지에서 공유 버튼이 결과 콘텐츠보다 먼저 보이지 않게 한다.

### Responsive behavior

모바일을 기본으로 설계한다.

큰 화면에서는 콘텐츠 폭과 여백만 확장한다.

화면 크기에 따라 전혀 다른 UI 구조로 변경하지 않는다.

---

## Elevation & Depth

전체 UI는 평면적인 구성을 기본으로 한다.

깊이는 강한 그림자보다 다음 순서로 표현한다.

1. 배경색 차이
2. 얇은 border
3. 필요한 경우 매우 약한 shadow

카드마다 강한 drop shadow를 사용하지 않는다.

### Cards

일반 카드:

```text
background: surface
border: 1px solid border
```

기본 상태에서는 shadow 없이 사용할 수 있다.

결과 카드처럼 계층 구분이 필요한 경우에만 약한 그림자를 허용한다.

권장 수준:

```css
box-shadow: 0 8px 24px rgba(44, 33, 27, 0.06);
```

그림자가 콘텐츠보다 먼저 인식될 정도로 강하게 만들지 않는다.

### Interactive depth

버튼 hover 시 위로 크게 떠오르는 효과를 사용하지 않는다.

허용:

```text
background color change
border change
1~2px 이하의 제한적인 transform
```

필수 동작은 색 변화만으로도 충분해야 한다.

---

## Shapes

전체 형태는 **부드러운 직사각형**을 기본으로 한다.

완전한 pill 형태를 모든 컴포넌트에 적용하지 않는다.

### Radius hierarchy

작은 UI:

```text
8px
```

일반 버튼:

```text
12px
```

선택 카드:

```text
20px
```

결과 이미지 또는 주요 결과 카드:

```text
20px ~ 28px
```

진행률과 작은 태그:

```text
full
```

### Image shapes

빵 이미지를 원형 avatar로 자르지 않는다.

빵의 전체 형태와 질감이 보이도록 가로 또는 정사각 비율을 사용한다.

추천 비율:

```text
4:3
1:1
```

결과별 이미지 비율은 통일한다.

### Decorative shapes

무작위 blob, wave, floating circle을 배경 장식으로 반복하지 않는다.

장식 요소가 필요한 경우 빵의 모양과 재료가 드러나는 캐릭터 일러스트를 우선한다.

---

## Components

### Primary Button

화면에서 가장 중요한 행동 하나에 사용한다.

대상:

- 내 빵 찾기
- 결과 보기
- 공유

기본 스타일:

```text
height: 52px
background: primary
text: surface
radius: 12px
```

모바일에서는 콘텐츠 폭 전체를 사용할 수 있다.

데스크톱에서는 필요 이상으로 긴 버튼을 만들지 않는다.

Hover:

```text
primary → primary-hover
```

Focus:

명확한 focus ring을 제공한다.

### Secondary Button

대상:

- 이전
- 다시 하기
- URL 복사와 같은 보조 행동

primary button과 동일한 시각적 무게를 가지지 않는다.

기본:

```text
surface background
text-primary text
border
```

### Answer Card

테스트에서 가장 중요한 인터랙션 컴포넌트다.

카드 전체를 선택 가능 영역으로 만든다.

기본 상태:

```text
surface
1px border
20px radius
```

Hover:

- border 강조
- 아주 약한 배경 변화

Selected:

- `selected` 배경
- primary 계열 border
- 명확한 selected indicator

선택지 A와 B의 모양과 크기는 같아야 한다.

한 선택지에만 아이콘이나 이미지가 있어 우세하게 보이는 구성을 만들지 않는다.

### Progress

현재 진행률은 항상 확인 가능해야 한다.

표현:

```text
3 / 12
[██████--------------]
```

숫자와 bar를 함께 사용할 수 있다.

진행률 bar만으로 현재 문항을 전달하지 않는다.

### Trait Chip

결과의 취향 네 가지를 표시한다.

형태:

```text
달달
씹는맛
진한 풍미
본체파
```

작고 보조적인 정보로 유지한다.

빵 이름보다 시각적 계층이 높아지지 않는다.

### Bread Image

이미지는 장식이 아니라 결과 콘텐츠다.

- 빵 전체 형태 확인 가능
- 빵마다 고유한 모양·결·재료를 일러스트로 구분 가능
- 귀여운 얼굴·작은 팔다리, 따뜻한 크림 배경, 통일된 2D 화풍
- `object-fit: contain`으로 캐릭터 전체 형태 유지
- 과도한 소품 배제
- 동일한 이미지 비율 유지
- 이미지 위에 본문 텍스트 직접 배치 금지

이미지를 찾지 못한 상태에서도 결과 화면이 깨지지 않아야 한다.

### Result Card

한 화면 안에 여러 작은 카드를 중첩하지 않는다.

결과 본문은 하나의 큰 콘텐츠 영역으로 다룬다.

`카드 안의 카드 안의 카드` 구조를 피한다.

### Share

공유 기능은 결과 확인 이후의 보조 행동이다.

SNS 서비스별 로고 버튼을 MVP에서 임의로 추가하지 않는다.

Web Share API 또는 결과 링크 복사 기능을 우선한다.

### Navigation

별도의 전역 내비게이션이 필요하지 않은 서비스다.

기능이 없는 햄버거 메뉴나 상단 메뉴를 추가하지 않는다.

로고 또는 서비스명은 메인 이동이 실제로 필요한 경우에만 링크로 만든다.

### Loading

판정은 로컬 계산으로 즉시 처리한다.

결과 전에 다음과 같은 가짜 분석 화면을 만들지 않는다.

```text
취향 분석 중...
당신의 빵을 굽는 중...
AI가 결과를 계산하고 있어요...
```

실제 비동기 작업이 존재하는 경우에만 loading UI를 사용한다.

### Empty / Error

필수 데이터가 누락되어 결과를 계산할 수 없다면 임의의 빵을 보여주지 않는다.

사용자가 테스트를 다시 시작할 수 있는 명확한 복구 행동을 제공한다.

---

## Do's and Don'ts

### Do

- 귀여운 빵 캐릭터 이미지를 시각적 중심으로 사용한다.
- 한 화면에서 하나의 주요 행동만 강하게 강조한다.
- 질문 화면 구조를 모든 문항에서 동일하게 유지한다.
- 넉넉한 여백으로 선택지를 분리한다.
- 실제 선택 가능한 영역을 충분히 크게 만든다.
- 모바일 환경을 먼저 확인한다.
- 색상 이외의 방법으로 선택 상태를 표현한다.
- 결과 16개의 이미지 스타일을 최대한 통일한다.
- 결과 설명이 길어져도 읽을 수 있는 본문 폭을 유지한다.
- 컴포넌트와 토큰을 재사용해 새 화면에서도 동일한 시각 언어를 유지한다.

### Don't

- MBTI의 16Personalities UI를 그대로 모방하지 않는다.
- 결과마다 완전히 다른 색상 테마를 만들지 않는다.
- 질문마다 레이아웃을 새로 디자인하지 않는다.
- 영상 히어로를 사용하지 않는다.
- 의미 없는 3D 오브젝트를 배경에 띄우지 않는다.
- gradient를 기본 장식 수단으로 사용하지 않는다.
- glassmorphism을 사용하지 않는다.
- neon 색상을 사용하지 않는다.
- 긴 결과 로딩 애니메이션을 만들지 않는다.
- 콘텐츠와 관계없는 스크롤 애니메이션을 추가하지 않는다.
- 버튼과 카드를 모두 pill 형태로 만들지 않는다.
- 모든 섹션을 카드 안에 넣지 않는다.
- 그림자를 계층 표현의 기본 수단으로 사용하지 않는다.
- emoji를 빵 대표 이미지 대신 사용하지 않는다.
- 모바일 화면에서 데스크톱 레이아웃을 단순 축소하지 않는다.
- 새로운 페이지를 만들 때 기존 토큰을 무시하고 임의의 색상, 간격, radius를 추가하지 않는다.
- 디자인 구현만을 위해 승인 없이 새로운 UI 라이브러리나 폰트 의존성을 설치하지 않는다.

### Source of truth

디자인 값의 우선순위:

```text
DESIGN.md YAML tokens
        ↓
DESIGN.md 적용 규칙
        ↓
기존 공통 컴포넌트
        ↓
화면별 구현
```

토큰과 실제 구현이 충돌하면 임의로 새로운 값을 만들지 않는다.

현재 구현이 의도적으로 변경된 것인지 확인하고, 디자인 시스템 변경이 확정된 경우 `DESIGN.md`와 구현을 같은 작업 범위에서 함께 갱신한다.

더 이상 사용하지 않는 토큰과 컴포넌트 규칙은 방치하지 않는다.

## 확장 결과 콘텐츠 및 모바일

결과의 빵 이름·취향 설명 뒤에 기본 빵 소개(`about`), 오늘의 먹는 방법(`pairing`), 맛 변형 및 활용 4가지(`variants`), 함께 먹으면 좋은 빵 2가지(`companions`)를 제공한다. 함께 먹는 빵은 두 열의 정보 카드로 나란히 표시하며, 이미지 아래에 이름과 조합 이유를 둔다. 카드에는 링크·클릭 동작·화살표·hover 강조를 넣지 않는다. 추천은 맛과 식감을 나눠 즐기는 편집 조합이며 새로운 취향 판정이 아니다.

모바일에서는 맛 변형을 한 열로 표시하고 버튼을 최소 48px 이상으로 유지한다. 메인 화면은 제목·짧은 설명·캐릭터 모음·시작 버튼·문항 정보·부가 설명 순서로 배치한다. 낮은 화면에서는 캐릭터 영역과 제목 여백을 줄여 시작 버튼을 빠르게 찾게 한다. 질문 진행률은 스크롤 시 상단에 유지하고, 가로 화면에서는 질문 영역의 세로 여백을 줄인다.

`viewport-fit=cover`와 `safe-area-inset-*`로 노치·홈 인디케이터 주변 여백을 확보한다. 글자 확대와 키보드 접근을 허용하며, 복사용 입력 영역의 글자 크기는 16px로 유지한다. 결과 설명과 추천 이유는 이미지가 없어도 읽을 수 있어야 한다.

로컬 파일로 연 결과에서는 URL 복사 버튼을 숨기고 공유 버튼에 ‘결과 텍스트 공유’를 표시한다. 결과 텍스트에 로컬 파일 경로를 포함하지 않는다. HTTP/HTTPS 접속에서 결과 링크 공유와 URL 복사를 제공한다.

## 브랜드 아이콘·공유 썸네일·오류 화면

파비콘과 모바일 홈 화면 아이콘은 기존 빵 로고의 크림색 배경·갈색 윤곽선을 유지한다. 공유 썸네일은 1200×630px의 공통 이미지로 서비스 제목과 귀여운 빵 캐릭터 모음을 표시한다. 결과마다 다른 동적 이미지를 생성하지 않는다.

맞춤 404 화면은 기존 배경색·본문색·버튼 형태를 사용하고, 잘못된 주소 안내와 홈 복귀 행동을 제공한다. 깊은 경로에서도 홈 복귀 링크가 동작해야 한다. 상단 로고와 푸터 브랜드에는 홈 이동을 제공하고 저작권 연도는 실행 시점의 연도를 표시한다.

캐릭터 JPEG 이미지는 메인 최대 폭 1280px, 메뉴별 960×960px, 품질 82로 압축한다. 공유 썸네일에는 대체 설명을 제공하고, 404 페이지의 빵 그림은 안내 텍스트와 함께 표시한다.
