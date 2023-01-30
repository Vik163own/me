import React, { useState, useEffect } from 'react';

import './about-me.scss';
import './about-me-additional.scss';
import './about-me-adapt.scss';
import './about-me-additional-adapt.scss';

import { Navigation } from '../navigation/navigation';

import foto from '../../../images/me.jpg';
import downloadIcon from '../../../images/download_icon.svg';
import resume from '../../../images/Пузиков резюме.pdf';
import { AboutMeAdditional } from './about-me-additional';

function AboutMe() {
  const [isAddInfoOpen, setIsAddInfoOpen] = useState(false);
  const [isNameAddInfo, setIsNameAddInfo] = useState('');
  const [classAddInfo, setClassAddInfo] = useState('');

  const handleAddInfo = (name) => {
    setClassAddInfo('');

    if (!isAddInfoOpen && name) {
      setClassAddInfo(`about-me__additional-info_active`);
      setIsNameAddInfo(name);
    }
    if (name) {
      setTimeout(() => {
        setClassAddInfo(`about-me__additional-info_active`);
        setIsNameAddInfo(name);
        setIsAddInfoOpen(true);
      }, 200);
    } else if (!name) {
      setTimeout(() => {
        setClassAddInfo('');
        setIsNameAddInfo(name);
        setIsAddInfoOpen(!isAddInfoOpen);
      }, 200);
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
    document.querySelector('.page').addEventListener('click', closeByEscape);
    return () => {
      document.removeEventListener('keydown', closeByEscape);
      document
        .querySelector('.page')
        .removeEventListener('click', closeByEscape);
    };
  }, [isAddInfoOpen]);

  return (
    <section className='about-me' id='aboutMeId'>
      <AboutMeAdditional
        classAddInfo={classAddInfo}
        isNameAddInfo={isNameAddInfo}
      />
      <div className='about-me__main-info'>
        <div className='about-me__image-container'>
          <img className='about-me__foto' src={foto} alt='фото' />
          <a className='about-me__download button-hover' href={resume} download>
            <img
              className='about-me__download-icon'
              src={downloadIcon}
              alt='download'
            />
            СКАЧАТЬ РЕЗЮМЕ
          </a>
        </div>
        <div className='about-me__description-container'>
          <h2 className='about-me__title'>
            Привет! Я{' '}
            <span className='about-me__title-name'>Пузиков Виктор</span>
          </h2>
          <p className='about-me__subtitle'>веб-разработчик</p>
          <p className='about-me__description'>
            &nbsp;Разработка увлекла! Нашлось любимое дело!
            <br /> Нет чувства рутины, нет усталости. Есть желание развиваться!
            Создавать продукты, которыми будут пользоваться люди! Я, человек
            открытый к новым знаниям и не боюсь перемен! Уверен, что смогу стать
            частью команды и приносить пользу!
          </p>
        </div>
        <ul className='about-me__contacts'>
          <li className='about-me__contact'>
            Возраст <span className='about-me__contacts-data'>47</span>
          </li>
          <li className='about-me__contact'>
            Адрес
            <span className='about-me__contacts-data'>
              Самара Новокуйбышевск
            </span>
          </li>
          <li className='about-me__contact'>
            Телефон
            <span className='about-me__contacts-data'>+7 927 267 90 44</span>
          </li>
          <li className='about-me__contact'>
            Email
            <span className='about-me__contacts-data'>sfoto116@yandex.ru</span>
          </li>

          <li className='aabout-me__contact'>
            &nbsp;
            <span className='about-me__contacts-data'></span>
          </li>
        </ul>
        <Navigation
          handleAddInfo={handleAddInfo}
          isNameAddInfo={isNameAddInfo}
        />
      </div>
    </section>
  );
}

export default AboutMe;
