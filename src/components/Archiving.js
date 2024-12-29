import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scrollSection from "../utils/scrollSection";

export default function Archiving() {
  return (
    <section id="archiving" className="w-full min-h-screen py-48 bg-[#222222]">
      <div className="container mx-auto px-6">
        <h2 className="flex justify-center items-center text-center text-5xl font-black gap-4 text-white mb-12">
          <FontAwesomeIcon icon={faLink} className="text-3xl cursor-pointer" onClick={() => scrollSection("archiving")} />
          <span className="border-b-2 border-gray-200 pb-1">ARCHIVING</span>
        </h2>

        <div className="flex justify-center items-center">
          <div className="w-full max-w-xl">
            <a href="https://github.com/JuheonOh" title="https://github.com/JuheonOh" target="_blank" rel="noreferrer noopener" className="block">
              <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="mb-8">
                  <img src="images/icons/version-control/github.png" alt="Github 아이콘" title="Github" className="w-full max-w-[300px] mx-auto px-5" />
                </div>

                <div className="text-center">
                  <p className="text-blue-600 font-bold text-xl mb-4">github.com/JuheonOh</p>
                  <p className="mb-4">
                    <span className="font-bold">소스 코드 저장소</span>입니다.
                  </p>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>과거 프로젝트의 소스 코드</li>
                    <li>코딩 연습을 위해 만들어본 소스 코드</li>
                    <li>학교 강의에서 배운 소스 코드</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
