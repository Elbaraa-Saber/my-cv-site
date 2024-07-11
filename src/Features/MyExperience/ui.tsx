import React from "react";
import "./style.scss";
import photoIntenarship from "../../Shared/Assets/Imgs/intenarship.jpg";
import { Img, Title } from "../../Shared/index.ts";

interface Props {
  className?: string;
  selectedLang: "English" | "Russian";
}
export const Experience = ({ className, selectedLang }: Props) => {
  return (
    <section className="experience">
      <Title
        title={selectedLang === "Russian" ? "Мой Опыт" : "My Experience"}
        className="experience__title"
      />
      <div className="container experience__container">
        <div className="experience__content">
          <div className="experience__company">
            <div className="experience__companyName">
              {selectedLang === "Russian"
                ? "Академия Абдрашитова"
                : "Abdrashitov Academy"}
            </div>
            <Img
              imgSrc={photoIntenarship}
              imgAlt="intenarship"
              className="experience__img"
            />
            <div className="experience__team">
              {selectedLang === "Russian"
                ? "Команда « Новый Дуровень »"
                : "Team << New Level >>"}
            </div>
          </div>
          <div className="experience__txt">
            <p className="experience__firstTxt">
              <p>
                {selectedLang === "Russian"
                  ? "У меня полтора года опыта (обучения и ведения проектов) во фронтенд-разработке."
                  : "I have a year and a half of experience (training and project management) in front-end development."}
              </p>
              {selectedLang === "Russian"
                ? "Несколько месяцев назад проходил стажировку в Академии Абдрашитова, где совершенствовал свои навыки программирования и работы в команде."
                : "A few months ago, I did an internship at the Abdrashitov Academy, where I improved my programming and teamwork skills."}
            </p>
            <p className="experience__secondTxt">
              {selectedLang === "Russian"
                ? "Быстро учусь, стараюсь выявлять пробелы в знаниях и эффективно их устраняю."
                : "I learn quickly, try to identify gaps in knowledge and effectively eliminate them."}
              <br />
              {selectedLang === "Russian"
                ? "Моё увлечение - это совместная работа, где я могу эффективно вносить вклад и непрерывно учиться."
                : "My passion is working together, where I can contribute effectively and learn continuously."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
