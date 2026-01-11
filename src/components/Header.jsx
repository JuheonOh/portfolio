import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faCode } from "@fortawesome/free-solid-svg-icons";
import scrollSection from "../utils/scrollSection";

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

      // 현재 활성화된 섹션 감지
      const scrollPosition = window.scrollY + 150; // 약간의 오프셋 추가

      let current = "";
      menu_list.forEach((menu) => {
        const section = document.getElementById(menu.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            current = menu.id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuClick = (id) => {
    scrollSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
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
                    className={`group relative text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                      activeSection === menu.id
                        ? "text-yellow-400"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {menu.name}
                    {/* 중앙에서부터 좌우로 퍼지는 밑줄 애니메이션 */}
                    <span
                      className={`absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-yellow-400 transition-all duration-300 group-hover:w-full ${
                        activeSection === menu.id ? "w-full" : ""
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

        {/* 모바일 드롭다운 메뉴 */}
        <div
          className={`absolute left-0 top-full w-full overflow-hidden bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
            isMobileMenuOpen
              ? "max-h-96 border-b border-white/10 shadow-2xl"
              : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-8 py-10">
            {menu_list.map((menu) => (
              <li key={menu.id}>
                <button
                  onClick={() => handleMobileMenuClick(menu.id)}
                  className={`text-lg font-bold uppercase tracking-widest transition-colors ${
                    activeSection === menu.id
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
      </nav>
    </header>
  );
}
