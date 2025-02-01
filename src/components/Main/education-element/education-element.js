import { useState, useEffect } from "react";
import "./education-element.scss";
import "./education-element-adapt.scss";

import sheet from "../../../images/диплом.png";
import university from "../../../images/sheet_pen.svg";

import { Diplomas } from "../diplomas/diplomas";

export function EducationElement({ card }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

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
      if (e.key === "Escape" || e.target === e.currentTarget) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", closeByEscape);
    document.querySelector(".page").addEventListener("click", closeByEscape);
    return () => {
      document.removeEventListener("keydown", closeByEscape);
      document
        .querySelector(".page")
        .removeEventListener("click", closeByEscape);
    };
  }, [isOpen]);
  return (
    <>
      <li className="education__element">
        <h3 className="education__title-item">{card.name}</h3>
        <p className="education__specialization">{card.specialization}</p>
        <p className="education__dates">{card.dates}</p>
        {card.dataId && (
          <button
            className="education__button"
            data-id={card.dataId}
            onClick={openPopup}
            // onBlur={null}
            type="button"
          >
            <img className="education__icon" src={sheet} alt="sheet" />
            <p className="education__button-text">Диплом</p>
          </button>
        )}
        {card.description.length > 0 ? (
          <>
            <p className="education__info">
              <img className="education__icon" src={university} alt="sheet" />
              {card.dataId ? "Дипломный проект" : "Проект"}
              <a
                className="education__link"
                href={card.gh}
                target="_blank"
                rel="noreferrer"
              >
                {card.project}
              </a>
            </p>
            {card.description.map((item) => (
              <p key={item} className="education__description">
                &nbsp;{item}
              </p>
            ))}
          </>
        ) : (
          <a
            className="education__link"
            href={card.gh}
            target="_blank"
            rel="noreferrer"
          >
            {card.project}
          </a>
        )}
      </li>
      <Diplomas name={name} isOpen={isOpen} closePopup={closePopup} />
    </>
  );
}
