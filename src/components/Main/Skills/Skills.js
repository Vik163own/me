import React from 'react';

import './SpecialSkills.css';
import './AdditionalSkills.css';

function Skills() {
  return (
    <section className='skills' id='skillsId'>
      <h2 className='skills__title'>НАВЫКИ</h2>
      <div className='skills__container'>
        <h3 className='skills__subtitle'>ПРОФЕССИОНАЛЬНЫЕ</h3>
        <h3 className='skills__subtitle'>ДОПОЛНИТЕЛЬНЫЕ</h3>
        <ul className='skills__special-container'>
          <li className='skills__special'>JS</li>
          <li className='skills__special'>React</li>
          <li className='skills__special'>HTML & CSS</li>
          <li className='skills__special'>Адаптивная верстка</li>
          <li className='skills__special'>Express.js</li>
          <li className='skills__special'>mongoDB</li>
          <li className='skills__special'>Git</li>
        </ul>
        <ul className='skills__additional-container'>
          <li className='skills__additional'>Figma</li>
          <li className='skills__additional'>Adobe Photoshop</li>
          <li className='skills__additional'>Растровая графика</li>
          <li className='skills__additional'>Дизайн логотипов</li>
          <li className='skills__additional'>Дизайн иконок</li>
          <li className='skills__additional'>Дизайн наружной рекламы</li>
          <li className='skills__additional'>Создание визиток</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
