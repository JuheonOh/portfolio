import {
  faChevronLeft,
  faChevronRight,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function ProjectSlide({
  swiperClassName,
  images,
  onImageClick,
}) {
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
