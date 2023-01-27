import React from 'react';

import './main.css';

import AboutMe from './about-me/about-me.js';
import { Education } from './education/education.js';
import Skills from './skills/skills.js';

function Main() {
  return (
    <main className='main'>
      <AboutMe />
      {/* <Skills />
      <Education /> */}
    </main>
  );
}

export default Main;
