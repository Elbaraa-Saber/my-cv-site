import React from "react";
import "./style.scss";
import photoIntenarship from "../../Shared/Assets/Imgs/intenarship.jpg";
import { Title } from "../../Shared/index.ts";
import { MusicIcon } from "../../Shared/UI/Icons/MusicIcon.tsx";
import { LampIcon } from "../../Shared/UI/Icons/LampIcon.tsx";
import { SecondArrow } from "../../Shared/UI/Icons/SecondArrow.tsx";

interface Props{
  id: string;
}

export const Experience = ({id}: Props) => {
  return (
    <section className="experience" id={id}>
      <div className="container experience__container">
        <div className="experience__content">
          <div className="experience__company">
            <div className="experience__companyName">Академия Абдрашитова</div>
            <img
              src={photoIntenarship}
              alt="intenarship"
              className="experience__img"
            />
            <div className="experience__team">Команда « Новый Дуровень »</div>
          </div>
          <div className="experience__txt">
            <p className="experience__firstTxt">
              <MusicIcon className="experience__musicIcon"/>
              <h2 className="experience__title">My <span>Experience</span></h2>
            <SecondArrow className="experience__arrowIcon"/>
              <p>
                У меня полтора года опыта (обучения и ведения проектов) во
                фронтенд-разработке.
              </p>
              Несколько месяцев назад проходил стажировку в Академии
              Абдрашитова, где совершенствовал свои навыки программирования и
              работы в команде.
            </p>
            {/* <p className="experience__secondTxt">
              Быстро учусь, стараюсь выявлять пробелы в знаниях и эффективно их
              устраняю.
              <br />
              Моё увлечение - это совместная работа, где я могу эффективно
              вносить вклад и непрерывно учиться.
              </p> */}
              <LampIcon className="experience__lampIcon"/>
          </div>
        </div>
      </div>
    </section>
  );
};
