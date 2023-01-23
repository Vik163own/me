import { useState } from 'react';

import './about-me.scss';
import gitIcon from '../../../images/github_icon_blue.svg';

export function AboutMeAdditional(props) {
  const { classAddInfo, isNameAddInfo } = props;

  return (
    <div className={`aboutMe__additional-info ${classAddInfo}`}>
      {isNameAddInfo === 'about-me' && (
        <p className='aboutMe__additional-info_type_about-me'>1 блок</p>
      )}
      {isNameAddInfo === 'skills' && (
        <>
          <h2>Опыт</h2>
          <p className='aboutMe__additional-info_type_skills'>
            Об опыте разработки рассказать могу немного.
            <br /> Весь он связан с учебными проектами и дипломом.
            <br />
            <a
              className='aboutMe__additional-info_type_skills-link-github'
              href='https://github.com//Vik163'
              target='_blank'
              rel='noreferrer'
            >
              Посмотреть можно здесь &#8594; &nbsp;
              <img className='aboutMe__link-icon' src={gitIcon} alt='Гитхаб' />
            </a>
          </p>
          <p className='aboutMe__additional-info_type_skills'>
            Все работы выполнял используя полученные знания.
            <br /> Самостоятельно изучал необходимые материалы, а когда
            оказывался в тупике помогали студенты курса или наставники.
            <br /> Результаты проверялись ревьюерами, которые указывали на
            ошибки, недочеты и несовершенство кода. И только после устранения
            всех недостатков принимались.{' '}
          </p>
          <p className='aboutMe__additional-info_type_skills'>
            Таких этапов было:
          </p>
          <ul className='aboutMe__additional-info_type_skills-list-works'>
            <li>
              за время обучения на веб-разработке - пятнадцать и дипломная
              работа
            </li>
            <li>react-разработчик - шесть</li>
          </ul>
        </>
      )}
    </div>
  );
}
