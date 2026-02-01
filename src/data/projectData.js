// 기본 경로 가져오기 (배포 시 경로 문제 해결용)
const BASE_URL = import.meta.env.BASE_URL;

// --- 프로젝트 전체 이미지 임포트 ---
const allProjectImages = import.meta.glob(
  `../assets/images/projects/**/*.{png,jpg,jpeg,gif}`,
  { eager: true, query: "?url", import: "default" },
);

const getImageByFolder = (folderName) => {
  return Object.keys(allProjectImages)
    .filter((path) => path.includes(folderName))
    .map((path) => allProjectImages[path]);
};

// --- 프로젝트 데이터 정의 ---
export const projects = [
  {
    id: "auction",
    title: "실시간 중고 경매 플랫폼",
    date: "2024. 09",
    collaboration: "개인 프로젝트",
    swiperClassName: "swiper-auction",
    swiperImageFolder: "auction", // 이미지를 불러올 폴더명
    images: getImageByFolder("auction"),
    projectInfo: {
      description:
        "이베이, 옥션을 참고하여 만든 실시간 중고 경매 플랫폼 입니다.",
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
  },
  {
    id: "electrip",
    title: "Electrip (전기차 대여)",
    date: "2023. 03",
    collaboration: "개인 프로젝트",
    swiperClassName: "swiper-electrip",
    swiperImageFolder: "electrip",
    images: getImageByFolder("electrip"),
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
  },
  {
    id: "ohbike",
    title: "Oh! Bike 쇼핑몰",
    date: "2019. 11",
    collaboration: "개인 프로젝트",
    swiperClassName: "swiper-ohbike",
    swiperImageFolder: "ohbike",
    images: getImageByFolder("ohbike"),
    projectInfo: {
      description: "바이크 용품 전문 쇼핑몰 웹사이트입니다.",
      feature: "카테고리별 상품 조회, 장바구니/주문, 관리자 상품 관리",
      githubUrl: "https://github.com/JuheonOh/bike-gear-shoppingmall-express",
      usingSkills: [
        { name: "Frontend", tags: ["Pug", "jQuery", "Ajax", "Slick"] },
        { name: "Backend", tags: ["Express.js", "MariaDB"] },
      ],
    },
  },
  // {
  //   id: "bbs",
  //   title: "바이크 중고거래 장터",
  //   date: "2019. 09",
  //   collaboration: "개인 프로젝트",
  //   swiperClassName: "swiper-bbs",
  //   swiperImageFolder: "bbs",
  //   images: getImageByFolder("bbs"),
  //   projectInfo: {
  //     description: "커뮤니티 카페 형식을 참고한 중고 거래 게시판입니다.",
  //     feature: "무한 스크롤, 다중 이미지 업로드 및 미리보기, 게시글 CRUD",
  //     githubUrl: "https://github.com/JuheonOh/bbs-spring",
  //     usingSkills: [
  //       {
  //         name: "Stack",
  //         tags: ["Spring Legacy", "MariaDB", "Bootstrap", "jQuery"],
  //       },
  //     ],
  //   },
  // },
];
