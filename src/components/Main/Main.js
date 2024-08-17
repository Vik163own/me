import React from "react";

import "./main.scss";

import AboutMe from "./about-me/about-me.js";
import { Education } from "./Education/Education.js";
import Skills from "./Skills/Skills.js";

function Main() {
  return (
    <main className="main">
      <AboutMe />
      <Skills />
      <Education />
    </main>
  );
}

export default Main;
