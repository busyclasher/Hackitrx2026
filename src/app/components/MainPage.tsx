import { Hero } from "./Home";
import { About } from "./About";
import { Workshops } from "./Workshops";
import { JoinAs } from "./JoinAs";
import { Sponsors } from "./Sponsors";
import { Contact } from "./Contact";

export function MainPage() {
  return (
    <>
      <Hero />
      <About />
      <Workshops />
      <JoinAs />
      <Sponsors />
      <Contact />
    </>
  );
}
