import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import logo from "../../../Shared/Assets/Imgs/logo.jpg";
import classNames from "classnames";
import { Img } from "../../../Shared/UI/Img/ui.tsx";

interface Props {
  className?: string;
  selectedLang: "Russian" | "English";
  setSelectedLang: (v: "Russian" | "English") => void;
}

export const Header = ({ className, selectedLang, setSelectedLang }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const myDiv = ref.current;
      if (!myDiv) return;

      const scrollThreshold = 200;
      const scrollPosition = window.scrollY;

      if (scrollPosition > scrollThreshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classNameHeader = classNames(
    "header",
    isVisible ? "header-hide" : "header-show",
    className
  );
  const classNameEnglishOption = classNames(
    "header__lang",
    selectedLang === "English" && "header__lang-selected"
  );
  const classNameRussianOption = classNames(
    "header__lang",
    selectedLang === "Russian" && "header__lang-selected"
  );

  const handleSelectedLanguage = (lang: "English" | "Russian") => {
    if (lang !== selectedLang) {
      setSelectedLang(lang);
    }
  };

  const [dropDownOpen , setDropDownOpen] = useState<boolean>(false);

  return (
    <header ref={ref} className={classNameHeader}>
      <div className="container header__container">
        <div className="header__left">
          <div className="header__leftTxt">
            <div className="header__name">{ selectedLang ==='Russian' ? 'ЭльБараа' : 'Elbaraa'}</div>
            <p className="header__work">Frontend Developer</p>
          </div>
          <Img imgSrc={logo} imgAlt="mylogo" className="header__img" />
        </div>
        <div className={`header__dropDown`} onClick={() => setDropDownOpen(!dropDownOpen)}>
          {selectedLang}
          <ul className={`header__language ${dropDownOpen ? 'header__laguage-show': ""}`}>
            <li
              className={classNameEnglishOption}
              onClick={() => handleSelectedLanguage("English")}
            >
              English
            </li>
            <li
              className={classNameRussianOption}
              onClick={() => handleSelectedLanguage("Russian")}
            >
              Русский
            </li>
          </ul>
        </div>
        <div className="header__right">
          <div className="header__infoBox">
            <span className="header__info">{ selectedLang === 'Russian' ? 'Россия, Томск' : 'Russia, Tomsk'}</span>
          </div>
          <div className="header__infoBox">
            <span className="header__info">+7 996 692 5268</span>
          </div>
          <div className="header__infoBox">
            <a href="mailto:baraax01@gmail.com" className="header__info">
              baraax01@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
