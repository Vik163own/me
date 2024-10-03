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
            - Кто я? Тот, кто хочет изменить свою жизнь к лучшему.
            <br />
            - Что у меня есть? Это моя семья и обязанность сделать так, чтобы
            они ни в чём не нуждались, а также есть желание не стоять на месте и
            развиваться самому.
            <br />
            - Чего у меня нет? Вредных привычек и любимой работы.
            <br />
            - Что мне нравиться? Нравиться что-то делать, что-то создавать!
            <br />- Что мне не нравиться? Сидеть без дела!
            <br />- Что я хочу? Найти интересную, перспективную и
            высокооплачиваемую работу веб-разработчика.
          </p>
          <p className="additional-info__text">
            &ensp;Много лет я был предпринимателем, связанным с работой в
            области фотографии и дизайна.
          </p>
          <p className="additional-info__text">
            &ensp;Свой фотосалон, работа за компьютером и постоянное общение с
            людьми развили во мне такие качества, как:
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
            применял Adobe Illustrator, иногда Corel. Ещё в багаж знаний можно
            добавить работу с Windows - установка и настройка самой ОС, а также
            программ и утилит на ее основе.
          </p>
          <p className="additional-info__text">
            &ensp;Но это не стало делом жизни. Хотелось чего-то другого.
            Ковидные ограничения стали стимулом к изменениям. Оставив фотографию
            в надежных руках, сам решил учиться программированию. Математический
            склад ума тянул к нему, но заняться этим не хватало времени.
          </p>
          <p className="additional-info__text">
            &ensp;На время обучения устроился на работу электриком, где пока и
            работаю. <br />
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
            разработчика.
          </p>
        </>
      )}
      {isNameAddInfo === "skills" && (
        <>
          <h2 className="about-me__title">Опыт</h2>
          <p className="additional-info__text">
            Об опыте разработки рассказать могу немного.
            <br /> Это pet-проект интернет-магазина (frontend, backend), который
            делаю в настоящее время.
            <a
              className="additional-info__link"
              href="https://pizzashop63.online/"
              target="_blank"
              rel="noreferrer"
            >
              Доставка пиццы
            </a>
            <br /> Учебные проекты курсов и самостоятельная работа по развитию
            навыков.
            <br />
            <a
              className="additional-info__link"
              href="https://github.com//Vik163"
              target="_blank"
              rel="noreferrer"
            >
              Посмотреть можно здесь &#8594; &ensp;
              <img className="about-me__link-icon" src={gitIcon} alt="Гитхаб" />
            </a>
          </p>
          <p className="additional-info__text">
            &ensp;Все работы выполняю используя полученные знания.
            <br /> &ensp;Самостоятельно изучаю необходимые материалы, а когда
            оказываюсь в тупике помогает поиск в интернете.
            <br />
            <br /> &ensp;Во время обучения выполняемые работы проверялись
            ревьюерами, которые указывали на ошибки, недочеты и несовершенство
            кода. И только после устранения всех недостатков принимались.
          </p>
          <p className="additional-info__text">Таких этапов было:</p>
          <ul className="additional-info__list">
            <li>
              за время обучения на веб-разработке - пятнадцать курсовых и
              дипломная работа
            </li>
            <li>react-разработчик - шесть курсовых</li>
            <li>
              продвинутый frontend - самостоятельная работа (уже было понимание,
              какие ошибки падают и как их устранять)
            </li>
            <li>последним делаю проект интернет-магазина</li>
          </ul>
        </>
      )}
    </div>
  );
}
