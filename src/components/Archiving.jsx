import SectionHeader from "./SectionHeader";

export default function Archiving() {
  const archives = [
    {
      title: "GitHub",
      url: "https://github.com/JuheonOh",
      description: "소스 코드 저장소입니다.",
      iconSrc: "https://cdn.simpleicons.org/github/white",
      details: [
        "기능경기대회 대회 과제 풀이 (WebSkills)",
        "학부 시절 수강한 강의 코드",
        "과거 프로젝트 소스 코드",
        "Refactoring 및 Clean Code 연습",
      ],
    },
  ];

  return (
    <section
      id="archiving"
      className="min-h-screen w-full bg-slate-950 py-20 text-white lg:py-28"
    >
      <div className="container mx-auto px-6">
        {/* 헤더 */}
        <SectionHeader title="ARCHIVING" sectionId="archiving" />

        {/* 카드 그리드 */}
        <div
          className="animate-fade-up mx-auto max-w-lg gap-8"
          style={{ animationDelay: "0.2s" }}
        >
          {archives.map((archive, index) => (
            <a
              key={index}
              href={archive.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-slate-700 hover:shadow-slate-900/50"
            >
              {/* 호버 시 배경 강조 효과 */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* 아이콘 및 타이틀 */}
              <div className="mb-6 flex items-center gap-4">
                <div className="h-16 w-16 shrink-0">
                  <img
                    src={archive.iconSrc}
                    alt={archive.title}
                    className="h-full w-full object-contain drop-shadow-lg"
                  />
                </div>
                <div>
                  <h3 className={`text-3xl font-bold text-white`}>
                    {archive.title}
                  </h3>
                  <p className="mt-1 text-sm font-light text-slate-400">
                    {archive.url.replace("https://", "")}
                  </p>
                </div>
              </div>

              {/* 설명 및 리스트 */}
              <div className="relative z-10 flex grow flex-col">
                <p className="mb-6 text-lg font-medium text-slate-200">
                  <span className="font-bold text-yellow-400">
                    {archive.description.split(" ")[0]}
                  </span>{" "}
                  {archive.description.substring(
                    archive.description.indexOf(" ") + 1,
                  )}
                </p>

                <ul className="list-disc space-y-3 pl-5 text-slate-400 marker:text-yellow-400">
                  {archive.details.map((detail, i) => (
                    <li key={i} className="leading-relaxed">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
