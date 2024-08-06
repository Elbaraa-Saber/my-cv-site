import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

interface Props {
  className?: string;
  pages: { name: string; id: string; link: string }[];
}
export const Header = ({ className, pages }: Props) => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <header className={`header`}>
      <div className="header__border"></div>
      <div className="header__left">
        <div className="header__name">Elbaraa</div>
      </div>
      <div className="header__right">
      {pages.map((page) => (
          <div
            key={page.id}
            className="header__infoBox"
            onClick={() => handleScroll(page.link)}
          >
            <span className="header__info">{page.name}</span>
          </div>
        ))}
        {/* {pages.map((page) => (
          <NavLink key={page.id} onClick={() => handleScroll(page.link)} className="header__infoBox">
            <span className="header__info">{page.name}</span>
          </NavLink>
        ))} */}
      </div>
    </header>
  );
};
