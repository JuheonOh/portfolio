import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scrollSection from "../utils/scrollSection";

export default function Career() {
  const infoArr = [
    {
      imageSrc: "2016_national.jpg",
      imageAlt: "2016 서울특별시 제51회 전국기능경기대회 동메달 수상",
      infoTitle: <h5>2016 서울특별시 제51회 전국기능경기대회 동메달 수상</h5>,
    },
    {
      imageSrc: "2017_national.jpg",
      imageAlt: "2017 제주특별자치도 제52회 전국기능경기대회 우수상(6등) 수상",
      infoTitle: <h5>2017 제주특별자치도 제52회 전국기능경기대회 우수상&#40;6등&#41; 수상</h5>,
    },
    {
      imageSrc: "worldskills_korea.jpg",
      imageAlt: "국제기능올림픽대회 한국위원회",
      infoTitle: (
        <>
          <h5>2017 광주광역시 지방기능경기대회 금메달 수상</h5>
          <h5>2016 광주광역시 지방기능경기대회 금메달 수상</h5>
          <h5>2015 광주광역시 지방기능경기대회 동메달 수상</h5>
        </>
      ),
    },
  ];

  return (
    <section id="career" className="relative w-full min-h-screen py-28">
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-top isolate -z-10" style={{ backgroundImage: "url(images/career/career_bg.jpg)" }}></div>
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
      <div className="container mx-auto px-6">
        <h2 className="flex justify-center items-center text-center text-5xl font-black gap-4 text-white mb-12">
          <FontAwesomeIcon icon={faLink} className="text-3xl cursor-pointer" onClick={() => scrollSection("career")} />
          <span className="border-b-2 border-gray-200 pb-1">CAREER</span>
        </h2>

        <div className="space-y-8">
          {infoArr.map((info, index) => (
            <CareerComponent key={index} {...info} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerComponent({ imageSrc, imageAlt, infoTitle, infoDesc }) {
  return (
    <div className="flex items-center gap-x-12 p-10 rounded-2xl bg-white/90 shadow-lg shadow-gray-500/50">
      <div className="w-1/4">
        <div className="w-full aspect-square rounded-full overflow-hidden border border-gray-200">
          <img src={`images/career/${imageSrc}`} alt={imageAlt} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="w-3/4">
        <div className="flex flex-col gap-3 text-xl">
          {infoTitle}
          {infoDesc}
        </div>
      </div>
    </div>
  );
}
