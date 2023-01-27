import React, { useState, useEffect } from 'react';

import './navigation.scss';
import './navigation-adapt.scss';

import vkIcon from '../../../images/vk_icon.svg';
import gitIcon from '../../../images/github_icon.svg';
import telegramIcon from '../../../images/telegram_icon.svg';

export function Navigation({ handleAddInfo, isNameAddInfo }) {
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia('(min-width: 780px)').matches
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

  function addInfo(e) {
    const valueButton = e.target.textContent;
    switch (valueButton) {
      case 'о себе':
        handleAddInfo('about-me');
        break;
      case 'опыт':
        handleAddInfo('skills');
        break;
      case 'контакты':
        handleAddInfo('contacts');
        break;
      case 'закрыть':
        handleAddInfo('');
        break;
      default:
        alert('');
    }
  }

  return (
    <div className='about-me__navbar'>
      <ul className='about-me__navbar-links'>
        <li className='about-me__navbar-link button-hover'>
          <a
            className='about-me__link'
            href='https://github.com//Vik163'
            target='_blank'
            rel='noreferrer'
          >
            <img className='about-me__link-icon' src={gitIcon} alt='Гитхаб' />
          </a>
        </li>
        <li className='about-me__navbar-link button-hover'>
          <a
            className='about-me__link'
            href='https://t.me/Vik163nk'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='about-me__link-icon'
              src={telegramIcon}
              alt='Телеграмм'
            />
          </a>
        </li>
      </ul>
      <div className='navigation'>
        <ul className='navigation__buttons'>
          <li
            className='navigation__buttons-item button-hover'
            onClick={addInfo}
          >
            <button
              className={`navigation__button ${
                isNameAddInfo === 'about-me' && 'navigation__button_active'
              }`}
            >
              {isNameAddInfo === 'about-me' ? 'закрыть' : 'о себе'}
            </button>
          </li>
          <li
            className='navigation__buttons-item button-hover'
            onClick={addInfo}
          >
            <button
              className={`navigation__button ${
                isNameAddInfo === 'skills' && 'navigation__button_active'
              }`}
            >
              {isNameAddInfo === 'skills' ? 'закрыть' : 'опыт'}
            </button>
          </li>
        </ul>
      </div>{' '}
    </div>
  );
}
