import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import scrollSection from "../utils/scrollSection";

export default function Projects() {
  const electripImageLength = 14;
  const ohbikeImageLength = 12;
  const bbsImageLength = 6;

  const electripInfo = (
    <div className="space-y-4">
      <p>
        그린카, 롯데렌터카를 참고하여 만든 <span className="font-bold">가상의 전기 자동차 대여 웹사이트</span>입니다.
      </p>
      <hr className="border-gray-200" />
      <div className="flex">
        <p className="w-1/4 font-bold">주요 기능</p>
        <p className="w-3/4">현재 위치 기반 주변 전기차 대여소 정보 제공, 대여 날짜, 장소, 차량 선택 후 예약하기, 예약 관리, 차량 관리</p>
      </div>
      <div className="flex">
        <p className="w-1/4 font-bold">Github</p>
        <p className="w-3/4">
          <a href="https://github.com/JuheonOh/electrip" className="text-blue-600 hover:underline" title="Electrip Github" target="_blank" rel="noopener noreferrer">
            https://github.com/JuheonOh/electrip
          </a>
        </p>
      </div>
      <div className="flex">
        <p className="w-1/4 font-bold">Frontend</p>
        <p className="w-3/4">Next.js, Bootstrap, Swiper, Axios, Redux</p>
      </div>
      <div className="flex">
        <p className="w-1/4 font-bold">Backend</p>
        <p className="w-3/4">Next.js, Express.js</p>
      </div>
      <div className="flex">
        <p className="w-1/4 font-bold">Database</p>
        <p className="w-3/4">PostgreSQL</p>
      </div>
    </div>
  );

  const ohbikeInfo = (
    <div className="space-y-4">
      <p>
        바이크옥션, FC-MOTO 쇼핑몰을 참고하여 만든 <span className="font-bold">바이크 용품 쇼핑몰 웹사이트</span>입니다.
      </p>
      <hr className="border-gray-200" />
      <div className="flex">
        <p className="w-1/4 font-bold">주요 기능</p>
        <p className="w-3/4">상품 카테고리별 목록 조회, 상품 옵션, 수량, 상품 구매, 장바구니, 관리자 대시보드, 상품 관리, 주문 관리</p>
      </div>
      <div className="flex">
        <p className="w-1/4 font-bold">Github</p>
        <p className="w-3/4">
          <a href="https://github.com/JuheonOh/bike-gear-shoppingmall-express" className="text-blue-600 hover:underline" title="Oh Bike Shopping Mall Github" target="_blank" rel="noopener noreferrer">
            https://github.com/JuheonOh/bike-gear-shoppingmall-express
          </a>
        </p>
      </div>
      <div className="flex">
        <p className="w-1/4 font-bold">Frontend</p>
        <p className="w-3/4">Pug, jQuery, Ajax, Slick, CKEditor</p>
      </div>
      <div className="flex">
        <p className="w-1/4 font-bold">Backend</p>
        <p className="w-3/4">Express.js</p>
      </div>
      <div className="flex">
        <p className="w-1/4 font-bold">Database</p>
        <p className="w-3/4">MariaDB</p>
      </div>
    </div>
  );

  const bbsInfo = (
    <div className="space-y-4">
      <p>
        네이버 카페, 파쏘(Passo)를 참고하여 만든 <span className="font-bold">바이크 판매 장터 게시판 웹사이트</span>입니다.
      </p>
      <hr className="border-gray-200" />
      <div className="flex">
        <p className="w-1/4 font-bold">주요 기능</p>
        <p className="w-3/4">무한 스크롤 게시글 추가 로딩, 이미지 업로드, 업로드할 이미지 미리보기</p>
      </div>
      <div className="flex">
        <p className="w-1/4 font-bold">Github</p>
        <p className="w-3/4">
          <a href="https://github.com/JuheonOh/bbs-spring" className="text-blue-600 hover:underline" title="Spring Motorcycle BBS Github" target="_blank" rel="noopener noreferrer">
            https://github.com/JuheonOh/bbs-spring
          </a>
        </p>
      </div>
      <div className="flex">
        <p className="w-1/4 font-bold">Frontend</p>
        <p className="w-3/4">Bootstrap, jQuery, Ajax</p>
      </div>
      <div className="flex">
        <p className="w-1/4 font-bold">Backend</p>
        <p className="w-3/4">Spring</p>
      </div>
      <div className="flex">
        <p className="w-1/4 font-bold">Database</p>
        <p className="w-3/4">MariaDB</p>
      </div>
    </div>
  );

  const electrip = {
    title: "Electrip",
    date: "2023. 03",
    collaboration: "개인 프로젝트",
    url: "https://github.com/dhwngjs01/Electrip",
    swiperClassName: "swiper-electrip",
    swiperImageFolder: "electrip",
    swiperImageLength: electripImageLength,
    projectInfo: electripInfo,
  };

  const ohbike = {
    title: "Oh! Bike 쇼핑몰",
    date: "2019. 11",
    collaboration: "개인 프로젝트",
    url: "https://github.com/dhwngjs01/OhBike_ShoppingMall",
    swiperClassName: "swiper-ohbike",
    swiperImageFolder: "ohbike",
    swiperImageLength: ohbikeImageLength,
    projectInfo: ohbikeInfo,
  };

  const bbs = {
    title: "바이크 중고거래 게시판",
    date: "2019. 09",
    collaboration: "개인 프로젝트",
    url: "https://github.com/dhwngjs01/Spring_Motorcycle_BBS",
    swiperClassName: "swiper-springbbs",
    swiperImageFolder: "spring_bbs",
    swiperImageLength: bbsImageLength,
    projectInfo: bbsInfo,
  };

  return (
    <section id="projects" className="w-full min-h-screen py-28 bg-[#00897b]">
      <div className="container mx-auto px-6">
        <h2 className="flex justify-center items-center text-center text-5xl font-black gap-4 text-white mb-12">
          <FontAwesomeIcon icon={faLink} className="text-3xl cursor-pointer" onClick={() => scrollSection("projects")} />
          <span className="border-b-2 border-gray-200 pb-1">PROJECTS</span>
        </h2>

        <div className="flex flex-col gap-4">
          <div className="w-full">{ProjectCard(electrip)}</div>
          <div className="w-full">{ProjectCard(ohbike)}</div>
          <div className="w-full">{ProjectCard(bbs)}</div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard(param) {
  const { title, date, collaboration, swiperClassName, swiperImageFolder, swiperImageLength, projectInfo } = param;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm">
          {date} ({collaboration})
        </p>
      </div>
      <div className="flex gap-8">
        <div className="w-[400px] flex-shrink-0">
          <SlideAnimation swiperClassName={swiperClassName} swiperImageFolder={swiperImageFolder} swiperImageLength={swiperImageLength} />
        </div>
        <div className="flex-grow">{projectInfo}</div>
      </div>
    </div>
  );
}

function SlideAnimation(param) {
  const { swiperClassName, swiperImageFolder, swiperImageLength } = param;

  return (
    <div className="w-full">
      <Swiper className={`${swiperClassName} w-full`}>
        {[...Array(swiperImageLength)].map((_, index) => (
          <SwiperSlide key={index} className="flex items-center">
            <img src={`images/projects/${swiperImageFolder}/${index + 1}.png`} alt={index + 1} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
