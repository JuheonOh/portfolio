# Portfolio Website (React + Vite)

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-juheonoh.github.io%2Fportfolio-0f172a?style=for-the-badge&logo=github&logoColor=white)](https://juheonoh.github.io/portfolio)
[![Email](https://img.shields.io/badge/Email-dhwngjs01%40gmail.com-0f172a?style=for-the-badge&logo=gmail&logoColor=white)](mailto:dhwngjs01@gmail.com)

</div>

## 소개

안녕하세요, **오주헌**의 포트폴리오 페이지입니다.

개인 프로젝트, 수상 이력, 기술 스택을 한 화면에서 확인할 수 있는 반응형 **Single Page Portfolio**로, 방문자의 가독성과 이동 동선을 고려해 섹션 단위로 구성했습니다.

## 배포 URL

- 서비스: <https://juheonoh.github.io/portfolio>

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
- Vite 6.4.1+
- Tailwind CSS
- JavaScript (ES Modules)
- React Router
- Font Awesome
- Swiper

### Infrastructure / Runtime

- Node.js + npm 기반 개발/빌드 환경
- GitHub Pages 정적 배포
- `BASE_URL` 분기 적용으로 하위 경로 배포 대응
- `src/data/*.js` 기반 정적 데이터 주입
- `import.meta.glob` 기반 에셋 자동 매핑으로 프로젝트/수상 이미지 자동 등록
- `Vite` 빌드 결과는 `vite.config.js`의 `base: "/portfolio/"`로 배포 경로를 고정

### Tooling

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
