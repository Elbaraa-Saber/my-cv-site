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
          Я египетский студент, проживающий с 2021 года в России. Осваиваю
          русский язык,  получаю стипендию и обучаюсь по специальности:
          "Пограммная инженерия" в НИ ТГУ.
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
          <Skill skill="TypeScript" />
          <Skill skill="JavaScript" />
          <Skill skill="HTML" />
          <Skill skill="React" />
          <Skill skill="SCSS" />
          <Skill skill="BEM" />
          <Skill skill="API" />
          <Skill skill="CSS" />
        </p>
      </div>
    </section>
  );
};
