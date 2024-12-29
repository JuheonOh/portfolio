// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles/Globals.scss";
import "./styles/global.css";

import AboutMe from "./components/AboutMe";
import Archiving from "./components/Archiving";
import Career from "./components/Career";
import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Header />
      <MainVisual />
      <AboutMe />
      <Skills />
      <Archiving />
      <Projects />
      <Career />
    </>
  );
}
