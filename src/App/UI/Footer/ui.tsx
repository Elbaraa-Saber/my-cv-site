import React from "react";
import "./style.scss";
import { CiMobile1 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { GiEgyptianBird } from "react-icons/gi";
import { GiEgypt } from "react-icons/gi";
import { GiEgyptianProfile } from "react-icons/gi";
import { GiEgyptianPyramids } from "react-icons/gi";
import { GiEgyptianSphinx } from "react-icons/gi";
import { GiEgyptianTemple } from "react-icons/gi";
import { GiEgyptianUrns } from "react-icons/gi";
import { GiEgyptianWalk } from "react-icons/gi";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <div className="footer__title">Свяжитесь с нами</div>
        <div className="footer__contactBoxes">
          <span className="footer__box">
            +7 996 692 5268
            <CiMobile1 />
          </span>
          <a href="mailto:baraasaber22@gmail.com" className="footer__box">
            Общая рабоча почта
            <MdOutlineEmail />
          </a>
          <a href="mailto:elbarsalem@mail.ru" className="footer__box">
            Русская почта
            <MdAlternateEmail />
          </a>
          <a href="https://vk.com/id615489202" className="footer__box">
            VK
            <span className="footer__vkIcon">ВК</span>
          </a>
          <a
            href="https://www.instagram.com/baraasaber1/"
            className="footer__box"
          >
            Instgram
            <FaInstagram/>
          </a>
        </div>
      </div>
      <div className="footer__right">
        <h5 className="footer__name">Эльбараа</h5>
        <div className="footer__egypt">Я ИЗ <span>ЕГИПТА<GiEgypt/></span></div>
            <div className="footer__egyptIcons">
                <GiEgyptianBird className="icon"/>
                <GiEgyptianProfile className="icon"/>
                <GiEgyptianPyramids className="icon" />
                <GiEgyptianSphinx className="icon"/>
                <GiEgyptianTemple className="icon"/>
                <GiEgyptianUrns className="icon"/>
                <GiEgyptianWalk className="icon"/>
            </div>
            <div className="footer__russia">Учусь И живу в Росии</div>
      </div>
    </footer>
  );
};
