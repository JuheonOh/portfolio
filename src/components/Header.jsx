import { useEffect, useState } from "react";
import scrollSection from "../utils/scrollSection";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const menu_list = [
    { id: "about-me", name: "About Me" },
    { id: "skills", name: "Skills" },
    { id: "archiving", name: "Archiving" },
    { id: "projects", name: "Projects" },
    { id: "awards", name: "Awards" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // 스크롤 위치에 따른 메뉴 활성화
      const scrollPosition = window.scrollY;
      const sectionList = document.querySelectorAll("section");
      sectionList.forEach((section) => {
        const id = section.getAttribute("id");
        const currentMenu = document.querySelector(`.nav-link[data-id="${id}"]`);

        if (scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight - 100) {
          document.querySelectorAll(".nav-link").forEach((button) => {
            button.classList.remove("text-blue-700");
          });
          currentMenu?.classList.remove("text-gray-700");
          currentMenu?.classList.add("text-blue-700");
        } else {
          currentMenu?.classList.add("text-gray-700");
          currentMenu?.classList.remove("text-blue-700");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => scrollSection("main-visual")} className={`text-3xl font-bold transition-colors ${isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-300 hover:text-white"}`}>
              Portfolio
            </button>

            <div>
              <ul className="flex space-x-8">
                {menu_list.map((menu, index) => (
                  <li key={index}>
                    <button data-id={menu.id} onClick={() => scrollSection(menu.id)} className={`nav-link text-xl transition-colors ${isScrolled ? "text-gray-700 hover:text-blue-700" : "text-gray-300 hover:text-white"} `}>
                      {menu.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
