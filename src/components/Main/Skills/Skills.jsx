import React from "react";
import "./skills.scss";
import "./skills-adapt.scss";

import { SkillsElement } from "../../skills-element/skills-element";
import { skillsSpecialInfo, skillsDizainInfo } from "../../../constants/skills";

function Skills() {
  return (
    <section className="skills" id="skillsId">
      <h2 className="skills__title">НАВЫКИ</h2>

      <div className="skills__container">
        <h3 className="skills__subtitle">ПРОФЕССИОНАЛЬНЫЕ</h3>
        <ul className="skills__special-container">
          {skillsSpecialInfo.map((item, index) => (
            <SkillsElement
              key={index}
              name={item.name}
              procents={item.procents}
              caption={item.caption}
            />
          ))}
        </ul>
        <h3 className="skills__subtitle">ДОПОЛНИТЕЛЬНЫЕ</h3>
        <ul className="skills__additional-container">
          {skillsDizainInfo.map((item, index) => (
            <SkillsElement key={index} name={item.name} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
