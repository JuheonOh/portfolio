# Portfolio Website (React + Vite)

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-juheonoh.github.io%2Fportfolio-0f172a?style=for-the-badge&logo=github&logoColor=white)](https://juheonoh.github.io/portfolio)
[![Email](https://img.shields.io/badge/Email-dhwngjs01%40gmail.com-0f172a?style=for-the-badge&logo=gmail&logoColor=white)](mailto:dhwngjs01@gmail.com)

</div>

## 소개

안녕하세요, **주헌오**의 포트폴리오 페이지입니다.

개인 프로젝트, 수상 이력, 기술 스택을 한 화면에서 확인할 수 있는 반응형 **Single Page Portfolio**로, 방문자의 가독성과 이동 동선을 고려해 섹션 단위로 구성했습니다.

## 배포 URL

- 서비스: https://juheonoh.github.io/portfolio

## 주요 기능

- `react-router-dom` 기반 라우팅
  - `/` 홈 화면
  - 존재하지 않는 경로의 404 처리
- **섹션 구성**
  - `MainVisual`
  - `AboutMe`
  - `Skills`
  - `Archiving`
  - `Projects`
  - `Awards`
- 프로젝트 상세 UX
  - 썸네일 캐러셀 기반 프로젝트 미리보기
  - 프로젝트 카드 모달(이미지 슬라이드, 외부 링크)
- 성능/확장성
  - 페이지 핵심 섹션은 `React.lazy` + `Suspense`로 지연 로딩
- UI/UX
  - Tailwind CSS 기반 반응형 레이아웃
  - 스크롤 연동 헤더/섹션 앵커
  - 아이콘/폰트, 카드/버튼 상태 인터랙션

## 기술 스택

### Frontend

- React 18
- Vite 6
- Tailwind CSS
- JavaScript (ES Modules)
- React Router
- Font Awesome
- Swiper

### Backend / Data Handling

- Node.js 기반 개발 환경
- Spring Boot / Express 기반 프로젝트 경험(포트폴리오 프로젝트 기술 스택으로 기술)
- PostgreSQL / MariaDB / MySQL
- Git / GitHub
- Docker

### Tooling

- ESLint
- Prettier / `prettier-plugin-tailwindcss`
- React Helmet Async

## 폴더 구조

```text
src/
  assets/          이미지 및 정적 리소스
  components/      공통 컴포넌트 + 섹션 컴포넌트
    common/
    sections/
      project/     프로젝트 카드/슬라이드/모달
  context/         모달 상태 관리
  data/           프로젝트/수상 데이터
  pages/          Home, NotFound 라우트
  App.jsx         라우팅 진입점
  styles/         글로벌 스타일
```

## 시작하기

```bash
# 1) 설치
npm install

# 2) 개발 서버 실행
npm run dev

# 3) 빌드
npm run build

# 4) 배포 미리보기
npm run preview
```

## 커스텀 데이터 연동

`src/data/projectData.js`와 `src/data/awardData.js`에서 포트폴리오 콘텐츠를 관리합니다.

- 프로젝트 목록(제목, 기간, 사용 기술, 링크, 이미지 폴더) 수정
- 수상 이력(연도, 수상 구분, 상세 링크) 수정
- 이미지 경로는 `assets/images/` 기준으로 자동 매핑

## 커밋 컨벤션

본 프로젝트는 컨벤션 기반 커밋 메시지를 사용하고 있습니다.

- `feat:` 새 기능/콘텐츠
- `fix:` 버그 수정
- `refactor:` 구조 개선
- `chore:` 의존성/설정 변경
- `docs:` 문서 업데이트

## 라이선스

이 프로젝트는 개인 포트폴리오 목적 저장소로, 별도 라이선스가 별도 명시되지 않은 한 기본 저작권 조건에 따릅니다.
