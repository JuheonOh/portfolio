import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scrollSection from "../utils/scrollSection";

export default function Skills() {
  const skills = {
    frontend: [
      {
        name: "HTML5",
        bgColor: "#E34F26",
        textColor: "#ffffff",
      },
      {
        name: "CSS3",
        bgColor: "#1572B6",
        textColor: "#ffffff",
      },
      {
        name: "Bootstrap",
        bgColor: "#7952B3",
        textColor: "#ffffff",
      },
      {
        name: "Tailwind CSS",
        bgColor: "#06B6D4",
        textColor: "#ffffff",
      },
      {
        name: "JavaScript",
        bgColor: "#F7DF1E",
        textColor: "#000000",
      },
      {
        name: "jQuery",
        bgColor: "#0769AD",
        textColor: "#ffffff",
      },
      {
        name: "React",
        bgColor: "#61DAFB",
        textColor: "#000000",
      },
      {
        name: "Next.js",
        bgColor: "#000000",
        textColor: "#ffffff",
      },
    ],
    backend: [
      {
        name: "Spring Boot",
        bgColor: "#6DB33F",
        textColor: "#ffffff",
      },
      {
        name: "Node.js",
        bgColor: "#5FA04E",
        textColor: "#ffffff",
      },
      {
        name: "Express.js",
        bgColor: "#000000",
        textColor: "#ffffff",
      },
      {
        name: "PHP",
        bgColor: "#777BB4",
        textColor: "#ffffff",
      },
    ],
    database: [
      {
        name: "MySQL",
        bgColor: "#4479A1",
        textColor: "#ffffff",
      },
      {
        name: "MariaDB",
        bgColor: "#003545",
        textColor: "#ffffff",
      },
      {
        name: "PostgreSQL",
        bgColor: "#4169E1",
        textColor: "#ffffff",
      },
      {
        name: "Oracle",
        bgColor: "#F80000",
        textColor: "#ffffff",
      },
    ],
    versionControl: [
      {
        name: "Git",
        bgColor: "#f05032",
        textColor: "#ffffff",
      },
      {
        name: "GitHub",
        bgColor: "#181717",
        textColor: "#ffffff",
      },
    ],
  };

  return (
    <section id="skills" className="flex justify-center items-center w-full min-h-screen py-28 bg-[#5a8100]">
      <div className="container mx-auto px-6 flex flex-col justify-center items-center gap-12">
        <h2 className="flex justify-center items-center text-center text-5xl font-black gap-4 text-white">
          <FontAwesomeIcon icon={faLink} className="text-3xl cursor-pointer" onClick={() => scrollSection("skills")} />
          <span className="border-b-2 border-gray-200 pb-1">SKILLS</span>
        </h2>
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-wrap">
            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="border-b mb-4">
                <h3 className="text-blue-600 font-bold text-2xl">Front-End</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className={`text-white px-2 py-1 rounded-md`} style={{ backgroundColor: skill.bgColor, color: skill.textColor }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4">
            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="border-b mb-4">
                <h3 className="text-blue-600 font-bold text-2xl">Back-End</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.backend.map((skill, index) => (
                  <span key={index} className={`text-white px-2 py-1 rounded-md`} style={{ backgroundColor: skill.bgColor, color: skill.textColor }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="border-b mb-4">
                <h3 className="text-blue-600 font-bold text-2xl">Database</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.database.map((skill, index) => (
                  <span key={index} className={`text-white px-2 py-1 rounded-md`} style={{ backgroundColor: skill.bgColor, color: skill.textColor }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="border-b mb-4">
                <h3 className="text-blue-600 font-bold text-2xl">Version Control</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.versionControl.map((skill, index) => (
                  <span key={index} className={`text-white px-2 py-1 rounded-md`} style={{ backgroundColor: skill.bgColor, color: skill.textColor }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
