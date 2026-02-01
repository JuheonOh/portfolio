import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
  faLink,
  faCheckCircle,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation, Pagination, Keyboard, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// 전역 모달 상태 관리를 위한 커스텀 훅
import { useModal } from "../context/ModalContext";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";

// 섹션 헤더 컴포넌트
import SectionHeader from "./SectionHeader";

// 프로젝트 데이터 임포트
import { projects } from "../data/projectData";

export default function Projects() {
  const { openModal } = useModal();

  // 이미지 클릭 시 모달을 띄우는 핸들러
  // 클릭된 프로젝트의 전체 이미지 배열과 클릭한 이미지의 인덱스를 전달받음
  const handleImageClick = (images, initialIndex) => {
    openModal(
      <ImageGalleryContent images={images} initialIndex={initialIndex} />,
    );
  };

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
    images,
    projectInfo,
    onImageClick,
  } = param;

  return (
    // 카드 전체 컨테이너
    <div className="group flex flex-col items-stretch gap-8 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl transition-all duration-300 hover:border-slate-700 md:p-8 lg:flex-row lg:gap-12">
      {/* 왼쪽 이미지 슬라이더 영역 */}
      <div className="aspect-video h-auto w-full flex-shrink-0 md:h-full lg:aspect-auto lg:h-auto lg:w-1/2">
        <div className="relative h-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-inner">
          <SlideAnimation
            swiperClassName={swiperClassName}
            images={images}
            onImageClick={onImageClick}
          />
        </div>
      </div>

      {/* 오른쪽 프로젝트 상세 정보 영역 */}
      <div className="flex w-full flex-col gap-6 lg:w-1/2">
        {/* 제목 및 날짜 */}
        <div className="flex flex-col gap-2 border-b border-slate-800 pb-4">
          <div className="flex flex-col-reverse items-start gap-2 md:flex-row md:items-center md:justify-between">
            <h3 className="break-keep text-2xl font-bold text-white transition-colors group-hover:text-yellow-400 md:text-3xl">
              {title}
            </h3>
            <span className="shrink-0 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-bold text-slate-400">
              {collaboration}
            </span>
          </div>
          <p className="font-medium text-slate-500">{date}</p>
        </div>

        {/* 프로젝트 설명 */}
        <p className="break-keep text-lg leading-relaxed text-slate-300">
          {projectInfo.description}
        </p>

        {/* 주요 기능 설명 */}
        <div className="flex flex-col gap-2">
          <h4 className="flex items-center gap-2 font-bold text-white">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-sm text-yellow-400"
            />
            주요 기능
          </h4>
          <p className="break-keep rounded-lg bg-slate-800/50 p-3 text-sm leading-relaxed text-slate-400">
            {projectInfo.feature}
          </p>
        </div>

        {/* 기술 스택 */}
        <div className="flex flex-grow flex-col gap-3">
          {projectInfo.usingSkills?.map((skill, index) => (
            <div key={index} className="flex flex-col gap-1">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
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
        <div className="flex flex-col gap-3 pt-4 md:flex-row md:items-center">
          {/* 논문 링크가 존재할 경우에만 렌더링 */}
          {projectInfo.paperUrl && (
            <a
              href={projectInfo.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:shadow-yellow-400/20 lg:w-auto"
            >
              <FontAwesomeIcon icon={faLink} className="text-xl" />
              <span>관련 논문 보기</span>
            </a>
          )}

          <a
            href={projectInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:shadow-yellow-400/20 lg:ml-auto lg:w-auto"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// --- 카드 내부의 이미지 슬라이더 ---
function SlideAnimation({ swiperClassName, images, onImageClick }) {
  // 이미지가 없으면 렌더링하지 않음
  if (!images || images.length === 0) return null;

  return (
    <div className="group/swiper relative h-full w-full">
      {/* 호버 시 나타나는 전체화면 아이콘 */}
      <div className="pointer-events-none absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white opacity-100 transition-opacity lg:opacity-0 lg:group-hover/swiper:opacity-100">
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
            "w-2 h-2 bg-white/50 rounded-full cursor-pointer transition-all hover:bg-white ",
          bulletActiveClass: "!bg-yellow-400 !w-4",
        }}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="cursor-pointer overflow-hidden bg-slate-950"
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
              className="relative z-10 h-full w-full object-contain shadow-lg"
              loading="lazy"
            />
          </SwiperSlide>
        ))}

        {/* 커스텀 좌우 화살표 */}
        <button
          className={`${swiperClassName}-prev absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-100 transition-opacity hover:bg-yellow-400 hover:text-black active:scale-95 lg:opacity-0 lg:group-hover/swiper:opacity-100`}
          onClick={(e) => e.stopPropagation()}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className={`${swiperClassName}-next absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-100 transition-opacity hover:bg-yellow-400 hover:text-black active:scale-95 lg:opacity-0 lg:group-hover/swiper:opacity-100`}
          onClick={(e) => e.stopPropagation()}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        {/* 커스텀 페이지네이션 */}
        <div
          className={`${swiperClassName}-pagination absolute !bottom-0 left-0 z-20 flex w-full justify-center gap-2 bg-black/50 py-2`}
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
        modules={[Navigation, Pagination, Keyboard, Zoom]}
        keyboard={{ enabled: true }} // 키보드 방향키 사용 가능
        zoom={{ maxRatio: 3 }} // 줌 최대 배율 설정
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
            // - swiper-zoom css 때문에 flex 안써도 됨
            // className="!flex items-center justify-center overflow-hidden p-2 sm:p-10"
            className="overflow-hidden p-2 sm:p-10"
          >
            {/* 줌 기능 사용하려면 swiper-zoom-container로 감싸야함 */}
            <div className="swiper-zoom-container h-full w-full">
              <img
                src={image}
                alt={`Modal Slide ${index}`}
                className="mx-auto max-h-full max-w-full cursor-zoom-in"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* 모달 전용 커스텀 버튼들 */}
        <button className="modal-prev absolute left-2 top-1/2 z-50 hidden -translate-y-1/2 text-4xl text-white/50 transition-colors hover:text-white sm:block">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="modal-next absolute right-2 top-1/2 z-50 hidden -translate-y-1/2 text-4xl text-white/50 transition-colors hover:text-white sm:block">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <div className="modal-pagination absolute bottom-0 left-0 z-20 flex w-full justify-center gap-1"></div>
      </Swiper>
    </div>
  );
}
