import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

interface Props {
  explain?: string;
  label?: string;
  link?: string;
  withTeam?: boolean;
  className?: string;
  linkCode: string;
  intenarship?: boolean;
}

export const BoxProject = ({
  label,
  link,
  withTeam,
  explain,
  className,
  linkCode,
  intenarship,
}: Props) => {
  return (
    <div className={`boxProject ${className}`}>
      <div className="">
        <h3 className="boxProject__title">{explain}</h3>
        <div className="boxProject__creator">
          {intenarship && (withTeam
            ? "Сделано командой"
            : "Сделано мной на стажировке")}
        </div>
      </div>
      <div className="">
        {link ? (
          <a className="boxProject__link" href={link}>
            Нажмите, чтобы увидеть <span>{label ? label : "Сайт"}</span>
          </a>
        ) : (
          <a className={"boxProject__link"} href={linkCode} >
            Нажмите, чтобы увидеть код на Github
          </a>
        )}
        {link && linkCode && (
          <a className={"boxProject__linkCode"} href={linkCode}>
            Click to see code on Github
          </a>
        )}
      </div>
    </div>
  );
};
