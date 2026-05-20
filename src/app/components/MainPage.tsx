import { Hero } from "./Home";
import { About } from "./About";
import { Workshops } from "./Workshops";
import { JoinAs } from "./JoinAs";
import { PastStories } from "./PastStories";
import { Sponsors } from "./Sponsors";
import { Contact } from "./Contact";

export function MainPage() {
  return (
    <>
      <Hero />
      <About />
      <Workshops />
      <JoinAs />
      <PastStories />
      <Sponsors />
      <Contact />
    </>
  );
}
