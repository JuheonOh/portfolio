import { faHome, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-950 px-4 text-center text-white">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-900 shadow-2xl shadow-yellow-400/20">
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          className="text-5xl text-yellow-400"
        />
      </div>
      <h1 className="mb-2 text-6xl font-black tracking-tighter text-white md:text-8xl">
        404
      </h1>
      <h2 className="mb-6 text-2xl font-bold text-slate-300 md:text-3xl">
        Page Not Found
      </h2>
      <p className="mb-8 max-w-md text-slate-400">
        찾으시는 페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.
        <br />
        입력하신 주소가 정확한지 다시 한 번 확인해주세요.
      </p>
      <Link
        to="/"
        className="group inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-3 text-lg font-bold text-slate-950 transition-all hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
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
