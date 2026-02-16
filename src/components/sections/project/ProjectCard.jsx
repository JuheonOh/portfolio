import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckCircle,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectSlide from "./ProjectSlide";

export default function ProjectCard({
  title,
  date,
  collaboration,
  swiperClassName,
  images,
  projectInfo,
  onImageClick,
}) {
  return (
    // 카드 전체 컨테이너
    <div className="group flex flex-col items-stretch gap-6 rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-2xl transition-all duration-300 hover:border-slate-700 sm:gap-8 md:p-8 lg:flex-row lg:gap-12">
      {/* 왼쪽 이미지 슬라이더 영역 */}
      <div className="aspect-video w-full flex-shrink-0 lg:w-1/2">
        <div className="relative h-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-inner">
          <ProjectSlide
            swiperClassName={swiperClassName}
            images={images}
            onImageClick={onImageClick}
          />
        </div>
      </div>

      {/* 오른쪽 프로젝트 상세 정보 영역 */}
      <div className="flex w-full flex-col gap-6 lg:w-1/2">
        {/* 제목 및 날짜 */}
        <div className="flex flex-col gap-2 border-b border-slate-800 pb-4">
          <div className="flex flex-col-reverse items-start gap-2 md:flex-row md:items-center md:justify-between">
            <h3 className="break-keep text-xl font-bold text-white transition-colors group-hover:text-yellow-400 sm:text-2xl md:text-3xl">
              {title}
            </h3>
            <span className="shrink-0 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-bold text-slate-400">
              {collaboration}
            </span>
          </div>
          <p className="font-medium text-slate-500">{date}</p>
        </div>

        {/* 프로젝트 설명 */}
        <p className="break-keep text-sm leading-relaxed text-slate-300 sm:text-base">
          {projectInfo.description}
        </p>

        {/* 주요 기능 설명 */}
        <div className="flex flex-col gap-2">
          <h4 className="flex items-center gap-2 font-bold text-white">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-sm text-yellow-400"
            />
            주요 기능
          </h4>
          <p className="break-keep rounded-lg bg-slate-800/50 p-2.5 text-sm leading-relaxed text-slate-400 sm:p-3">
            {projectInfo.feature}
          </p>
        </div>

        {/* 기술 스택 */}
        <div className="flex flex-grow flex-col gap-3">
          {projectInfo.usingSkills?.map((skill, index) => (
            <div key={index} className="flex flex-col gap-1">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                {skill.name}
              </span>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200 transition-colors hover:bg-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 하단 링크 버튼들 */}
        <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center">
          {/* 논문 링크가 존재할 경우에만 렌더링 */}
          {projectInfo.paperUrl && (
            <a
              href={projectInfo.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:shadow-yellow-400/20 sm:px-6 sm:py-3 lg:w-auto"
            >
              <FontAwesomeIcon icon={faLink} className="text-xl" />
              <span>관련 논문 보기</span>
            </a>
          )}

          <a
            href={projectInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:shadow-yellow-400/20 sm:px-6 sm:py-3 lg:ml-auto lg:w-auto"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
}
