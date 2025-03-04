import React, { useState } from "react";

import "./main.scss";

import AboutMe from "./about-me/about-me.js";
import { Education } from "./Education/Education.js";
import Skills from "./Skills/Skills.jsx";

function Main() {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <main className="main">
      <AboutMe setIsHidden={setIsHidden} />
      <Skills />
      <Education isHidden={isHidden} />
    </main>
  );
}

export default Main;
