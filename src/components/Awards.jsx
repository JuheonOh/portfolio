import {
  faLink,
  faTrophy,
  faScroll,
  faUniversity,
  faFilePdf,
  faExternalLinkAlt,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useModal } from "../context/ModalContext";
import YouTubePlayer from "./YouTubePlayer";
import SectionHeader from "./SectionHeader";
import awardsBg from "../assets/images/awards/awards_bg.jpg";

// 수상 내역 데이터 임포트
import { awards } from "../data/awardData.js";

export default function Awards() {
  const { openModal } = useModal();

  const handlePlayClick = (url) => {
    openModal(<YouTubePlayer url={url} />);
  };

  return (
    <section
      id="awards"
      className="relative min-h-screen w-full overflow-hidden py-20 lg:py-28"
    >
      {/* --- 배경 영역 --- */}
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${awardsBg})` }}
      />

      {/* 배경 다크 오버레이 */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />

      {/* 상단 스포트라이트 조명 효과 */}
      <div className="absolute -top-[20%] left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[120px]" />

      {/* 전체 블러 처리 */}
      <div className="absolute inset-0 -z-10 backdrop-blur-[2px]" />

      {/* --- 콘텐츠 영역 --- */}
      <div className="container mx-auto px-4 sm:px-6">
        {/* 헤더 컴포넌트 */}
        <SectionHeader title="AWARDS" sectionId="awards" />

        {/* 타임라인 컨테이너 */}
        <div className="relative mx-auto max-w-4xl space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-yellow-400/50 before:to-transparent md:before:mx-auto md:before:translate-x-0">
          {awards.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              onPlayClick={handlePlayClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 타임라인 아이템 ---
function TimelineItem({ item, index, onPlayClick }) {
  const isEven = index % 2 === 0;

  // 메인 아이콘 결정
  let mainIcon;
  switch (item.type) {
    case "academic":
      mainIcon = faScroll;
      break;
    case "college":
      mainIcon = faUniversity;
      break;
    default:
      mainIcon = faTrophy;
  }

  // 링크 버튼 설정
  const LINK_CONFIG = {
    code: { icon: faGithub, text: "Code", color: "hover:bg-slate-700" },
    paper: {
      icon: faFilePdf,
      text: "Paper",
      color: "hover:bg-yellow-500 hover:text-slate-900",
    },
    view: { icon: faExternalLinkAlt, text: "View", color: "hover:bg-blue-600" },
    video: {
      icon: faPlay,
      text: "Video",
      color: "bg-red-600/80 hover:bg-red-600",
    },
    default: { icon: faLink, text: "Link", color: "hover:bg-yellow-600" },
  };

  const renderLinkButton = (key, url) => {
    const config = LINK_CONFIG[key] || LINK_CONFIG.default;

    if (key === "video") {
      return (
        <button
          key={key}
          onClick={() => onPlayClick(url)}
          className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-bold text-white transition-all hover:scale-105 ${config.color}`}
        >
          <FontAwesomeIcon icon={config.icon} /> {config.text}
        </button>
      );
    }

    return (
      <a
        key={key}
        href={url}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center gap-1.5 rounded-lg bg-slate-800/80 px-4 py-2 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-lg ${config.color}`}
      >
        <FontAwesomeIcon icon={config.icon} /> {config.text}
      </a>
    );
  };

  return (
    <div
      className={`relative flex items-center justify-between md:justify-normal ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* 타임라인 점과 아이콘 */}
      <div className="absolute left-0 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-slate-900 bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)] md:left-1/2 md:order-1 md:-translate-x-1/2">
        <FontAwesomeIcon icon={mainIcon} className="text-sm text-slate-900" />
      </div>

      {/* 카드 내용 */}
      <div
        className={`ml-14 w-full rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:shadow-yellow-400/5 md:ml-0 md:w-[45%] ${
          isEven ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <div className="mb-4 flex items-center gap-4 border-b border-slate-700/50 pb-4">
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-yellow-400 bg-white p-1">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <span className="mb-1 inline-block rounded bg-yellow-400/10 px-2 py-0.5 text-xs font-bold text-yellow-400">
              {item.year}
            </span>
            <h3 className="break-keep text-lg font-bold leading-tight text-white">
              {item.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-slate-400">
              {item.subTitle && <span className="block">{item.subTitle}</span>}
              <span className="text-yellow-200">{item.rank}</span>
            </p>
          </div>
        </div>

        {item.details ? (
          <ul className="space-y-3">
            {item.details.map((detail, i) => (
              <li
                key={i}
                className="flex items-center justify-between rounded-lg bg-slate-800/50 p-2 text-sm text-slate-300 transition-colors hover:bg-slate-800"
              >
                <span>
                  <span className="font-bold text-slate-400">
                    {detail.year}
                  </span>{" "}
                  <span className="font-bold text-white">{detail.label}</span>
                </span>
                <a
                  href={detail.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-xs font-bold text-yellow-400 transition-colors hover:text-yellow-300"
                >
                  <FontAwesomeIcon icon={faGithub} /> Code
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-wrap justify-end gap-2">
            {item.link && typeof item.link === "object"
              ? Object.entries(item.link).map(([key, url]) =>
                  renderLinkButton(key, url),
                )
              : item.link
                ? renderLinkButton("default", item.link)
                : null}
          </div>
        )}
      </div>
    </div>
  );
}
