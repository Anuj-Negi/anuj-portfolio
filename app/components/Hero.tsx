import Image from "next/image";
import anujPortrait from "@/public/anuj-portrait.png";
import { PERSONAL_INFO } from "@/constants";

export function Hero() {
  return (
    <section className="mx-auto grid min-h-145 max-w-275 grid-cols-1 items-end gap-6 px-6 pt-6 pb-0 md:grid-cols-[1fr_1.3fr_0.9fr] md:gap-4 lg:grid-cols-[1fr_1.4fr_0.85fr] lg:gap-6">
      {/* Left Column: Greeting, Contact, and Experience */}
      <div className="flex flex-col justify-between self-stretch py-4 md:py-8">
        <div>
          <h1 className="m-0 text-[clamp(42px,5.5vw,76px)] font-bold leading-[1.04] tracking-tight text-ink">
            Hey There,
            <br />
            I’m Anuj
          </h1>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="mt-4 inline-block text-base font-medium text-org underline underline-offset-4 transition-opacity hover:opacity-85"
          >
            {PERSONAL_INFO.email}
          </a>
        </div>

        <div className="mt-10 flex items-center gap-3.5 md:mt-auto">
          <b className="text-[68px] font-semibold leading-none text-ink lg:text-[80px]">
            {PERSONAL_INFO.yearsOfExperience}
          </b>
          <span className="text-xs font-semibold uppercase leading-snug tracking-wider text-mute lg:text-[14px]">
            Years
            <br />
            Experience
          </span>
        </div>
      </div>

      {/* Center Column: Paint Splash Backdrop + Large Anchored Portrait */}
      <div className="relative mx-auto flex w-full max-w-110 items-end justify-center self-end lg:max-w-122.5">
        {/* Dynamic teal paint splash backdrop inspired by the reference */}
        <svg
          viewBox="0 0 500 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute inset-x-0 bottom-4 top-2 z-0 mx-auto h-full w-full -translate-y-2 scale-105 select-none opacity-95 transition-transform duration-500"
          aria-hidden="true"
        >
          {/* Broad diagonal paint sweep from bottom-left to top-right */}
          <path
            d="M80 430 C 50 360, 90 280, 140 230 C 180 190, 220 140, 290 90 C 340 55, 400 40, 440 60 C 465 72, 455 105, 430 135 C 385 190, 310 270, 230 350 C 170 410, 110 460, 80 430 Z"
            fill="var(--org)"
          />
          {/* Upper right textured splash and brush trails */}
          <path
            d="M320 80 C 370 40, 440 25, 470 50 C 485 62, 460 90, 420 120 C 380 150, 320 190, 280 220 C 270 200, 290 120, 320 80 Z"
            fill="var(--org)"
            opacity="0.9"
          />
          {/* Secondary painterly strokes */}
          <path
            d="M120 470 C 95 440, 120 380, 150 330 C 190 270, 270 170, 350 110 C 375 92, 395 105, 375 125 C 310 190, 220 300, 160 410 C 140 445, 130 480, 120 470 Z"
            fill="var(--org)"
          />
          <path
            d="M210 160 C 260 110, 320 70, 370 75 C 390 77, 370 100, 340 125 C 290 165, 230 220, 190 270 C 180 250, 195 180, 210 160 Z"
            fill="var(--org)"
            opacity="0.85"
          />
          <path
            d="M60 380 C 40 330, 70 270, 110 220 C 130 195, 145 205, 130 230 C 100 275, 75 330, 80 375 C 82 390, 68 395, 60 380 Z"
            fill="var(--org)"
            opacity="0.8"
          />
          {/* Paint splatters and droplet flecks */}
          <circle cx="455" cy="45" r="7" fill="var(--org)" />
          <circle cx="475" cy="75" r="4.5" fill="var(--org)" />
          <circle cx="435" cy="25" r="3.5" fill="var(--org)" />
          <circle cx="390" cy="30" r="5" fill="var(--org)" />
          <circle cx="480" cy="110" r="4" fill="var(--org)" />
          <circle cx="460" cy="140" r="3" fill="var(--org)" />
          <circle cx="55" cy="270" r="5" fill="var(--org)" />
          <circle cx="70" cy="240" r="3.5" fill="var(--org)" />
          <circle cx="95" cy="180" r="4" fill="var(--org)" />
          <circle cx="140" cy="140" r="3" fill="var(--org)" />
          <circle cx="70" cy="460" r="6" fill="var(--org)" />
          <circle cx="95" cy="490" r="4" fill="var(--org)" />
        </svg>

        {/* Prominent grounded portrait photo with static import for immediate cache bust */}
        <Image
          src={anujPortrait}
          alt={PERSONAL_INFO.name}
          priority
          className="relative z-10 max-h-130 w-auto object-contain object-bottom drop-shadow-2xl md:max-h-140 lg:max-h-155"
        />
      </div>

      {/* Right Column: Bio and Specialty Badge */}
      <div className="flex flex-col justify-between self-stretch py-4 md:py-8">
        <p className="text-base leading-relaxed text-ink/90 sm:text-lg lg:text-[19px]">
          {PERSONAL_INFO.heroDescription}
        </p>
      </div>
    </section>
  );
}
