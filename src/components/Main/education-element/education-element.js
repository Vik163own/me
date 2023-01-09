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

  const closePopup = (e) => {
    setIsOpen(false);
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
        <h3 className='education__title-item'>{card.name}</h3>
        <p className='education__specialization'>{card.specialization}</p>
        <p className='education__dates'>{card.dates}</p>
        <button
          className='education__button'
          data-id={card.dataId}
          onClick={openPopup}
          onBlur={null}
          type='button'
        >
          <img className='education__icon' src={sheet} alt='sheet' />
          <p className='education__button-text'>Диплом</p>
        </button>
        <p className='education__info'>
          <img className='education__icon' src={university} alt='sheet' />
          Дипломный проект
          <a
            className='education__link'
            href={card.gh}
            target='_blank'
            rel='noreferrer'
          >
            {card.project}
          </a>
        </p>
        <p className='education__description'>{card.description}</p>
      </li>
      <Diplomas name={name} isOpen={isOpen} closePopup={closePopup} />
    </>
  );
}
