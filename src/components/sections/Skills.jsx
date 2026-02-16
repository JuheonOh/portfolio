import {
  faCode,
  faServer,
  faDatabase,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPhp,
  faNodeJs,
  faGithub,
  faGit,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeader from "../common/SectionHeader";

export default function Skills() {
  const skillCategories = [
    {
      title: "Front-End",
      icon: faCode,
      skills: [
        { name: "HTML5", icon: faHtml5 },
        { name: "CSS3", icon: faCss3Alt },
        {
          name: "JavaScript",
          icon: faJs,
        },
        { name: "React", icon: faReact },
        { name: "Next.js", iconSrc: "https://cdn.simpleicons.org/nextdotjs/white" },
        { name: "Tailwind", iconSrc: "https://cdn.simpleicons.org/tailwindcss/white" },
      ],
    },
    {
      title: "Back-End",
      icon: faServer,
      skills: [
        {
          name: "Spring Boot",
          iconSrc: "https://cdn.simpleicons.org/springboot/white",
        },
        { name: "Node.js", icon: faNodeJs },
        { name: "Express", iconSrc: "https://cdn.simpleicons.org/express/white" },
        { name: "PHP", icon: faPhp },
      ],
    },
    {
      title: "Database",
      icon: faDatabase,
      skills: [
        { name: "MySQL", iconSrc: "https://cdn.simpleicons.org/mysql/white" },
        { name: "MariaDB", iconSrc: "https://cdn.simpleicons.org/mariadb/white" },
        {
          name: "PostgreSQL",
          iconSrc: "https://cdn.simpleicons.org/postgresql/white",
        },
      ],
    },
    {
      title: "Tools & Version",
      icon: faCodeBranch,
      skills: [
        { name: "Git", icon: faGit },
        { name: "GitHub", icon: faGithub },
        { name: "Docker", icon: faDocker },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen w-full bg-slate-950 py-20 lg:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* 헤더 */}
        <SectionHeader title="SKILLS" sectionId="skills" />

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl transition-all hover:-translate-y-1 hover:border-slate-700 hover:shadow-slate-900/50 sm:p-8 ${category.className || ""}`}
            >
              {/* 카테고리 제목 */}
              <div className="mb-5 flex items-center gap-3 sm:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-slate-300 shadow-inner">
                  <FontAwesomeIcon icon={category.icon} className="text-lg sm:text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {category.title}
                </h3>
              </div>

              {/* 스킬 목록 */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-lg bg-slate-800/50 px-3 py-1.5 text-sm sm:py-2 sm:text-base ring-1 ring-white/5 transition-all hover:bg-slate-700 hover:ring-white/20"
                  >
                    {skill.icon ? (
                      <FontAwesomeIcon
                        icon={skill.icon}
                        className="h-6 w-6 text-slate-300 opacity-80 transition-opacity group-hover:opacity-100"
                      />
                    ) : (
                      <img
                        src={skill.iconSrc}
                        alt={skill.name}
                        className="h-6 w-6 object-contain opacity-80 transition-opacity group-hover:opacity-100"
                      />
                    )}
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
