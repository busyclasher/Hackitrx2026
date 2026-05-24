import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { MainPage } from "./components/MainPage";
import { BuilderPage } from "./components/BuilderPage";
import { PatientOrgPage } from "./components/PatientOrgPage";
import { AboutPage } from "./components/AboutPage";
import { ProgrammesPage } from "./components/ProgrammesPage";
import { SpeakersPage } from "./components/SpeakersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: MainPage },
      { path: "about", Component: AboutPage },
      { path: "programmes", Component: ProgrammesPage },
      { path: "speakers", Component: SpeakersPage },
      { path: "join/builder", Component: BuilderPage },
      { path: "join/patient-organisation", Component: PatientOrgPage },
    ],
  },
]);
