import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scrollSection from "../utils/scrollSection";

export default function Skills() {
  const skills = {
    frontEnd: [
      {
        name: "HTML5, CSS3, JavaScript",
        icon: "images/icons/front-end/htmlcssjs.png",
      },
      {
        name: "Bootstrap",
        icon: "images/icons/front-end/bootstrap.png",
      },
      {
        name: "jQuery",
        icon: "images/icons/front-end/jquery.png",
      },
      {
        name: "React",
        icon: "images/icons/front-end/react.png",
      },
      {
        name: "Next.js",
        icon: "images/icons/front-end/nextjs.png",
      },
    ],
    backEnd: [
      {
        name: "PHP",
        icon: "images/icons/back-end/php.png",
        className: "max-w-[75%]",
      },
      {
        name: "Node.js",
        icon: "images/icons/back-end/nodejs.png",
      },
      {
        name: "Express.js",
        icon: "images/icons/back-end/expressjs.png",
      },
      {
        name: "Spring",
        icon: "images/icons/back-end/spring.png",
      },
    ],
    database: [
      {
        name: "MySQL",
        icon: "images/icons/database/mysql.png",
        className: "max-w-[75%]",
      },
      {
        name: "MariaDB",
        icon: "images/icons/database/mariadb.png",
        className: "max-w-[75%]",
      },
    ],
    versionControl: [
      {
        name: "Git",
        icon: "images/icons/version-control/git.png",
        className: "max-w-[75%]",
      },
      {
        name: "GitHub",
        icon: "images/icons/version-control/github.png",
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
        <div className="w-full">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1">
              <div className="bg-white p-6 rounded-2xl shadow">
                <div className="border-b">
                  <h3 className="text-blue-600 font-bold text-2xl">Front-End</h3>
                </div>
                <div className="p-4">
                  <div className="flex flex-col gap-y-6">
                    {skills.frontEnd.map((skill, index) => (
                      <div key={index} className="flex justify-center">
                        <img src={skill.icon} alt={`${skill.name} 아이콘`} title={skill.name} className={`w-full ${skill.className || ""}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-4">
              <div className="bg-white p-6 rounded-2xl shadow">
                <div className="border-b">
                  <h3 className="text-blue-600 font-bold text-2xl">Back-End</h3>
                </div>
                <div className="p-4">
                  <div className="grid gap-y-6">
                    {skills.backEnd.map((skill, index) => (
                      <div key={index} className="flex justify-center">
                        <img src={skill.icon} alt={`${skill.name} 아이콘`} title={skill.name} className={`w-full ${skill.className || ""}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-4">
              <div className="bg-white p-6 rounded-2xl shadow">
                <div className="border-b">
                  <h3 className="text-blue-600 font-bold text-2xl">Database</h3>
                </div>
                <div className="p-4">
                  <div className="grid gap-y-6">
                    {skills.database.map((skill, index) => (
                      <div key={index} className="flex justify-center">
                        <img src={skill.icon} alt={`${skill.name} 아이콘`} title={skill.name} className={`w-full ${skill.className || ""}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow">
                <div className="border-b">
                  <h3 className="text-blue-600 font-bold text-2xl">Version Control</h3>
                </div>
                <div className="p-4">
                  <div className="grid gap-y-6">
                    {skills.versionControl.map((skill, index) => (
                      <div key={index} className="flex justify-center">
                        <img src={skill.icon} alt={`${skill.name} 아이콘`} title={skill.name} className={`w-full ${skill.className || ""}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
