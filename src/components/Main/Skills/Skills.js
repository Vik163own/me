import React from 'react';
import './special-skills.scss';

import { SkillsElement } from '../../skills-element/skills-element';
import {
  scillsSpecialInfo,
  scillsAdditionalInfo,
} from '../../../utils/constants';

function Skills() {
  return (
    <section className='skills' id='skillsId'>
      <h2 className='skills__title'>НАВЫКИ</h2>
      <div className='skills__container'>
        <h3 className='skills__subtitle'>ПРОФЕССИОНАЛЬНЫЕ</h3>
        <ul className='skills__special-container'>
          {scillsSpecialInfo.map((item, index) => (
            <SkillsElement
              key={index}
              name={item.name}
              procents={item.procents}
              caption={item.caption}
            />
          ))}
        </ul>
        <h3 className='skills__subtitle'>ДОПОЛНИТЕЛЬНЫЕ</h3>
        <ul className='skills__additional-container'>
          {scillsAdditionalInfo.map((item, index) => (
            <SkillsElement
              key={index}
              name={item.name}
              procents={item.procents}
              caption={item.caption}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
