import React from 'react';
import './SpecialSkills.scss';

function Skills() {
  const skillsElement = (name, procents) => {
    return (
      <li
        className='skills__special'
        onMouseEnter={() => {
          handleScale(procents);
        }}
      >
        <div className='skills__special-procents'>{procents}</div>
        <div className='skills__special-shadow' />
        {name}
      </li>
    );
  };

  function handleScale(procents) {
    document.documentElement.style.setProperty('--scale', procents);
  }

  return (
    <section className='skills' id='skillsId'>
      <h2 className='skills__title'>НАВЫКИ</h2>
      <div className='skills__container'>
        <h3 className='skills__subtitle'>ПРОФЕССИОНАЛЬНЫЕ</h3>
        <h3 className='skills__subtitle'>ДОПОЛНИТЕЛЬНЫЕ</h3>
        <ul className='skills__special-container'>
          {skillsElement('JS', '10%')}
          {skillsElement('React', '40%')}
          {skillsElement('HTML & CSS & SCSS', '60%')}
          {skillsElement('Адаптивная верстка', '50%')}
          {skillsElement('Express.js', '20%')}
          {skillsElement('MongoDB', '70%')}
          {skillsElement('Git', '70%')}
        </ul>
        <ul className='skills__additional-container'>
          {skillsElement('Figma', '70%')}
          {skillsElement('Adobe Photoshop', '70%')}
          {skillsElement('Растровая графика', '70%')}
          {skillsElement('Векторная графика', '70%')}
          {skillsElement('Дизайн логотипов', '70%')}
          {skillsElement('Дизайн иконок', '55%')}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
