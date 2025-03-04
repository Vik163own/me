import "./about-me-additional.scss";
import gitIcon from "../../../images/github_icon_blue.svg";

export function AboutMeAdditional(props) {
  const { classAddInfo, isNameAddInfo } = props;

  return (
    <div className={`about-me__additional-info ${classAddInfo}`}>
      {isNameAddInfo === "about-me" && (
        <>
          <h2 className="about-me__title">О себе</h2>
          <p className="additional-info__text">
            <b>- Кто я?</b>
            <br />
            &emsp;- Тот, кто живёт веб-разработкой!
            <br />
            <b>- Что мне нравиться?</b> <br />
            &emsp;- Нравиться что-то делать, что-то создавать!
            <br />
            <b>- Что я хочу?</b> <br />
            &emsp;- Работать в IT-компании, которая создаёт крутые
            веб-приложения!
          </p>
          <p className="additional-info__text">
            &ensp;Много лет я был связан с работой в области фотографии и
            дизайна, которая развила во мне такие качества, как:
          </p>
          <br />

          <ul className="additional-info__list">
            <li>инициативность,</li>
            <li>умение находить общий язык с людьми,</li>
            <li>стрессоустойчивость,</li>
            <li>ответственность,</li>
            <li>старание,</li>
            <li>обучаемость,</li>
            <li>выполнение поставленных задач</li>
          </ul>
          <p className="additional-info__text">
            &ensp;Основным инструментом являлся Adobe Photoshop. Дополнительно
            занимался рекламой - это дизайн логотипов, баннеров, визиток. Здесь
            применял CorelDraw. Ещё в багаж знаний можно добавить работу с
            Windows - установка и настройка самой ОС, а также программ и утилит
            на ее основе.
          </p>
          <p className="additional-info__text">
            &ensp;Но это не стало делом жизни. Хотелось чего-то другого.
            Математический склад ума подтолкнул к программированию.
          </p>
          <p className="additional-info__text">
            &ensp;Первое время пытался учиться сам, но из этого мало, что
            получилось. Понял, что без курсов не обойтись. <br /> &ensp;Выбрал
            "Веб-разработчик" от Яндекс Практикума.
            <br />
            &ensp;Учеба сразу затянула и я понял, что это мое!
            <br /> &ensp;Десять месяцев пролетели как один день. Закончив
            довольно успешно этот курс (одним из первых сдал дипломную работу),
            решил не останавливаться.
            <br /> &ensp;Прошел ещё курс от Яндекс Практикума -
            "React-разработчик". React понравился!
            <br /> &ensp;Потом классные курсы Тимура Ulbi - "Продвинутый
            frontend". Прошел и их. Теперь настало время применять и развивать
            полученные знания.
          </p>
          <p className="additional-info__text">
            &ensp;Верю, что не потратил время впустую и найду работу
            разработчика!
          </p>
        </>
      )}
      {isNameAddInfo === "skills" && (
        <>
          <h2 className="about-me__title">Опыт</h2>
          <p className="additional-info__text">
            &ensp;Это самостоятельные работы по развитию навыков, фриланс и
            учебные проекты курсов.{" "}
            <a
              className="additional-info__link"
              href="https://github.com//Vik163"
              target="_blank"
              rel="noreferrer"
            >
              &ensp;Посмотреть можно здесь &#8594; &ensp;
              <img className="about-me__link-icon" src={gitIcon} alt="Гитхаб" />
            </a>
            <br />
            &ensp;Кратко опишу одну из работ и стёк технологий, которые в ней
            использовал.
            <br />
            <br />
            &ensp;Самостоятельная проектная работа (frontend, backend) -
            <a
              className="additional-info__link"
              href="https://pizzashop63.online/"
              target="_blank"
              rel="noreferrer"
            >
              Интернет магазин по доставке еды
            </a>
            <br />
            &ensp;Логику клиентской части проекта реализовал на React,
            TypeScript.
            <a
              className="additional-info__link"
              href="https://github.com/Vik163/shop-pizza-pet-project"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/Vik163/shop-pizza-pet-project
            </a>
            &ensp;Состояние приложения - Context, Redux Toolkit. <br />
            &ensp;Запросы - RTK Query, Axios. <br />
            &ensp;Применил адаптивную верстку и семантику в HTML. Стили - SCSS,
            CSS-modules. <br />
            &ensp;Архитектура - Feature-Sliced Design (FSD ) <br />
            &ensp;Добавил регистрацию, авторизацию (Firebase по номеру телефона
            и Яндекс ID), Lazy, темы, пагинация. <br />
            &ensp;Сборка - Webpack <br />
            <br />
            &ensp;Серверную часть выполнил на Nest.js, база данных MongoDB
            <a
              className="additional-info__link"
              href="https://github.com/Vik163/shop-pizza-pet-project_api"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/Vik163/shop-pizza-pet-project_api
            </a>
            <br />
            &ensp;Деплой на виртуальном сервере SpaceWeb. ОС Ubuntu. Использовал
            Git, Nginx, Pm2
            <br />
            <br /> &ensp;И учебные проекты курсов: «react-разработчик» и
            «веб-разработчик» с использованием React, React-Router, Redux,
            TypeScript, WebSocket, Express.js и MongoDB, адаптивной верстки,
            методологии БЭМ с регистрацией и авторизацией.
          </p>
          <a
            className="additional-info__link"
            href="https://github.com/Vik163/react-burger"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/Vik163/react-burger
          </a>
          <a
            className="additional-info__link"
            href="https://github.com/Vik163/movies-explorer-frontend"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/Vik163/movies-explorer-frontend
          </a>
          <a
            className="additional-info__link"
            href="https://github.com/Vik163/movies-explorer-api"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/Vik163/movies-explorer-api
          </a>
          <p className="additional-info__text">
            &ensp;Учебные работы выполнялись при содействии опытных наставников
            и были тщательно проверены ревьюерами.
          </p>
        </>
      )}
    </div>
  );
}
