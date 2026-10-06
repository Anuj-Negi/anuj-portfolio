import { EXPERIENCES } from "@/constants";

export function Experience() {
  return (
    <section id="exp" className="py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <h2 className="mb-8 text-center text-[clamp(34px,5vw,52px)] font-bold leading-tight">
          My Work Experience
        </h2>
        <div className="mx-auto max-w-[860px]">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.company}
              className="mb-8 grid grid-cols-[22px_1fr] items-start gap-x-5 gap-y-1 md:grid-cols-[240px_22px_1fr] md:gap-5"
            >
              <div className="col-start-2 md:col-start-1">
                <b className="block text-base font-semibold">{exp.company}</b>
                <small className="block text-sm text-mute">{exp.period}</small>
              </div>
              <div
                className="col-start-1 row-start-1 mt-1.5 h-3.5 w-3.5 rounded-full shadow-[0_0_0_6px_var(--bg)] md:col-start-2 md:row-start-auto"
                style={{ background: exp.pinColor }}
              />
              <div className="col-start-2 md:col-start-3">
                <h3 className="m-0 mb-1 text-lg font-semibold">{exp.role}</h3>
                <p className="m-0 text-[15px] leading-relaxed text-mute">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

