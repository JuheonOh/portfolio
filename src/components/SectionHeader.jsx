import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scrollSection from "../utils/scrollSection";

export default function SectionHeader({ title, sectionId, description }) {
  return (
    <div className="animate-fade-up mb-16 text-center md:mb-20">
      <h2 className="flex items-center justify-center gap-3 text-4xl font-black text-white md:text-5xl">
        <FontAwesomeIcon
          icon={faLink}
          className="cursor-pointer text-3xl text-yellow-400 transition-colors hover:text-yellow-300"
          onClick={() => scrollSection(sectionId)}
        />
        <span className="border-b-4 border-yellow-400 pb-2">{title}</span>
      </h2>

      {description && (
        <p className="mt-4 text-lg text-slate-400">{description}</p>
      )}
    </div>
  );
}
