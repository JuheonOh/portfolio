import { faAnglesDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scrollSection from "../utils/scrollSection";

export default function MainVisual() {
  return (
    <div
      id="main-visual"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      {/* 배경 이미지 패럴랙스 효과 */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: "url(images/main/main-visual.jpg)" }}
      />
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      {/* 메인 텍스트 영역 */}
      <div className="container mx-auto px-4 text-center text-white">
        <div
          className="animate-fade-up opacity-0"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <h2 className="mb-2 text-xl font-bold tracking-widest text-yellow-400 md:text-2xl">
            WEB DEVELOPER PORTFOLIO
          </h2>
          <h1 className="mb-6 text-6xl font-black md:text-8xl">오주헌</h1>
        </div>

        <div
          className="animate-fade-up mx-auto my-8 h-1 w-24 rounded-full bg-yellow-400 opacity-0"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        ></div>

        <div
          className="animate-fade-up opacity-0"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          <p className="mb-2 text-lg font-light text-gray-200 md:text-2xl">
            견고한 백엔드와 직관적인 프론트엔드를 연결하는 개발자
          </p>
          <p className="text-base font-light text-gray-400 md:text-lg">
            기능경기대회에서 검증된 기술력으로 가치 있는 웹 서비스를 만듭니다.
          </p>
        </div>

        {/* About Me 버튼 */}
        <div
          className="animate-fade-up mt-12 opacity-0"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          <button
            onClick={() => scrollSection("about-me")}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]"
          >
            <span className="mr-2">About Me</span>
            <FontAwesomeIcon
              icon={faAnglesDown}
              className="transition-transform group-hover:translate-y-1"
            />
          </button>
        </div>
      </div>

      {/* 하단 스크롤 유도 애니메이션 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50">
        <div className="flex animate-bounce flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll Down</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
}
