import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scrollSection from "../utils/scrollSection";

export default function Awards() {
  const infoArr = [
    {
      imageSrc: "2017_national.jpg",
      imageAlt: "2017 제주특별자치도 제52회 전국기능경기대회 우수상(6등) 수상",
      infoTitle: (
        <h5>
          2017 제주특별자치도 제52회 전국기능경기대회 우수상&#40;6등&#41;
          수상&nbsp;
          <span>
            &#40;
            <a
              href="https://github.com/JuheonOh/webskills/tree/2017_%EC%A0%84%EA%B5%AD"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Github
            </a>
            &#41;
          </span>
        </h5>
      ),
    },
    {
      imageSrc: "2016_national.jpg",
      imageAlt: "2016 서울특별시 제51회 전국기능경기대회 동메달 수상",
      infoTitle: (
        <h5>
          2016 서울특별시 제51회 전국기능경기대회 동메달 수상&nbsp;
          <span>
            &#40;
            <a
              href="https://github.com/JuheonOh/webskills/tree/2016_%EC%A0%84%EA%B5%AD"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Github
            </a>
            &#41;
          </span>
        </h5>
      ),
    },

    {
      imageSrc: "worldskills_korea.jpg",
      imageAlt: "국제기능올림픽대회 한국위원회",
      infoTitle: (
        <>
          <h5>
            2017 광주광역시 지방기능경기대회 금메달 수상&nbsp;
            <span>
              &#40;
              <a
                href="https://github.com/JuheonOh/webskills/tree/2017_%EC%A7%80%EB%B0%A9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Github
              </a>
              &#41;
            </span>
          </h5>
          <h5>
            2016 광주광역시 지방기능경기대회 금메달 수상&nbsp;
            <span>
              &#40;
              <a
                href="https://github.com/JuheonOh/webskills/tree/2016_%EC%A7%80%EB%B0%A9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Github
              </a>
              &#41;
            </span>
          </h5>
          <h5>
            2015 광주광역시 지방기능경기대회 동메달 수상&nbsp;
            <span>
              &#40;
              <a
                href="https://github.com/JuheonOh/webskills/tree/2015_%EC%A7%80%EB%B0%A9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Github
              </a>
              &#41;
            </span>
          </h5>
        </>
      ),
    },
  ];

  return (
    <section id="awards" className="relative min-h-screen w-full py-28">
      <div
        className="absolute inset-0 isolate -z-10 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url(images/career/career_bg.jpg)" }}
      ></div>
      <div className="absolute inset-0 -z-10 bg-black opacity-50"></div>
      <div className="container mx-auto px-6">
        <h2 className="mb-12 flex items-center justify-center gap-4 text-center text-5xl font-black text-white">
          <FontAwesomeIcon
            icon={faLink}
            className="cursor-pointer text-3xl"
            onClick={() => scrollSection("awards")}
          />
          <span className="border-b-2 border-gray-200 pb-1">AWARDS</span>
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
    <div className="flex items-center gap-x-12 rounded-2xl bg-white/90 p-10 shadow-lg shadow-gray-500/50">
      <div className="w-1/4">
        <div className="aspect-square w-full overflow-hidden rounded-full border border-gray-200">
          <img
            src={`images/career/${imageSrc}`}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
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
