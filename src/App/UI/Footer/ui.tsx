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
import { FaTelegramPlane } from "react-icons/fa";
import { HomeIcon } from "../../../Shared/UI/Icons/HomeIcon.tsx";
import { UserIcon } from "../../../Shared/UI/Icons/UserIcon.tsx";
import { PhoneIcon } from "../../../Shared/UI/Icons/PhoneIcon.tsx";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__sections">
          <div className="footer__section">
            <HomeIcon className="footer__homeIcon"/>
            <span >Home</span>
          </div>
          <div className="footer__section">
            <UserIcon className='footer__userIcon'/>
            <span >About me</span>
          </div>
          <div className="footer__section">
            <PhoneIcon className="footer__phoneIcon"/>
            <span >Contact</span>
          </div>
        </div>
          <div className="footer__contactBoxes">
            <a href="mailto:baraasaber22@gmail.com" className="footer__box">
              <MdOutlineEmail />
            </a>
            <a href="mailto:elbarsalem@mail.ru" className="footer__box">
              <MdAlternateEmail />
            </a>
            <a className="footer__box" href="tel:+7 996 692 5268">
              <CiMobile1 />
            </a>
            <a href="https://t.me/baraasalem2" className="footer__box">
              <FaTelegramPlane />
            </a>
            <a href="https://vk.com/id615489202" className="footer__box">
              VK
            </a>
          </div>
        <div className="footer__egyptIcons">
          <GiEgyptianWalk className="icon" />
          <GiEgyptianSphinx className="icon" />
          <GiEgyptianPyramids className="icon" />
          <GiEgyptianTemple className="icon" />
          <GiEgyptianProfile className="icon" />
          <GiEgyptianUrns className="icon" />
          <GiEgyptianBird className="icon" />
        </div>
      </div>
    </footer>
  );
};
