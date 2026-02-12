export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-slate-950 py-20 lg:py-28">
      <div className="container mx-auto px-6">
        {/* 섹션 헤더 스켈레톤 (Title Area) */}
        <div className="mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="h-4 w-8 animate-pulse rounded bg-slate-800"></div>
          <div className="h-10 w-48 animate-pulse rounded-lg bg-slate-800"></div>
          <div className="mt-2 h-1 w-24 animate-pulse rounded-full bg-slate-800"></div>
        </div>

        {/* 콘텐츠 카드 스켈레톤 (Generic Card Grid) */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="flex h-80 w-full animate-pulse flex-col rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-xl"
            >
              {/* 상단: 아이콘/이미지 + 제목 */}
              <div className="mb-6 flex items-center gap-6">
                <div className="h-16 w-16 shrink-0 rounded-2xl bg-slate-800"></div>
                <div className="flex flex-col gap-3">
                  <div className="h-6 w-32 rounded bg-slate-800"></div>
                  <div className="h-4 w-20 rounded bg-slate-800"></div>
                </div>
              </div>

              {/* 하단: 본문 라인들 */}
              <div className="space-y-4">
                <div className="h-4 w-full rounded bg-slate-800"></div>
                <div className="h-4 w-full rounded bg-slate-800"></div>
                <div className="h-4 w-3/4 rounded bg-slate-800"></div>
                <div className="mt-6 flex gap-3">
                  <div className="h-8 w-20 rounded-lg bg-slate-800"></div>
                  <div className="h-8 w-20 rounded-lg bg-slate-800"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
