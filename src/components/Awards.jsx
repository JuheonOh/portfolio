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
import scrollSection from "../utils/scrollSection";

import { useModal } from "../context/ModalContext";
import YouTubePlayer from "./YouTubePlayer";

const BASE_URL = import.meta.env.BASE_URL;

export default function Awards() {
  const { openModal } = useModal();

  const handlePlayClick = (url) => {
    openModal(<YouTubePlayer url={url} />);
  };

  const awardsList = [
    {
      type: "academic",
      year: "2025.01",
      title: "한국컴퓨터정보학회 동계학술대회",
      rank: "우수논문상",
      img: "ksci_logo.jpg",
      link: {
        code: "https://github.com/JuheonOh/realtime-auction-spring",
        paper: `${BASE_URL}papers/WebSocket과 SSE를 활용한 실시간 경매 시스템.pdf`,
      },
    },
    {
      type: "college",
      year: "2023.06",
      title: "M&A (Metaverse & AI) 경진대회",
      rank: "금상",
      img: "inhatc_logo.jpg",
      link: {
        video: "https://youtu.be/u3lOsDAYWk0",
      },
    },
    {
      type: "webskills",
      year: "2017.09",
      title: "제52회 전국기능경기대회 (제주)",
      subTitle: "웹디자인 및 개발 직종",
      rank: "우수상 (6위)",
      img: "2017_national.jpg",
      link: {
        code: "https://github.com/JuheonOh/webskills/tree/2017_%EC%A0%84%EA%B5%AD",
      },
    },
    {
      type: "webskills",
      year: "2016.09",
      title: "제51회 전국기능경기대회 (서울)",
      subTitle: "웹디자인 및 개발 직종",
      rank: "동메달",
      img: "2016_national.jpg",
      link: {
        code: "https://github.com/JuheonOh/webskills/tree/2016_%EC%A0%84%EA%B5%AD",
      },
    },
    {
      type: "webskills",
      year: "2015 ~ 2017",
      title: "광주광역시 지방기능경기대회",
      subTitle: "웹디자인 및 개발 직종",
      rank: "3년 연속 수상",
      img: "worldskills_korea.jpg",
      details: [
        {
          year: "2017.04",
          label: "금메달",
          link: "https://github.com/JuheonOh/webskills/tree/2017_%EC%A7%80%EB%B0%A9",
        },
        {
          year: "2016.04",
          label: "금메달",
          link: "https://github.com/JuheonOh/webskills/tree/2016_%EC%A7%80%EB%B0%A9",
        },
        {
          year: "2015.04",
          label: "동메달",
          link: "https://github.com/JuheonOh/webskills/tree/2015_%EC%A7%80%EB%B0%A9",
        },
      ],
    },
  ];

  return (
    <section
      id="awards"
      className="relative min-h-screen w-full py-20 lg:py-28"
    >
      {/* 배경 설정 */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(images/awards/awards_bg.jpg)" }}
      />
      <div className="absolute inset-0 -z-10 bg-gray-900/80 backdrop-blur-[2px]" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* 헤더 */}
        <div className="mb-16 text-center">
          <h2 className="flex items-center justify-center gap-3 text-4xl font-black text-white md:text-5xl">
            <FontAwesomeIcon
              icon={faLink}
              className="cursor-pointer text-3xl text-yellow-400 transition-colors hover:text-yellow-300"
              onClick={() => scrollSection("awards")}
            />
            <span className="border-b-4 border-yellow-400 pb-2">AWARDS</span>
          </h2>
        </div>

        {/* 타임라인 컨테이너 */}
        <div className="relative mx-auto max-w-4xl space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-gray-400 before:to-transparent md:before:mx-auto md:before:translate-x-0">
          {awardsList.map((item, index) => (
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

function TimelineItem({ item, index, onPlayClick }) {
  const isEven = index % 2 === 0;

  // 메인 아이콘(타임라인 점) 결정 로직
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

  // 링크 타입별 버튼 설정 객체
  const LINK_CONFIG = {
    code: { icon: faGithub, text: "Code", color: "hover:bg-gray-700" },
    paper: {
      icon: faFilePdf,
      text: "Paper",
      color: "hover:bg-yellow-600 hover:text-black",
    },
    view: { icon: faExternalLinkAlt, text: "View", color: "hover:bg-blue-600" },
    video: {
      icon: faPlay,
      text: "Video",
      color: "bg-red-600/80 hover:bg-red-600",
    },
    default: { icon: faLink, text: "Link", color: "hover:bg-yellow-600" },
  };

  // 링크 렌더링 헬퍼 함수
  const renderLinkButton = (key, url) => {
    // LINK_CONFIG에서 key에 맞는 설정을 가져오고, 없으면 default 사용
    const config = LINK_CONFIG[key] || LINK_CONFIG.default;

    // key가 'video'인 경우 버튼으로 렌더링하여 모달 오픈
    if (key === "video") {
      return (
        <button
          key={key}
          onClick={() => onPlayClick(url)}
          className={`inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm text-white transition-colors ${config.color}`}
        >
          <FontAwesomeIcon icon={config.icon} /> {config.text}
        </button>
      );
    }

    // 그 외(Code, Paper, View 등)는 a 태그로 렌더링
    return (
      <a
        key={key}
        href={url}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center gap-1 rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors ${config.color}`}
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
      {/* 타임라인 점 */}
      <div className="absolute left-0 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-gray-900 bg-yellow-400 shadow md:left-1/2 md:order-1 md:-translate-x-1/2">
        <FontAwesomeIcon icon={mainIcon} className="text-sm text-gray-900" />
      </div>

      {/* 카드 내용 */}
      <div
        className={`ml-14 w-full rounded-xl bg-white/10 p-6 shadow-xl backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/15 hover:shadow-2xl md:ml-0 md:w-[45%] ${
          isEven ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <div className="mb-4 flex items-center gap-4 border-b border-white/20 pb-4">
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-yellow-400 bg-white">
            <img
              src={`images/awards/${item.img}`}
              alt={item.title}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <span className="inline-block rounded bg-yellow-400/20 px-2 py-0.5 text-xs font-bold text-yellow-300">
              {item.year}
            </span>
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="text-sm font-medium text-gray-300">{item.rank}</p>
          </div>
        </div>

        {item.details ? (
          <ul className="space-y-2">
            {item.details.map((detail, i) => (
              <li
                key={i}
                className="flex items-center justify-between text-sm text-gray-300"
              >
                <span>
                  {detail.year} {detail.label}
                </span>
                <a
                  href={detail.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-yellow-400 underline decoration-yellow-400/50 hover:decoration-yellow-400"
                >
                  Code
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-wrap justify-end gap-2">
            {/* item.link 객체를 순회하며 버튼 생성 */}
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
