import React, { ReactNode } from "react";
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
  img?: string;
}

export const BoxProject = ({
  label,
  link,
  withTeam,
  explain,
  className,
  linkCode,
  intenarship,
  img
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
      <div className="boxProject__img">
        <img src={img} alt="dsf"/>
      </div>
      <div className="">
        {link &&
          <a className="boxProject__link" href={link}>
            Нажмите, чтобы увидеть {label ? label : "Сайт"}
          </a>
        }
        { linkCode && (
          <a className={"boxProject__linkCode"} href={linkCode}>
            Click to see code on Github
          </a>
        )}
      </div>
    </div>
  );
};
