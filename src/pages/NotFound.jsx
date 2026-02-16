import { faHome, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-950 px-4 text-center text-white">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 shadow-2xl shadow-yellow-400/20 sm:h-24 sm:w-24">
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          className="text-4xl text-yellow-400 sm:text-5xl"
        />
      </div>
      <h1 className="mb-2 text-5xl font-black tracking-tighter text-white sm:text-6xl md:text-8xl">
        404
      </h1>
      <h2 className="mb-6 text-xl font-bold text-slate-300 sm:text-2xl md:text-3xl">
        Page Not Found
      </h2>
      <p className="mb-8 max-w-md text-slate-400">
        찾으시는 페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.
        <br />
        입력하신 주소가 정확한지 다시 한 번 확인해주세요.
      </p>
      <Link
        to="/"
        className="group inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-2.5 text-base font-bold text-slate-950 transition-all hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] sm:px-8 sm:py-3 sm:text-lg"
      >
        <FontAwesomeIcon
          icon={faHome}
          className="transition-transform group-hover:-translate-y-0.5"
        />
        <span>홈으로 돌아가기</span>
      </Link>
    </div>
  );
}
