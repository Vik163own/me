import React from 'react';

import './Education.css';

import sheet from '../../../images/sheet_pen.svg';
import university from '../../../images/university.svg';

function Education() {
  return (
    <section id='educationId' className='education'>
      <h2 className='education__title'>ОБРАЗОВАНИЕ</h2>
      <ul className='education__container'>
        <li className='education__description'>
          <div className='education__ribbon-years'>Популярный</div>
          <p className='education__info'>
            <img src={sheet} alt='sheet' />
            <span className='education__info-text'>Дипломный проект</span>
          </p>
          <p className='education__info'>
            <img src={university} alt='sheet' />
            <span className='education__info-text'>Дипломный проект</span>
          </p>
          <p className='education__description-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='education__description'>
          <div className='education__ribbon-years'>Популярный</div>
          <p className='education__info'>
            <img src={sheet} alt='sheet' />
            <span className='education__info-text'>Дипломный проект</span>
          </p>
          <p className='education__info'>
            <img src={university} alt='sheet' />
            <span className='education__info-text'>Дипломный проект</span>
          </p>
          <p className='education__description-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='education__description'>
          <div className='education__ribbon-years'>Популярный</div>
          <p className='education__info'>
            <img src={sheet} alt='sheet' />
            <span className='education__info-text'>Дипломный проект</span>
          </p>
          <p className='education__info'>
            <img src={university} alt='sheet' />
            <span className='education__info-text'>Дипломный проект</span>
          </p>
          <p className='education__description-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='education__description'>
          <div className='education__ribbon-years'>Популярный</div>
          <p className='education__info'>
            <img src={sheet} alt='sheet' />
            <span className='education__info-text'>Дипломный проект</span>
          </p>
          <p className='education__info'>
            <img src={university} alt='sheet' />
            <span className='education__info-text'>Дипломный проект</span>
          </p>
          <p className='education__description-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='education__description'>
          <div className='education__ribbon-years'>Популярный</div>
          <p className='education__info'>
            <img src={sheet} alt='sheet' />
            <span className='education__info-text'>Дипломный проект</span>
          </p>
          <p className='education__info'>
            <img src={university} alt='sheet' />
            <span className='education__info-text'>Дипломный проект</span>
          </p>
          <p className='education__description-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='education__description'>
          <div className='education__ribbon-years'>Популярный</div>
          <p className='education__info'>
            <img src={sheet} alt='sheet' />
            <span className='education__info-text'>Дипломный проект</span>
          </p>
          <p className='education__info'>
            <img src={university} alt='sheet' />
            <span className='education__info-text'>Дипломный проект</span>
          </p>
          <p className='education__description-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Education;
