import React from 'react';

import './Main.css';

import AboutMe from './AboutMe/AboutMe.js';
import Education from './Education/Education.js';
import Skills from './Skills/Skills.js';

function Main() {
  return (
    <main className='main'>
      <AboutMe />
      <Skills />
      <Education />
    </main>
  );
}

export default Main;
