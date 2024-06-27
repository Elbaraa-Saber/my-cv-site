import React from "react";
import "./style.scss";
import photoIntenarship from "../../Shared/Assets/Imgs/intenarship.jpg";
import { Img, Title } from "../../Shared/index.ts";

export const Experience = () => {
  return (
    <section className="experience">
      <Title title="Мой Опыт" className="experience__title" />
      <div className="experience__content">
        <div className="experience__company">
          <div className="experience__companyName">Академия Абдрашитова</div>
          <Img
            imgSrc={photoIntenarship}
            imgAlt="intenarship"
            className="experience__img"
          />
          <div className="experience__team">Команда « Новый Дуровень »</div>
        </div>
        <div className="experience__txt">
          <p className="experience__firstTxt">
            <p>

            У меня полтора года опыта (обучения и ведения проектов) во
            фронтенд-разработке.
            {/* <br /> */}
            </p>
            {/* и недавнюю стажировку в Академии Абдулрошетива, где улучшил
            свои навыки кодирования и работы в команде. */}
            <p>

            Несколько месяцев назад проходил стажировку в Академии
            Абдрашитова, где совершенствовал свои навыки программирования и
            работы в команде.
            {/* <br /> */}
            </p>
          </p>
          <p className="experience__secondTxt">
            Быстро учусь, стараюсь выявлять пробелы в знаниях и эффективно их
            устраняю.
            <br />
            Моё увлечение - это совместная работа, где я могу эффективно вносить
            вклад и непрерывно учиться.
          </p>
        </div>
      </div>
    </section>
  );
};
