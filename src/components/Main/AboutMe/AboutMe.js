import React from 'react';

import './AboutMe.css';

import Navigation from '../Navigation/Navigation';

import foto from '../../../images/DSCF1927.jpg';
import downloadIcon from '../../../images/download_icon.svg';
import vkIcon from '../../../images/vk_icon.svg';
import gitIcon from '../../../images/github_icon.svg';
import telegramIcon from '../../../images/telegram_icon.svg';

function AboutMe() {
  return (
    <section className='aboutMe' id='aboutMeId'>
      <div className='aboutMe__image-container'>
        <img className='aboutMe__foto' src={foto} alt='фото' />
        <button
          className='aboutMe__download button-hover'
          aria-label='download'
          type='button'
        >
          <img
            className='aboutMe__download-icon'
            src={downloadIcon}
            alt='download'
          />
          СКАЧАТЬ РЕЗЮМЕ
        </button>
      </div>
      <div className='aboutMe__description-container'>
        <h2 className='aboutMe__title'>
          Привет Я <span className='aboutMe__title-name'>Пузиков Виктор</span>
        </h2>
        <p className='aboutMe__subtitle'>веб-разработчик</p>
        <p className='aboutMe__description'>
          zzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
          zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzzzzz
          zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
          zzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz.
        </p>
        <ul className='aboutMe__contacts'>
          <li className='aboutMe__contact'>
            Возраст <span className='aboutMe__contacts-data'>47</span>
          </li>
          <li className='aboutMe__contact'>
            Адрес
            <span className='aboutMe__contacts-data'>
              Самара Новокуйбышевск
            </span>
          </li>
          <li className='aboutMe__contact'>
            Email
            <span className='aboutMe__contacts-data'>sfoto116@yandex.ru</span>
          </li>
          <li className='aboutMe__contact'>
            Телефон
            <span className='aboutMe__contacts-data'>+7 927 267 90 44</span>
          </li>
          <li className='aboutMe__contact'>
            Веб-сайт <span className='aboutMe__contacts-data'>www@www.ru</span>
          </li>
        </ul>
        <div className='aboutMe__navbar'>
          <ul className='aboutMe__navbar-links'>
            <li className='aboutMe__navbar-link button-hover'>
              <a
                className='aboutMe__link'
                href='https://vk.com/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  className='aboutMe__link-icon'
                  src={vkIcon}
                  alt='ВКонтакте'
                />
              </a>
            </li>
            <li className='aboutMe__navbar-link button-hover'>
              <a
                className='aboutMe__link'
                href='https://github.com/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  className='aboutMe__link-icon'
                  src={gitIcon}
                  alt='Гитхаб'
                />
              </a>
            </li>
            <li className='aboutMe__navbar-link button-hover'>
              <a
                className='aboutMe__link'
                href='https://github.com/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  className='aboutMe__link-icon'
                  src={telegramIcon}
                  alt='Телеграмм'
                />
              </a>
            </li>
          </ul>
          <Navigation />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
