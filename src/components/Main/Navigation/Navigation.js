import React, { useState, useEffect } from 'react';

import './Navigation.scss';

function Navigation(props) {
  const { popupAboutMe, popupSkills, popupContacts, popups } = props;
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

  function openPopupAboutMe() {
    popupAboutMe();
  }

  function openPopupSkills() {
    popupSkills();
  }

  function openPopupContacts() {
    popupContacts();
  }

  return (
    <div className='navigation'>
      <ul className='navigation__links'>
        <li
          className='navigation__links-item button-hover'
          onClick={openPopupAboutMe}
        >
          <a
            className={`navigation__link ${
              popups[0] && 'navigation__link_active'
            }`}
            href='#aboutMe'
          >
            {popups[0] ? 'закрыть' : 'о себе'}
          </a>
        </li>
        <li
          className='navigation__links-item button-hover'
          onClick={openPopupSkills}
        >
          <a
            className={`navigation__link ${
              popups[1] && 'navigation__link_active'
            }`}
            href='#skills'
          >
            {popups[1] ? 'закрыть' : 'опыт'}
          </a>
        </li>
        <li
          className='navigation__links-item button-hover'
          onClick={openPopupContacts}
        >
          <a
            className={`navigation__link ${
              popups[2] && 'navigation__link_active'
            }`}
            href='#contacts'
          >
            {popups[2] ? 'закрыть' : 'контакты'}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
