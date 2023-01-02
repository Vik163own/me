import { useState } from 'react';

import './skills-element.scss';

export const SkillsElement = ({ name, procents, caption }) => {
  const [isHover, setIsHover] = useState(false);

  function handleScale(procents) {
    setIsHover(true);
    document.documentElement.style.setProperty('--scale', procents);
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
      {isHover && <div className='scills__caption'>{caption}</div>}
    </li>
  );
};
