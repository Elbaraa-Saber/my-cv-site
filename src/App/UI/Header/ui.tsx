import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

interface Props {
  className?: string;
  pages: { name: string; id: string; link: string }[];
}
export const Header = ({ className, pages }: Props) => {
  return (
    <header className={`header`}>
      <div className="header__border"></div>
      <div className="header__left">
        <div className="header__name">ЭльБараа</div>
      </div>
      <div className="header__right">
        {pages.map((page) => (
          <NavLink key={page.id} to={page.link} className="header__infoBox">
            <span className="header__info">{page.name}</span>
          </NavLink>
        ))}
      </div>
    </header>
  );
};
