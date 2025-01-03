import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scrollSection from "../utils/scrollSection";

export default function MainVisual() {
  return (
    <div id="main-visual" className="flex flex-col items-center justify-center w-full min-h-screen gap-16">
      <div className="absolute left-0 top-0 w-full h-full bg-cover bg-no-repeat bg-center -z-10" style={{ backgroundImage: "url(images/main/main-visual.jpg)" }} />

      <div className="w-full text-center text-white ">
        <div className="relative">
          <h1 className="font-bold text-5xl mb-4">오주헌</h1>
          <h2 className="text-2xl">WEB DEVELOPER</h2>
        </div>

        <div className="w-12 h-[0.1rem] bg-white mx-auto my-8"></div>

        <div>
          <p className="font-light text-lg mb-4">끊임없이 발전하는 웹 기술과 함께 성장하는 개발자 오주헌입니다.</p>
          <p className="font-light text-lg">
            최신 웹 개발 기술을 학습하고, 적용하여 웹 서비스를
            <br />
            보다 효율적이고 직관적으로 구현하는 것을 연구하고 있습니다.
          </p>
        </div>
      </div>

      <div>
        <button onClick={() => scrollSection("about-me")} className="bg-blue-700 text-gray-200 text-xl px-10 py-4 rounded-full transition-colors hover:bg-blue-800 hover:text-white">
          <span className="mr-1">더 알아보기</span>
          <FontAwesomeIcon icon={faAnglesDown} className="ml-1" />
        </button>
      </div>
    </div>
  );
}
