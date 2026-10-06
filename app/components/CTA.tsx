import { PERSONAL_INFO } from "@/constants";

export function CTA() {
  return (
    <section className="bg-card py-16 sm:py-20">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="mb-3 text-[clamp(30px,4vw,42px)] font-bold leading-tight">
            Let’s make something amazing together.
          </h2>
          <p className="text-xl sm:text-[22px]">
            Start by{" "}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="font-medium text-org underline underline-offset-4 transition-opacity hover:opacity-85"
            >
              saying hi
            </a>
          </p>
        </div>
        <div>
          <b className="text-base font-semibold">Information</b>
          <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-mute">
            {PERSONAL_INFO.location} · {PERSONAL_INFO.availability}
            <br />
            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-teal"
            >
              LinkedIn
            </a>{" "}
            ·{" "}
            <a
              href={PERSONAL_INFO.socialLinks.openigloo}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-teal"
            >
              Openigloo
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

