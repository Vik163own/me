import React, { useState, useEffect } from 'react';

import './about-me-additional';
import './about-me.css';
import './about-me.scss';

import { Navigation } from '../navigation/navigation';

import foto from '../../../images/me.jpg';
import downloadIcon from '../../../images/download_icon.svg';
import vkIcon from '../../../images/vk_icon.svg';
import gitIcon from '../../../images/github_icon.svg';
import telegramIcon from '../../../images/telegram_icon.svg';
import { AboutMeAdditional } from './about-me-additional';

function AboutMe() {
  const [isAddInfoOpen, setIsAddInfoOpen] = useState(false);
  const [isNameAddInfo, setIsNameAddInfo] = useState('');
  const [classAddInfo, setClassAddInfo] = useState('');

  const handleAddInfo = (name) => {
    if (isAddInfoOpen && name) {
      setClassAddInfo('');
      setTimeout(() => {
        setClassAddInfo(`aboutMe__additional-info-${name}`);
        setIsNameAddInfo(name);
        setIsAddInfoOpen(true);
      }, 500);
    } else {
      setClassAddInfo(`aboutMe__additional-info-${name}`);
      setIsNameAddInfo(name);
      setIsAddInfoOpen(!isAddInfoOpen);
    }
  };

  useEffect(() => {
    if (!isAddInfoOpen) return;
    const closeByEscape = (e) => {
      if (e.key === 'Escape' || e.target === e.currentTarget) {
        handleAddInfo('');
      }
    };

    document.addEventListener('keydown', closeByEscape);
    document.querySelector('.main').addEventListener('click', closeByEscape);
    return () => {
      document.removeEventListener('keydown', closeByEscape);
      document
        .querySelector('.main')
        .removeEventListener('click', closeByEscape);
    };
  }, [isAddInfoOpen]);

  return (
    <section className='aboutMe' id='aboutMeId'>
      <AboutMeAdditional
        classAddInfo={classAddInfo}
        isNameAddInfo={isNameAddInfo}
      />
      <div className='aboutMe__main-info'>
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
            &nbsp;Разработка увлекла! Нашлось дело, которому я рад отдавать
            всего себя! Нет чувства рутины, нет усталости. Есть желание
            развиваться! Создавать продукты, которыми будут пользоваться люди!
            Творить! Созидать! Я, человек открытый к новым знаниям и не боюсь
            перемен! Уверен, что смогу стать частью команды и приносить пользу!
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
              &nbsp;
              <span className='aboutMe__contacts-data'></span>
            </li>
          </ul>
          <div className='aboutMe__navbar'>
            <ul className='aboutMe__navbar-links'>
              {/* <li className='aboutMe__navbar-link button-hover'>
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
              </li> */}
              <li className='aboutMe__navbar-link button-hover'>
                <a
                  className='aboutMe__link'
                  href='https://github.com//Vik163'
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
            <Navigation
              handleAddInfo={handleAddInfo}
              isNameAddInfo={isNameAddInfo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
