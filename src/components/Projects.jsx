import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
  faLink,
  faCheckCircle,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// 전역 모달 상태 관리를 위한 커스텀 훅
import { useModal } from "../context/ModalContext";

import "swiper/css";
import "swiper/css/pagination";

// 섹션 헤더 컴포넌트
import SectionHeader from "./SectionHeader";

// 기본 경로 가져오기 (배포 시 경로 문제 해결용)
const BASE_URL = import.meta.env.BASE_URL;

export default function Projects() {
  const { openModal } = useModal();

  // 이미지 클릭 시 모달을 띄우는 핸들러
  // 클릭된 프로젝트의 전체 이미지 배열과 클릭한 이미지의 인덱스를 전달받음
  const handleImageClick = (images, initialIndex) => {
    openModal(
      <ImageGalleryContent images={images} initialIndex={initialIndex} />,
    );
  };

  // --- 프로젝트 데이터 정의 ---
  const auction = {
    title: "실시간 중고 경매 플랫폼",
    date: "2024. 09",
    collaboration: "개인 프로젝트",
    swiperClassName: "swiper-auction",
    swiperImageFolder: "auction", // 이미지를 불러올 폴더명
    projectInfo: {
      description:
        "이베이, 옥션을 참고하여 만든 실시간 중고 경매 플랫폼입니다.",
      feature:
        "실시간 입찰(WebSocket), SSE 알림, 경매 생성/관리, 입찰 내역 조회",
      githubUrl: "https://github.com/JuheonOh/realtime-auction-spring",
      paperUrl: `${BASE_URL}papers/real-time_auction_system_paper.pdf`,
      usingSkills: [
        {
          name: "Frontend",
          tags: ["React", "Redux Toolkit", "TailwindCSS", "Axios", "WebSocket"],
        },
        {
          name: "Backend",
          tags: ["Spring Boot", "Spring Security", "JPA", "Redis", "MariaDB"],
        },
      ],
    },
  };

  const electrip = {
    title: "Electrip (전기차 대여)",
    date: "2023. 03",
    collaboration: "개인 프로젝트",
    swiperClassName: "swiper-electrip",
    swiperImageFolder: "electrip",
    projectInfo: {
      description:
        "그린카를 모티브로 한 가상의 전기 자동차 대여 예약 서비스입니다.",
      feature: "위치 기반 대여소 찾기, 날짜/차량 선택 예약, 관리자 대시보드",
      githubUrl: "https://github.com/JuheonOh/electrip",
      paperUrl: `${BASE_URL}papers/vehicle_rentar_system_paper.pdf`,
      usingSkills: [
        {
          name: "Frontend",
          tags: ["Next.js", "Bootstrap", "Swiper", "Redux"],
        },
        {
          name: "Backend",
          tags: ["Next.js API", "Express.js", "PostgreSQL"],
        },
      ],
    },
  };

  const ohbike = {
    title: "Oh! Bike 쇼핑몰",
    date: "2019. 11",
    collaboration: "개인 프로젝트",
    swiperClassName: "swiper-ohbike",
    swiperImageFolder: "ohbike",
    projectInfo: {
      description: "바이크 용품 전문 쇼핑몰 웹사이트입니다.",
      feature: "카테고리별 상품 조회, 장바구니/주문, 관리자 상품 관리",
      githubUrl: "https://github.com/JuheonOh/bike-gear-shoppingmall-express",
      usingSkills: [
        { name: "Frontend", tags: ["Pug", "jQuery", "Ajax", "Slick"] },
        { name: "Backend", tags: ["Express.js", "MariaDB"] },
      ],
    },
  };

  const bbs = {
    title: "바이크 중고거래 장터",
    date: "2019. 09",
    collaboration: "개인 프로젝트",
    swiperClassName: "swiper-bbs",
    swiperImageFolder: "bbs",
    projectInfo: {
      description: "커뮤니티 카페 형식을 참고한 중고 거래 게시판입니다.",
      feature: "무한 스크롤, 다중 이미지 업로드 및 미리보기, 게시글 CRUD",
      githubUrl: "https://github.com/JuheonOh/bbs-spring",
      usingSkills: [
        {
          name: "Stack",
          tags: ["Spring Legacy", "MariaDB", "Bootstrap", "jQuery"],
        },
      ],
    },
  };

  // 화면에 렌더링할 프로젝트 목록 배열
  const projects = [auction, electrip, ohbike];

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-slate-950 py-20 text-white lg:py-28"
    >
      <div className="container mx-auto px-6">
        {/* 공통 섹션 헤더 컴포넌트 */}
        <SectionHeader title="PROJECTS" sectionId="projects" />

        {/* 프로젝트 카드 리스트 영역 */}
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }} // 순차적 등장을 위한 딜레이 설정
            >
              {/* 각 프로젝트 데이터를 카드 컴포넌트에 전달 */}
              {ProjectCard({ ...project, onImageClick: handleImageClick })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 개별 프로젝트 카드 ---
function ProjectCard(param) {
  const {
    title,
    date,
    collaboration,
    swiperClassName,
    swiperImageFolder,
    projectInfo,
    onImageClick,
  } = param;

  return (
    // 카드 전체 컨테이너
    <div className="group flex flex-col items-stretch gap-8 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl transition-all duration-300 hover:border-slate-700 md:p-8 lg:flex-row lg:gap-12">
      {/* 왼쪽 이미지 슬라이더 영역 */}
      <div className="w-full flex-shrink-0 lg:w-1/2">
        <div className="relative h-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-inner">
          <SlideAnimation
            swiperClassName={swiperClassName}
            swiperImageFolder={swiperImageFolder}
            onImageClick={onImageClick}
          />
        </div>
      </div>

      {/* 오른쪽 프로젝트 상세 정보 영역 */}
      <div className="flex w-full flex-col gap-6 lg:w-1/2">
        {/* 제목 및 날짜 */}
        <div className="border-b border-slate-800 pb-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-yellow-400 md:text-3xl">
              {title}
            </h3>
            <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-bold text-slate-400">
              {collaboration}
            </span>
          </div>
          <p className="font-medium text-slate-500">{date}</p>
        </div>

        {/* 프로젝트 설명 */}
        <p className="text-lg leading-relaxed text-slate-300">
          {projectInfo.description}
        </p>

        {/* 주요 기능 설명 */}
        <div>
          <h4 className="mb-2 flex items-center gap-2 font-bold text-white">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-sm text-yellow-400"
            />
            주요 기능
          </h4>
          <p className="rounded-lg bg-slate-800/50 p-3 text-sm leading-relaxed text-slate-400">
            {projectInfo.feature}
          </p>
        </div>

        {/* 기술 스택 */}
        <div className="flex-grow">
          {projectInfo.usingSkills?.map((skill, index) => (
            <div key={index} className="mb-3 last:mb-0">
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">
                {skill.name}
              </span>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200 transition-colors hover:bg-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 하단 링크 버튼들 */}
        <div className="mt-auto pt-4">
          <a
            href={projectInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:shadow-yellow-400/20"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
            <span>GitHub Repository</span>
          </a>

          {/* 논문 링크가 존재할 경우에만 렌더링 */}
          {projectInfo.paperUrl && (
            <a
              href={projectInfo.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:shadow-yellow-400/20"
            >
              <FontAwesomeIcon icon={faLink} className="text-xl" />
              <span>관련 논문 보기</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// --- 카드 내부의 이미지 슬라이더 ---
function SlideAnimation({ swiperClassName, swiperImageFolder, onImageClick }) {
  const [images, setImages] = useState([]);

  // 특정 폴더의 이미지를 동적으로 불러오기
  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageFiles = import.meta.glob(
          `../../public/images/projects/**/*.{png,jpg,jpeg,gif}`,
        );
        // 파일 경로에서 필요한 부분만 추출하여 URL 배열 생성
        const imageUrls = Object.keys(imageFiles)
          .filter((path) => path.includes(swiperImageFolder))
          .map((path) => path.replace("../../public/", ""));
        setImages(imageUrls);
      } catch (error) {
        console.error("이미지 로딩 오류", error);
      }
    };

    loadImages();
  }, [swiperImageFolder]);

  return (
    <div className="group/swiper relative h-full w-full">
      {/* 호버 시 나타나는 전체화면 아이콘 */}
      <div className="pointer-events-none absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover/swiper:opacity-100">
        <FontAwesomeIcon icon={faExpand} className="text-sm" />
      </div>

      <Swiper
        className={`${swiperClassName} h-full bg-slate-950`}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: `.${swiperClassName}-next`,
          prevEl: `.${swiperClassName}-prev`,
        }}
        pagination={{
          clickable: true,
          el: `.${swiperClassName}-pagination`,
          bulletClass:
            "inline-block w-2 h-2 bg-white/50 rounded-full mx-1 cursor-pointer transition-all hover:bg-white",
          bulletActiveClass: "!bg-yellow-400 !w-4",
        }}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="relative cursor-pointer overflow-hidden bg-slate-950"
            // 이미지 클릭 시 모달 오픈 함수 호출
            onClick={() => onImageClick(images, index)}
          >
            {/* 배경에 블러 이미지 */}
            <div
              className="absolute inset-0 scale-110 bg-cover bg-center opacity-30 blur-xl transition-all duration-500"
              style={{ backgroundImage: `url(${image})` }}
            />
            {/* 실제 보여지는 메인 이미지 */}
            <img
              src={image}
              alt={`Project Slide ${index}`}
              className="relative z-10 h-full w-full object-contain pb-7 shadow-lg"
            />
          </SwiperSlide>
        ))}

        {/* 커스텀 좌우 화살표 */}
        <button
          className={`${swiperClassName}-prev absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity hover:bg-yellow-400 hover:text-black group-hover/swiper:opacity-100`}
          onClick={(e) => e.stopPropagation()}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className={`${swiperClassName}-next absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity hover:bg-yellow-400 hover:text-black group-hover/swiper:opacity-100`}
          onClick={(e) => e.stopPropagation()}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        {/* 커스텀 페이지네이션 */}
        <div
          className={`${swiperClassName}-pagination absolute bottom-4 left-0 z-20 flex w-full justify-center gap-1`}
        ></div>
      </Swiper>
    </div>
  );
}

