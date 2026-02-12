import { useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Keyboard, Navigation, Pagination, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";

export default function ProjectModalContent({ images, initialIndex }) {
  const [swiperRef, setSwiperRef] = useState(null);

  // 마우스 휠로 줌 제어 (단계적 줌 구현)
  const handleWheel = (e) => {
    if (!swiperRef || !swiperRef.zoom) return;

    // 현재 배율 가져오기
    let currentScale = swiperRef.zoom.scale || 1;
    let newScale = currentScale;

    // 휠 민감도 조절 (한 번 굴릴 때 0.5씩 증감)
    const step = 0.5;

    if (e.deltaY < 0) {
      // 확대
      newScale = Math.min(currentScale + step, 3); // 최대 배율 3
    } else {
      // 축소
      newScale = Math.max(currentScale - step, 1); // 최소 배율 1
    }

    // 배율 변경 적용
    if (newScale !== currentScale) {
      swiperRef.zoom.in(newScale);
    }
  };

  return (
    <div className="h-[85vh] w-full p-2 md:p-4">
      <Swiper
        onSwiper={(swiper) => setSwiperRef(swiper)}
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
            className="overflow-hidden p-2 sm:p-10"
          >
            {/* 줌 기능 사용하려면 swiper-zoom-container로 감싸야함 */}
            <div
              className="swiper-zoom-container h-full w-full"
              onWheel={(e) => handleWheel(e)}
            >
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
