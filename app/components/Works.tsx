import worksData from "@/data/works.json";
import { SKILLS } from "@/constants";
import type { WorkItem } from "@/types";

const works = worksData as WorkItem[];

export function Works() {
  return (
    <section id="works" className="bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="m-0 text-[clamp(34px,5vw,52px)] font-bold leading-tight">
              My Latest Works
            </h2>
            <span className="mt-1 block text-sm text-mute sm:text-[15px]">
              Selected work from my time at Openigloo and Tycho
            </span>
          </div>
          <a
            href="https://www.openigloo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-org underline-offset-4 hover:underline"
          >
            Visit openigloo.com
          </a>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <div
              key={work.id}
              className={`relative min-h-[300px] overflow-hidden rounded-[20px] p-6 pb-0 transition-transform duration-200 hover:-translate-y-1 ${
                work.className ?? ""
              }`.trim()}
              style={{
                background: work.background,
                color: work.color,
              }}
            >
              <h3 className="m-0 text-2xl font-bold">{work.title}</h3>
              <small className="mb-3 block text-sm opacity-85">
                {work.subtitle}
              </small>
              <p className="m-0 max-w-[240px] text-[14.5px] leading-relaxed opacity-95">
                {work.description}
              </p>
              <div
                className="absolute -bottom-8 right-5 h-[200px] w-[110px] rounded-[20px] border-[6px] border-[#12343b]/90 bg-white p-2.5 shadow-md"
                style={{ transform: work.phoneTransform ?? "rotate(8deg)" }}
              >
                <div className="h-[60px] w-full rounded-lg bg-yel opacity-90" />
                <div className="mt-3.5 h-2.5 w-full rounded-[5px] bg-[#d9d4c3]" />
                <div className="mt-2 h-2.5 w-3/4 rounded-[5px] bg-[#d9d4c3]" />
                <div className="mt-2 h-2.5 w-1/2 rounded-[5px] bg-[#d9d4c3]" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-line bg-bg px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:border-mute"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

