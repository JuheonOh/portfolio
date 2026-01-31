import {
  faCalendar,
  faEnvelope,
  faLocationDot,
  faPencil,
  faPhone,
  faUser,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeader from "./SectionHeader";

export default function AboutMe() {
  const about_me = [
    {
      icon: faUser,
      category: "이름",
      content: "오주헌",
    },
    {
      icon: faCalendar,
      category: "생년월일",
      content: "1999. 02. 03",
    },
    {
      icon: faLocationDot,
      category: "주소지",
      content: "광주광역시 동구",
    },
    {
      icon: faPhone,
      category: "연락처",
      content: "010-6263-6013",
      type: "tel",
    },
    {
      icon: faEnvelope,
      category: "이메일",
      content: "dhwngjs01@gmail.com",
      type: "mailto",
    },
    {
      icon: faPencil,
      category: "학력",
      content: "인하공업전문대학 (컴퓨터정보공학)",
    },
  ];

  return (
    <section
      id="about-me"
      className="min-h-screen w-full bg-slate-950 py-20 text-white lg:py-28"
    >
      <div className="container mx-auto px-6">
        {/* 헤더 */}
        <SectionHeader title="ABOUT ME" sectionId="about-me" />

        {/* 메인 컨텐츠 */}
        <div className="flex flex-col items-center justify-center gap-16">
          {/* 소개글 영역*/}
          <div
            className="animate-fade-up relative w-full max-w-3xl rounded-3xl border border-slate-800 bg-slate-900/50 p-8 text-center backdrop-blur-sm md:p-12"
            style={{ animationDelay: "0.2s" }}
          >
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="absolute -left-4 -top-6 text-5xl text-slate-700/50 md:-left-6 md:-top-8 md:text-6xl"
            />

            <p className="break-keep text-xl font-light leading-relaxed text-slate-300 md:text-2xl">
              <span className="font-bold text-yellow-400">기능경기대회</span>{" "}
              수상 경험으로 다져진 끈기와 기술력을 바탕으로,
              <br className="hidden md:block" /> 안정적이고 직관적인 웹 서비스를
              구현하는 데 집중합니다.
            </p>
          </div>

          {/* 인적사항 그리드 */}
          <div
            className="animate-fade-up w-full max-w-6xl"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {about_me.map((item, index) => (
                <AboutMeItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutMeItem({ type, icon, category, content }) {
  return (
    <div className="group flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg transition-all duration-300 hover:border-yellow-400/50 hover:shadow-yellow-400/10">
      <div className="mb-4 text-4xl text-slate-500 transition-colors duration-300 group-hover:text-yellow-400">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h5 className="mb-2 text-lg font-bold text-white">{category}</h5>
      <span className="break-keep text-center font-medium text-slate-400">
        {type ? (
          <a
            href={`${type}:${content}`}
            className="decoration-yellow-400/50 underline-offset-4 transition-colors hover:text-yellow-400 hover:underline"
          >
            {content}
          </a>
        ) : (
          content
        )}
      </span>
    </div>
  );
}
