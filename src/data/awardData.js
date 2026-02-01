const BASE_URL = import.meta.env.BASE_URL;

// --- 수상내역 전체 이미지 임포트 ---
const awardsImages = import.meta.glob(
  `../assets/images/awards/*.{png,jpg,jpeg,gif}`,
  { eager: true, query: "?url", import: "default" },
);

const getAwardImage = (fileName) => {
  const foundKey = Object.keys(awardsImages).find((path) =>
    path.includes(fileName),
  );
  return foundKey ? awardsImages[foundKey] : null;
};

export const awards = [
  {
    type: "academic",
    year: "2025.01",
    title: "한국컴퓨터정보학회 동계학술대회",
    rank: "우수논문상",
    image: getAwardImage("ksci_logo.jpg"),
    link: {
      code: "https://github.com/JuheonOh/realtime-auction-spring",
      paper: `${BASE_URL}papers/real-time_auction_system_paper.pdf`,
    },
  },
  {
    type: "college",
    year: "2023.06",
    title: "M&A (Metaverse & AI) 경진대회",
    rank: "금상",
    image: getAwardImage("inhatc_logo.jpg"),
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
    image: getAwardImage("2017_national.jpg"),
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
    image: getAwardImage("2016_national.jpg"),
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
    image: getAwardImage("worldskills_korea.jpg"),
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
