import React from "react";
import "./style.scss";
import ImgMain from "../../Shared/Assets/Imgs/main.jpg";
import { Img, Skill } from "../../Shared/index.ts";


export const AboutMe = () => {
  return (
    <section className="aboutMe">
      <Img className="aboutMe__img" imgSrc={ImgMain} imgAlt="main" />
      <div className="aboutMe__txt">
        <h1 className="aboutMe__name">Салем ЭльБараа</h1>
        <p className="aboutMe__work">Front end developer</p>
        <p className="aboutMe__intro">
          Я египетский студент в России, проведший последние три года, осваивая
          русский язык и получив стипендию в Томском государственном
          университете по специальности "Программная инженерия".
        </p>
        <p className="aboutMe__langueges">
          Свободно владею арабским, русским и английским языками.
        </p>
        <p className="aboutMe__softSkills">
          У меня отличные коммуникативные навыки, я хорошо взаимодействую в
          команде и предпочитаю работать в коллективе, а не в одиночку.
        </p>
        <h2 className="aboutMe__mySkills">Мои навыки</h2>
        <p className="aboutMe__techSkills">
          <Skill skill="React" /><Skill skill="JavaScript" />
          <Skill skill="TypeScript" /><Skill skill="HTML" />
          <Skill skill="CSS" /><Skill skill="SCSS" /><Skill skill="API" />
          <Skill skill="BEM" />
        </p>
      </div>
    </section>
  );
};
