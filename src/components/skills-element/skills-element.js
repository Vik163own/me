import { useState } from 'react';

import './skills-element.scss';
import './skills-element-adapt.scss';

export const SkillsElement = ({ name, procents, caption }) => {
  const [isHover, setIsHover] = useState(false);

  function handleScale(procents) {
    if (caption) {
      setIsHover(true);
      document.documentElement.style.setProperty('--scale', procents);
    } else {
      document.documentElement.style.setProperty('--scale', 0);
    }
  }

  return (
    <li
      className='skills__special'
      onMouseEnter={() => {
        handleScale(procents);
      }}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className='skills__special-procents'>{procents}</div>
      <div className='skills__special-shadow' />
      {name}
      {isHover && caption && (
        <ul className='scills__caption'>
          {caption.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
      )}
    </li>
  );
};
