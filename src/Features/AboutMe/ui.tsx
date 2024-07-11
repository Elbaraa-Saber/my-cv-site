import React from "react";
import "./style.scss";
import ImgMain from "../../Shared/Assets/Imgs/main.jpg";
import { Img, Skill } from "../../Shared/index.ts";

interface Props {
  className?: string;
  selectedLang: "English" | "Russian";
}
export const AboutMe = ({ className, selectedLang }: Props) => {
  return (
    <section className="aboutMe">
      <div className="container aboutMe__container">
        <Img className="aboutMe__img" imgSrc={ImgMain} imgAlt="main" />
        <div className="aboutMe__txt">
          <div className="aboutMe__headText">
            <h1 className="aboutMe__name">
              {selectedLang === "Russian" ? "Салем ЭльБараа" : "Elbaraa Salem"}
            </h1>
            <p className="aboutMe__work">Front end developer</p>
          </div>
          <p className="aboutMe__intro">
            {selectedLang === "Russian"
              ? 'Я студент из Египта, проживающий с 2021 года в России. Осваиваю русский язык, обучаюсь по специальности: "Программная инженерия" в НИ ТГУ.'
              : "I am an Egyptian student in Russia, studying software engineering at Tomsk State University."}
          </p>
          <p className="aboutMe__langueges">
            {selectedLang === "Russian"
              ? "Свободно владею арабским, русским и английским языками."
              : "I can speak Arabic, Russian and English."}
          </p>
          <p className="aboutMe__softSkills">
            {selectedLang === "Russian"
              ? "Я имею отличные коммуникативные навыки, я хорошо взаимодействую в команде и предпочитаю работать в коллективе, а не в одиночку."
              : "I have excellent communication skills, I interact well in a team and prefer to work in a team rather than alone."}
          </p>
          <h2 className="aboutMe__mySkills">{ selectedLang === 'Russian' ? 'Мои навыки' : 'My skills'}</h2>
          <p className="aboutMe__techSkills">
            <Skill skill="TypeScript" />
            <Skill skill="JavaScript" />
            <Skill skill="HTML" />
            <Skill skill="Redux" />
            <Skill skill="React" />
            <Skill skill="SCSS" />
            <Skill skill="BEM" />
            <Skill skill="API" />
            <Skill skill="CSS" />
          </p>
        </div>
      </div>
    </section>
  );
};
