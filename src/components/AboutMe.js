import { faCalendar, faEnvelope, faLink, faLocationDot, faPencil, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function AboutMe({ handleClickLinkIcon }) {
  const about_me = [
    {
      icon: faUser,
      category: "이름",
      content: "오주헌",
    },
    {
      icon: faCalendar,
      category: "생년월일",
      content: "99. 02. 03",
    },
    {
      icon: faLocationDot,
      category: "주소지",
      content: "인천광역시 미추홀구",
    },
    {
      icon: faPhone,
      category: "연락처",
      content: "010-6263-6013",
      type: "tel",
    },
    {
      icon: faEnvelope,
      category: "이메일",
      content: "dhwngjs01@naver.com",
      type: "mailto",
    },
    {
      icon: faPencil,
      category: "학력",
      content: "인하공업전문대학 (컴퓨터정보공학과)",
    },
  ];

  return (
    <section id="about-me" className="flex justify-center items-center w-full min-h-screen py-28">
      <div className="container mx-auto px-6 flex flex-col justify-center items-center gap-12">
        <h2 className="flex justify-center items-center font-noto text-center text-5xl font-black gap-4">
          <FontAwesomeIcon icon={faLink} className="text-3xl cursor-pointer" onClick={() => handleClickLinkIcon("about-me")} />
          <span className="border-b-2 border-gray-200 pb-1">ABOUT ME</span>
        </h2>
        <div className="grid grid-cols-3 gap-9">
          {about_me.map((item, index) => (
            <AboutMeItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutMeItem({ type, icon, category, content }) {
  return (
    <div className="flex gap-4">
      <div className="text-3xl flex items-center">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <h5 className="font-bold mb-1">{category}</h5>
        <span className="break-keep">
          {type ? (
            <a href={`${type}:${content}`} className="no-underline text-black hover:text-blue-700 transition-colors">
              {content}
            </a>
          ) : (
            content
          )}
        </span>
      </div>
    </div>
  );
}
