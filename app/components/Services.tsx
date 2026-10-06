import { SERVICES, SERVICES_CONTENT } from "@/constants";

export function Services() {
  return (
    <section id="help" className="bg-card py-16 sm:py-20">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-[1fr_1.1fr] md:gap-12">
        <div>
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="mb-4 flex items-center gap-5 rounded-[18px] border border-line bg-bg p-5 shadow-[0_10px_28px_rgba(18,52,59,0.07)] transition-transform hover:-translate-y-0.5 sm:p-6"
            >
              <div
                className="grid h-[70px] w-[70px] shrink-0 place-items-center rounded-full text-2xl font-bold text-white shadow-xs"
                style={{ background: svc.dotBg }}
              >
                {svc.icon}
              </div>
              <div>
                <h3 className="m-0 text-[23px] font-semibold">{svc.title}</h3>
                <p className="m-0 text-[15px] text-mute">{svc.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="mb-5 text-[clamp(34px,5vw,52px)] font-bold leading-tight">
            {SERVICES_CONTENT.title}
          </h2>
          <p className="text-[17px] leading-relaxed text-mute">
            {SERVICES_CONTENT.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-8 sm:gap-14">
            {SERVICES_CONTENT.stats.map((stat) => (
              <div key={stat.label}>
                <b className="block text-5xl font-semibold leading-[1.1] sm:text-[56px]">
                  {stat.value}
                </b>
                <span className="text-[15px] text-mute">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

