import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faCode } from "@fortawesome/free-solid-svg-icons";
import scrollSection from "../../utils/scrollSection";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menu_list = [
    { id: "about-me", name: "About Me" },
    { id: "skills", name: "Skills" },
    { id: "archiving", name: "Archiving" },
    { id: "projects", name: "Projects" },
    { id: "awards", name: "Awards" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 여부 확인 (50px 이상 내려가면 스타일 변경)
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // IntersectionObserver 옵션 설정
    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Lazy Loading된 컴포넌트들이 마운트될 때까지 기다렸다가 observe 하기 위한 로직
    const observeSections = () => {
      // 관찰할 섹션 ID 목록
      const targetIds = ["main-visual", ...menu_list.map((menu) => menu.id)];
      let allFound = true;

      targetIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.observe(section);
        } else {
          // 하나라도 못 찾았으면 아직 다 로딩 안 된 것임
          allFound = false;
        }
      });

      return allFound;
    };

    // 초기 실행
    if (!observeSections()) {
      // 못 찾은 섹션이 있으면 0.5초마다 재시도 (최대 10초간)
      const intervalId = setInterval(() => {
        if (observeSections()) {
          clearInterval(intervalId); // 다 찾으면 반복 중단
        }
      }, 500);

      // 10초 뒤에는 강제 종료 (무한 루프 방지)
      setTimeout(() => clearInterval(intervalId), 10000);

      return () => {
        observer.disconnect();
        clearInterval(intervalId);
      };
    }

    return () => observer.disconnect();
  }, []);

  const handleMobileMenuClick = (id) => {
    scrollSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${isScrolled
            ? "border-b border-white/5 bg-slate-950/80 py-4 shadow-lg backdrop-blur-md"
            : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* 로고 */}
            <button
              onClick={() => scrollSection("main-visual")}
              className="group flex items-center gap-2 text-2xl font-black text-white transition-opacity hover:opacity-80"
            >
              <FontAwesomeIcon
                icon={faCode}
                className="text-yellow-400 transition-transform duration-300 group-hover:rotate-12"
              />
              <span className="tracking-tight">
                Juheon<span className="text-yellow-400">.</span>Dev
              </span>
            </button>

            {/* 데스크탑 메뉴 */}
            <ul className="hidden items-center space-x-8 md:flex">
              {menu_list.map((menu) => (
                <li key={menu.id}>
                  <button
                    onClick={() => scrollSection(menu.id)}
                    className={`group relative text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${activeSection === menu.id
                        ? "text-yellow-400"
                        : "text-slate-300 hover:text-white"
                      }`}
                  >
                    {menu.name}
                    {/* 중앙에서부터 좌우로 퍼지는 밑줄 애니메이션 */}
                    <span
                      className={`absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-yellow-400 transition-all duration-300 group-hover:w-full ${activeSection === menu.id ? "w-full" : ""
                        }`}
                    ></span>
                  </button>
                </li>
              ))}
            </ul>

            {/* 모바일 햄버거 버튼 */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-2xl text-white transition-colors hover:text-yellow-400"
              >
                <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
              </button>
            </div>
          </div>
        </div>

        {/* 모바일 드롭다운 메뉴 (전체 화면 딤드 처리 포함) */}
        <div
          className={`absolute left-0 top-full h-screen w-full bg-black/50 backdrop-blur-sm transition-all duration-300 md:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          onClick={() => setIsMobileMenuOpen(false)} // 배경 클릭 시 닫기
        >
          <div
            className={`w-full overflow-hidden bg-slate-950/95 shadow-2xl transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 border-b border-white/10" : "max-h-0"
              }`}
            onClick={(e) => e.stopPropagation()} // 메뉴 내부 클릭 시 닫기 방지
          >
            <ul className="flex flex-col items-center gap-8 py-10">
              {menu_list.map((menu) => (
                <li key={menu.id}>
                  <button
                    onClick={() => handleMobileMenuClick(menu.id)}
                    className={`text-lg font-bold uppercase tracking-widest transition-colors ${activeSection === menu.id
                        ? "text-yellow-400"
                        : "text-slate-400 hover:text-white"
                      }`}
                  >
                    {menu.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
