import {
  Navbar,
  Hero,
  Services,
  Experience,
  Works,
  AskMe,
  CTA,
  Footer,
} from "./components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Works />
        <AskMe />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
