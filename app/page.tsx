import { AskMe } from "./components/AskMe";

const skills = [
  "TypeScript",
  "Python / Django",
  "PostgreSQL",
  "REST APIs",
  "Payments",
  "Push notifications",
  "System design",
  "Programmatic SEO · GEO",
];

export default function Home() {
  return (
    <>
      <div className="w">
        <nav className="site-nav">
          <a className="logo" href="#">
            Anuj Negi
          </a>
          <div className="links">
            <a href="#help">Services</a>
            <a href="#exp">Experience</a>
            <a href="#works">Works</a>
            <a href="#ask">Ask me</a>
          </div>
          <a className="mail" href="mailto:negianuj27@gmail.com">
            negianuj27@gmail.com
          </a>
        </nav>

        <div className="hero">
          <div>
            <h1>
              Hey There,
              <br />
              I’m Anuj
            </h1>
            <div className="yrs">
              <b>6</b>
              <span>
                Years
                <br />
                Experience
              </span>
            </div>
          </div>
          <div className="art">
            <svg viewBox="0 0 400 420" aria-hidden="true">
              <path
                fill="#2a7068"
                d="M70 330c-30-60 10-120 40-150 20-40 60-100 120-130 30-15 70-5 90 25 20 35 10 80-5 120 25 40 40 90 10 130-25 35-70 45-110 40-50-5-110 5-145-35z"
              />
            </svg>
            <div className="av" role="img" aria-label="Portrait placeholder">
              AN
            </div>
          </div>
          <div className="side">
            <p>
              I build beautifully fast products across web, mobile, and TV, and
              I love what I do.
            </p>
            <div className="badge">
              <b>Web · Mobile · TV</b>
              React · React Native · Next.js
            </div>
          </div>
        </div>
      </div>

      <section className="band" id="help">
        <div className="w two">
          <div>
            <div className="svc">
              <div className="dot" style={{ background: "var(--teal)" }}>
                ▦
              </div>
              <div>
                <h3>Web apps</h3>
                <p>React, Next.js, TypeScript</p>
              </div>
            </div>
            <div className="svc">
              <div className="dot" style={{ background: "var(--yel)" }}>
                ▭
              </div>
              <div>
                <h3>Mobile apps</h3>
                <p>React Native for iOS and Android</p>
              </div>
            </div>
            <div className="svc">
              <div className="dot" style={{ background: "var(--org)" }}>
                ▶
              </div>
              <div>
                <h3>TV &amp; OTT apps</h3>
                <p>Android TV, Fire TV, Apple TV</p>
              </div>
            </div>
          </div>
          <div>
            <h2>What do I help with?</h2>
            <p className="help-copy">
              I take features from scoping to release: building the interface,
              connecting the APIs, and automating the build and release
              pipeline. I contribute to Python/Django backends and work with
              product and design from day one. I also build with LLMs, using
              Claude Code, Cursor, and the OpenAI and Anthropic APIs.
            </p>
            <div className="stats">
              <div>
                <b>6+</b>
                <span>Years of shipping</span>
              </div>
              <div>
                <b>3</b>
                <span>Platforms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="t" id="exp">
        <div className="w">
          <h2>My Work Experience</h2>
          <div className="tl">
            <div className="row">
              <div className="co">
                <b>Openigloo Innovation Labs</b>
                <small>New York, NY · 2023 – 2026</small>
              </div>
              <div className="pin" style={{ background: "var(--teal)" }} />
              <div>
                <h3>Software Engineer</h3>
                <p>
                  Owned features end to end with product, design, and backend
                  teams. Led React Native apps and Next.js web apps, contributed
                  to Python/Django services, and built CI/CD and Fastlane
                  release automation.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="co">
                <b>Tycho Technologies</b>
                <small>Noida · Oct 2021 – Jun 2023</small>
              </div>
              <div className="pin" style={{ background: "var(--org)" }} />
              <div>
                <h3>Team Lead, React Native</h3>
                <p>
                  Led the React Native team delivering mobile and web apps for
                  clients across industries, with code reviews, agile delivery,
                  and post-launch support.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="co">
                <b>Saaspect · Shobbr</b>
                <small>Jul 2020 – Mar 2021</small>
              </div>
              <div className="pin" style={{ background: "var(--yel)" }} />
              <div>
                <h3>Developer apprentice · React intern</h3>
                <p>
                  Built React.js interfaces and front-end features while
                  learning component-based development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band" id="works">
        <div className="w">
          <div className="head">
            <div>
              <h2 style={{ margin: 0 }}>My Latest Works</h2>
              <span className="works-sub">
                Selected work from my time at Openigloo and Tycho
              </span>
            </div>
            <a
              href="https://www.openigloo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit openigloo.com
            </a>
          </div>
          <div className="works">
            <div className="wk" style={{ background: "var(--yel)", color: "#12343b" }}>
              <h3>App Design</h3>
              <small>Openigloo mobile</small>
              <p>
                React Native apps for iOS and Android, built for performance and
                a smooth experience.
              </p>
              <div className="ph" />
            </div>
            <div className="wk" style={{ background: "var(--teal)" }}>
              <h3>Web</h3>
              <small>Openigloo web</small>
              <p>Next.js experiences with reusable, well-tested front-end patterns.</p>
              <div className="ph" style={{ transform: "rotate(-6deg)" }} />
            </div>
            <div className="wk" style={{ background: "var(--mint)", color: "#12343b" }}>
              <h3>Release</h3>
              <small>CI/CD &amp; Fastlane</small>
              <p>
                Automated builds and releases for iOS and Android across staging
                and production.
              </p>
              <div className="ph" />
            </div>
          </div>
          <div className="chips">
            {skills.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <AskMe />

      <section className="band">
        <div className="w cta">
          <div>
            <h2>Let’s make something amazing together.</h2>
            <p className="cta-lead">
              Start by{" "}
              <a className="mail" href="mailto:negianuj27@gmail.com">
                saying hi
              </a>
            </p>
          </div>
          <div>
            <b>Information</b>
            <p className="info-copy">
              Ghaziabad, India · open to new roles and contract work
              <br />
              <a
                href="https://www.linkedin.com/in/anuj-negi-307a4519b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              ·{" "}
              <a
                href="https://www.openigloo.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Openigloo
              </a>
            </p>
          </div>
        </div>
      </section>
      <div className="w foot">
        <span className="logo">Anuj Negi</span>
        <span>© 2026 All rights reserved</span>
      </div>
    </>
  );
}
