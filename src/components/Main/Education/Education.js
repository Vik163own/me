import React from "react";

import "./Education.scss";
import "./education-adapt.scss";

import { courses, education } from "../../../utils/constants";

import { EducationElement } from "../education-element/education-element";

export function Education() {
  return (
    <section id="educationId" className="education">
      <h2 className="education__title">КУРСЫ</h2>
      <ul className="education__container">
        {courses &&
          courses.map((card, index) => (
            <EducationElement card={card} key={index} />
          ))}
      </ul>
      <h2 className="education__title">ОБРАЗОВАНИЕ</h2>
      <ul className="education__container">
        {education &&
          education.map((card, index) => (
            <EducationElement card={card} key={index} />
          ))}
      </ul>
    </section>
  );
}
