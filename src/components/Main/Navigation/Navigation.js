import React, { useState, useEffect } from 'react';

import './Navigation.css';

import closeIcon from '../../../images/closeIcon.svg';
import icon__Toggle from '../../../images/icon__Toggle.svg';

function Navigation(props) {
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia('(min-width: 780px)').matches
  );
  const [isToggle, setIsToggle] = useState(false);
  const [isAddInfo, setIsAddInfo] = useState({
    display: 'none',
    src: icon__Toggle,
  });

  const menuLinks = (
    <ul className='navigation__links'>
      <li className='navigation__links-item button-hover'>
        <a className='navigation__link' href='#aboutMe'>
          о себе
        </a>
      </li>
      <li className='navigation__links-item button-hover'>
        <a className='navigation__link' href='#expirience'>
          опыт
        </a>
      </li>
      <li className='navigation__links-item button-hover'>
        <a className='navigation__link' href='#contacts'>
          контакты
        </a>
      </li>
    </ul>
  );

  //Контроль размера страницы
  useEffect(() => {
    const handler = (e) => setIsDesktop(e.matches);
    window.matchMedia('(min-width: 780px)').addEventListener('change', handler);
    return () =>
      window
        .matchMedia('(min-width: 780px)')
        .removeEventListener('change', handler);
  }, []);

  //Установка формы кнопки навигации
  useEffect(() => {
    isToggle
      ? setIsAddInfo({ display: 'flex', src: closeIcon })
      : setIsAddInfo({ display: 'none', src: icon__Toggle });
  }, [isToggle]);

  const toggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className='navigation'>
      {menuLinks}
      <div
        className='navigation__menu-shadow'
        style={{ display: isAddInfo.display }}
      ></div>
      {isAddInfo.src === closeIcon ? (
        <div
          className='navigation__menu'
          style={{ display: isAddInfo.display }}
        >
          <img
            className='navigation__icon navigation__icon-closeIcon button-hover'
            onClick={toggle}
            src={`${isAddInfo.src}`}
            alt='Кнопка'
          />
        </div>
      ) : (
        !isDesktop && (
          <img
            className='navigation__icon button-hover'
            onClick={toggle}
            src={`${isAddInfo.src}`}
            alt='Кнопка'
          />
        )
      )}
    </div>
  );
}

export default Navigation;
