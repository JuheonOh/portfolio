import { useModal } from "../../context/ModalContext";
import { projects } from "../../data/projectData";
import SectionHeader from "../common/SectionHeader";
import ProjectCard from "./project/ProjectCard";
import ProjectModalContent from "./project/ProjectModalContent";

export default function Projects() {
  const { openModal } = useModal();

  // 이미지 클릭 시 모달을 띄우는 핸들러
  // 클릭된 프로젝트의 전체 이미지 배열과 클릭한 이미지의 인덱스를 전달받음
  const handleImageClick = (images, initialIndex) => {
    openModal(
      <ProjectModalContent images={images} initialIndex={initialIndex} />,
    );
  };

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-slate-950 py-20 text-white lg:py-28"
    >
      <div className="container mx-auto px-6">
        {/* 공통 섹션 헤더 컴포넌트 */}
        <SectionHeader title="PROJECTS" sectionId="projects" />

        {/* 프로젝트 카드 리스트 영역 */}
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }} // 순차적 등장을 위한 딜레이 설정
            >
              {/* 각 프로젝트 데이터를 카드 컴포넌트에 전달 */}
              <ProjectCard {...project} onImageClick={handleImageClick} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
