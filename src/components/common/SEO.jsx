import { Helmet } from "react-helmet-async";
import mainVisual from "../../assets/images/main/main-visual.jpg";

export default function SEO({ title, description }) {
  const metaTitle = title
    ? `${title} | 오주헌 포트폴리오`
    : "오주헌 포트폴리오 | Juheon.Dev";
  const metaDescription =
    description ||
    "기능경기대회 수상 경력의 웹 개발자 오주헌의 포트폴리오 사이트입니다. React, Spring Boot 등 풀스택 개발 역량을 확인해보세요.";
  const metaUrl = "https://juheonoh.github.io/portfolio";
  // TODO: 실제 배포 후 og-image.png 같은 대표 이미지 경로를 public 폴더에 추가하고 여기를 수정하세요.
  const metaImage = `${metaUrl}/og-image.png`;

  return (
    <Helmet>
      {/* 기본 메타 태그 */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={metaUrl} />
      
      {/* 이미지 미리 로드 (LCP 개선) */}
      <link rel="preload" as="image" href={mainVisual} />

      {/* Open Graph (Facebook, KakaoTalk 등) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content="Juheon.Dev Portfolio" />
      <meta property="og:locale" content="ko_KR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* 추가적인 메타 설정 */}
      <meta name="theme-color" content="#020617" /> {/* slate-950 색상 */}
    </Helmet>
  );
}
