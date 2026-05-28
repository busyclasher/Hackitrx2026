import { Hero } from "./Home";
import { About } from "./About";
import { JoinAs } from "./JoinAs";
import { Sponsors } from "./Sponsors";
import { Contact } from "./Contact";
import { Seo } from "./Seo";

export function MainPage() {
  return (
    <>
      <Seo
        title="HackitRx 2026 — Singapore's Healthcare Hackathon for Patient-Centric Innovation"
        description="HackitRx is Singapore's patient-centric, ground-up healthcare innovation challenge — a healthcare hackathon co-creating tech for public good, grounded in lived experience."
      />
      <Hero />
      <About />
      <JoinAs />
      <Sponsors />
      <Contact />
    </>
  );
}
