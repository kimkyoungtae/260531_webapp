# Project Guidelines (agents.md)

이 문서는 AI 에이전트와 개발자가 프로젝트를 유지보수하고 새로운 기능을 개발할 때, 일관된 UI와 코드 품질을 유지하기 위한 가이드라인입니다.

## 1. Design System (Toss Style)

본 프로젝트는 토스(Toss) 디자인 시스템의 심미성을 지향합니다. 깨끗하고 직관적인 UI, 명확한 타이포그래피, 부드러운 인터랙션이 핵심입니다.

### 1.1 Colors
모든 색상은 `globals.css`에 정의된 CSS 변수를 우선적으로 사용합니다. 임의의 hex 코드를 직접 사용하는 것을 지양합니다.

- **Primary Action**: `var(--color-toss-blue)` (#3182f6)
- **Hover/Active**: `var(--color-toss-blue-hover)` (#2272eb)
- **Background**: `var(--background)` (#ffffff)
- **Text (Foreground)**: `var(--foreground)` (#191f28)
- **Grays (50~900)**: `var(--color-grey-50)` ~ `var(--color-grey-900)`
  - 텍스트 계층 구조에 따라 밝기를 다르게 사용합니다. (예: 주요 제목은 `grey-900` 또는 `grey-800`, 부가 설명은 `grey-600` 또는 `grey-500`)

### 1.2 Typography
- **폰트 패밀리**: `var(--font-toss)` (Toss Product Sans, SF Pro KR 등)
- **굵기(Weight)**: 제목은 주로 `font-bold` (700), 일반 본문은 기본 굵기, 금액이나 날짜 등 숫자가 강조되어야 하는 경우 `.tabular-nums` 클래스를 사용합니다.

## 2. UI Components & Layout

UI는 반복적으로 재사용될 수 있는 유틸리티 클래스로 `globals.css`에 사전 구축되어 있습니다.

### 2.1 Layout & Responsive Criteria
- **Container (`.toss-container`)**:
  - 속성: `width: 100%`, `max-width: 480px`, 중앙 정렬(`margin: 0 auto`), 좌우 패딩 `20px`.
  - **반응형 기준**: 철저한 **모바일 퍼스트(Mobile-first)** 레이아웃을 따릅니다. 웹 브라우저에서도 모바일 앱처럼 좁은 화면(최대 480px)을 유지하여 가독성과 사용자 집중도를 극대화합니다.

### 2.2 UI Elements
- **Buttons (`.toss-btn`)**:
  - 기본 형태: 둥근 모서리(`border-radius: 16px`), 굵은 텍스트(`font-weight: 600`), 트랜지션 적용.
  - 변형: `.toss-btn-xlarge`, `.toss-btn-primary`, `.toss-btn-weak`, `.toss-btn-dark`, `.toss-btn-light`
- **Badges (`.toss-badge`)**:
  - 형태: 둥근 모서리(`12px`), 작은 폰트(`13px`), 굵은 글씨.
  - 변형: `.toss-badge-blue`, `.toss-badge-blue-weak`, `.toss-badge-green`, `.toss-badge-elephant-weak`
- **Cards (`.toss-card-standard`, `.toss-card-compact`)**:
  - 형태: 둥근 모서리(`12px` 또는 `8px`), 부드러운 그림자(shadow) 또는 옅은 테두리(border).

## 3. Code Rules & Conventions

- **Tech Stack**: Next.js (App Router), React, TypeScript.
- **Styling Strategy**: Tailwind CSS v4 (`@theme inline`) + Custom Vanilla CSS.
  - 버튼, 카드, 뱃지 등 **디자인 시스템 고유의 시각적 요소**는 `globals.css`의 커스텀 클래스(`.toss-*`)를 우선 사용합니다.
  - 요소 간의 간격(Margin/Padding), 레이아웃 배치(Flex/Grid), 정렬 등 **구조적인 스타일링**은 Tailwind 유틸리티 클래스(예: `flex`, `items-center`, `gap-4`, `mb-6`)를 활용합니다.
- **Component Structure**:
  - 시맨틱 HTML 태그를 적극 활용합니다 (`<main>`, `<section>`, `<header>`, `<footer>`, `<h1>`~`<h3>`).
  - 재사용성이 높은 UI 요소는 향후 `src/components` 폴더 내에 분리하여 관리합니다.

## 4. UI/UX 원칙 (유지보수 시 필수 체크리스트)

- **여백(Spacing)**: 요소 간의 간격은 넓고 쾌적하게 유지하여 답답하지 않게 구성합니다. (주로 Tailwind의 `mb-4`, `mb-6`, `mb-10`, `mb-12` 활용)
- **모서리(Border Radius)**: 친근한 앱의 느낌을 살리기 위해 전체적으로 모서리를 크게 둥글게 처리합니다. (버튼 16px, 카드 12px 등)
- **시각적 위계**: 글자 크기와 회색(Grey) 농도를 조절하여, 사용자가 가장 중요한 정보(제목, 강조점 등)를 먼저 볼 수 있도록 정보의 계층을 명확히 분리합니다.
