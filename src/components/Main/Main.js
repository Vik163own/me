import React from 'react';

import './Main.css';

// import Navigation from './Navigation/Navigation';
import AboutMe from './AboutMe/AboutMe.js';
import Education from './Education/Education.js';
import Skills from './Skills/Skills.js';
// import Portfolio from './Portfolio/Portfolio.js';

function Main() {
  return (
    <main className='main'>
      <AboutMe />
      <Skills />
      <Education />
      {/* <Portfolio /> */}
    </main>
  );
}

export default Main;
