import { useState, useEffect } from 'react';
import './education-element.scss';

import sheet from '../../../images/диплом.png';
import university from '../../../images/sheet_pen.svg';

import { Diplomas } from '../diplomas/diplomas';

export function EducationElement({ card }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  const openPopup = (e) => {
    const special = e.currentTarget.dataset.id;
    setName(special);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === 'Escape' || e.target === e.currentTarget) {
        setIsOpen(false);
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
  }, [isOpen]);
  return (
    <>
      <li className='education__element'>
        <div className='education__ribbon'>
          {card.name}
          <p className='education__ribbon-specialization'>
            {card.specialization}
          </p>
        </div>
        <button
          className='education__button'
          data-id={card.dataId}
          onClick={openPopup}
          onBlur={null}
          type='button'
        >
          <img className='education__button-icon' src={sheet} alt='sheet' />
          <p className='education__button-text'>Диплом</p>
        </button>
        <p className='education__info'>
          <img src={university} alt='sheet' />
          <span className='education__info-text'>Дипломный проект</span>
        </p>
        <p className='education__description'>{card.description}</p>
      </li>
      <Diplomas name={name} isOpen={isOpen} />
    </>
  );
}
