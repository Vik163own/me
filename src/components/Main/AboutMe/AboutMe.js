import React, { useState, useEffect } from 'react';

import './AboutMeAdditional';
import './AboutMe.css';
import './AboutMe.scss';

import Navigation from '../Navigation/Navigation';

import foto from '../../../images/me.jpg';
import downloadIcon from '../../../images/download_icon.svg';
import vkIcon from '../../../images/vk_icon.svg';
import gitIcon from '../../../images/github_icon.svg';
import telegramIcon from '../../../images/telegram_icon.svg';
import AboutMeAdditional from './AboutMeAdditional';

function AboutMe() {
  const [isPopupAboutMe, setIsPopupAboutMe] = useState(false);
  const [isPopupSkills, setIsPopupSkills] = useState(false);
  const [isPopupContacts, setIsPopupContacts] = useState(false);
  const [classPopup, setClassPopup] = useState('');
  const popups = [isPopupAboutMe, isPopupSkills, isPopupContacts];

  const handlePopups = (namePopup, isPopup, setIsPopup) => {
    let popup = popups.find((item) => item === true);
    if (popup) {
      closePopups();

      setTimeout(() => {
        setClassPopup(`aboutMe__additional-info-${namePopup}`);
        setIsPopup(!isPopup);
      }, 500);
    } else {
      setClassPopup(`aboutMe__additional-info-${namePopup}`);
      setIsPopup(!isPopup);
    }
  };

  function popupAboutMe() {
    if (isPopupAboutMe) {
      closePopups();
    } else {
      handlePopups('isPopupAboutMe', isPopupAboutMe, setIsPopupAboutMe);
    }
  }

  function popupSkills() {
    if (isPopupSkills) {
      closePopups();
    } else {
      handlePopups('isPopupSkills', isPopupSkills, setIsPopupSkills);
    }
  }

  function popupContacts() {
    if (isPopupContacts) {
      closePopups();
    } else {
      handlePopups('isPopupContacts', isPopupContacts, setIsPopupContacts);
    }
  }

  function closePopups() {
    setIsPopupSkills(false);
    setIsPopupContacts(false);
    setIsPopupAboutMe(false);
    setClassPopup('');
  }

  useEffect(() => {
    if (!popups.some((item) => item === true)) return;
    // объявляем внутри `useEffect` функцию, чтобы она не теряла ссылку при перерисовке компонента
    const closeByEscape = (e) => {
      if (e.key === 'Escape' || e.target === e.currentTarget) {
        closePopups();
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
  }, [popups]);

  return (
    <section className='aboutMe' id='aboutMeId'>
      <AboutMeAdditional classPopup={classPopup} popups={popups} />
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
              Веб-сайт{' '}
              <span className='aboutMe__contacts-data'>www@www.ru</span>
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
            <Navigation
              popupAboutMe={popupAboutMe}
              popupSkills={popupSkills}
              popupContacts={popupContacts}
              popups={popups}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
