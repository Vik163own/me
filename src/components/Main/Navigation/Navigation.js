import React, { useState, useEffect } from 'react';

import './navigation.scss';

function Navigation({ handleAddInfo, isNameAddInfo }) {
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
    <div className='navigation'>
      <ul className='navigation__links'>
        <li className='navigation__links-item button-hover' onClick={addInfo}>
          <a
            className={`navigation__link ${
              isNameAddInfo === 'about-me' && 'navigation__link_active'
            }`}
            href='#aboutMe'
          >
            {isNameAddInfo === 'about-me' ? 'закрыть' : 'о себе'}
          </a>
        </li>
        <li className='navigation__links-item button-hover' onClick={addInfo}>
          <a
            className={`navigation__link ${
              isNameAddInfo === 'skills' && 'navigation__link_active'
            }`}
            href='#skills'
          >
            {isNameAddInfo === 'skills' ? 'закрыть' : 'опыт'}
          </a>
        </li>
        <li className='navigation__links-item button-hover' onClick={addInfo}>
          <a
            className={`navigation__link ${
              isNameAddInfo === 'contacts' && 'navigation__link_active'
            }`}
            href='#contacts'
          >
            {isNameAddInfo === 'contacts' ? 'закрыть' : 'контакты'}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
