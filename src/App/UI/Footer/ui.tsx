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
        <div className="footer__title">Свяжитесь со мной</div>
        <div className="footer__contactBoxes">
          <a href="mailto:baraasaber22@gmail.com" className="footer__box">
            baraax01@gmail.com
            <MdOutlineEmail />
          </a>
          <a href="mailto:elbarsalem@mail.ru" className="footer__box">
            elbarsalem@mail.ru
            <MdAlternateEmail />
          </a>
          <span className="footer__box">
            +7 996 692 5268
            <CiMobile1 />
          </span>
          <a
            href="https://www.instagram.com/baraasaber1/"
            className="footer__box"
          >
            Инстграм
            <FaInstagram/>
          </a>
          <a href="https://vk.com/id615489202" className="footer__box">
          ВК{/* <span className="footer__vkIcon">ВК</span> */}
          </a>
        </div>
      </div>
      <div className="footer__right">
        {/* <h5 className="footer__name">Эльбараа</h5> */}
        <div className="footer__egypt">Я ИЗ <span>ЕГИПТА</span><GiEgypt className="footer__egyptianFlag"/></div>
            <div className="footer__egyptIcons">
                <GiEgyptianBird className="icon"/>
                <GiEgyptianProfile className="icon"/>
                <GiEgyptianPyramids className="icon" />
                <GiEgyptianSphinx className="icon"/>
                <GiEgyptianTemple className="icon"/>
                <GiEgyptianUrns className="icon"/>
                <GiEgyptianWalk className="icon"/>
            </div>
      </div>
    </footer>
  );
};