// --- 모달 내부 콘텐츠 (큰 이미지 갤러리) ---
function ImageGalleryContent({ images, initialIndex }) {
  return (
    <div className="h-[85vh] w-full p-2 md:p-4">
      <Swiper
        initialSlide={initialIndex} // 클릭한 이미지부터 시작
        modules={[Navigation, Pagination, Keyboard]}
        keyboard={{ enabled: true }} // 키보드 방향키 사용 가능
        navigation={{
          nextEl: ".modal-next",
          prevEl: ".modal-prev",
        }}
        pagination={{
          clickable: true,
          el: `.modal-pagination`,
          bulletClass:
            "inline-block w-2 h-2 bg-white/50 rounded-full mx-1 cursor-pointer transition-all hover:bg-white",
          bulletActiveClass: "!bg-yellow-400 !w-4",
        }}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            // - !flex와 justify-center로 이미지를 정중앙에 배치
            className="!flex h-full w-full items-center justify-center p-10"
          >
            <img
              src={image}
              alt={`Modal Slide ${index}`}
              className="mx-auto max-h-full max-w-full"
            />
          </SwiperSlide>
        ))}

        {/* 모달 전용 커스텀 버튼들 */}
        <button className="flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity hover:bg-yellow-400 hover:text-black group-hover/swiper:opacity-100">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="modal-prev absolute left-2 top-1/2 z-50 -translate-y-1/2 text-4xl text-white/50 transition-colors hover:text-white">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="modal-next absolute right-2 top-1/2 z-50 -translate-y-1/2 text-4xl text-white/50 transition-colors hover:text-white">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <div className="modal-pagination absolute bottom-0 left-0 z-20 flex w-full justify-center gap-1"></div>
      </Swiper>
    </div>
  );
}
