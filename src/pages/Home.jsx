import { Suspense, lazy } from "react";
import Header from "../components/common/Header";
import Loading from "../components/common/Loading";
import MainVisual from "../components/sections/MainVisual";

// Lazy Load Sections
const AboutMe = lazy(() => import("../components/sections/AboutMe"));
const Archiving = lazy(() => import("../components/sections/Archiving"));
const Awards = lazy(() => import("../components/sections/Awards"));
const Projects = lazy(() => import("../components/sections/Projects"));
const Skills = lazy(() => import("../components/sections/Skills"));

export default function Home() {
  return (
    <>
      <Header />
      <MainVisual />
      <Suspense fallback={<Loading />}>
        <AboutMe />
        <Skills />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Archiving />
        <Projects />
        <Awards />
      </Suspense>
    </>
  );
}
