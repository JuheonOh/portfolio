import {
  faCode,
  faServer,
  faDatabase,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  const skillCategories = [
    {
      title: "Front-End",
      icon: faCode,
      skills: [
        { name: "HTML5", src: "https://cdn.simpleicons.org/html5/white" },
        { name: "CSS3", src: "https://cdn.simpleicons.org/css/white" },
        {
          name: "JavaScript",
          src: "https://cdn.simpleicons.org/javascript/white",
        },
        { name: "React", src: "https://cdn.simpleicons.org/react/white" },
        { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/white" },
        {
          name: "Tailwind",
          src: "https://cdn.simpleicons.org/tailwindcss/white",
        },
      ],
    },
    {
      title: "Back-End",
      icon: faServer,
      skills: [
        {
          name: "Spring Boot",
          src: "https://cdn.simpleicons.org/springboot/white",
        },
        { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs/white" },
        { name: "Express", src: "https://cdn.simpleicons.org/express/white" },
        { name: "PHP", src: "https://cdn.simpleicons.org/php/white" },
      ],
    },
    {
      title: "Database",
      icon: faDatabase,
      skills: [
        { name: "MySQL", src: "https://cdn.simpleicons.org/mysql/white" },
        { name: "MariaDB", src: "https://cdn.simpleicons.org/mariadb/white" },
        {
          name: "PostgreSQL",
          src: "https://cdn.simpleicons.org/postgresql/white",
        },
      ],
    },
    {
      title: "Tools & Version",
      icon: faCodeBranch,
      skills: [
        { name: "Git", src: "https://cdn.simpleicons.org/git/white" },
        { name: "GitHub", src: "https://cdn.simpleicons.org/github/white" },
        { name: "Docker", src: "https://cdn.simpleicons.org/docker/white" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen w-full bg-slate-950 py-20 lg:py-28"
    >
      <div className="container mx-auto px-6">
        {/* 헤더 */}
        <SectionHeader title="SKILLS" sectionId="skills" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl transition-all hover:-translate-y-1 hover:border-slate-700 hover:shadow-slate-900/50 ${category.className || ""}`}
            >
              {/* 카테고리 제목 */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-slate-300 shadow-inner">
                  <FontAwesomeIcon icon={category.icon} className="text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* 스킬 목록 */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-lg bg-slate-800/50 px-3 py-2 ring-1 ring-white/5 transition-all hover:bg-slate-700 hover:ring-white/20"
                  >
                    <img
                      src={skill.src}
                      alt={skill.name}
                      className="h-6 w-6 object-contain opacity-80 group-hover:opacity-100"
                    />
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
