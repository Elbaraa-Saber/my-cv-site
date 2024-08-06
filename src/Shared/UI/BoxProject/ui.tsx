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
  const Creator = () => {
    if (intenarship) {
      if (selectedLang === "Russian") {
        if (withTeam) {
          return <>Сделано командой</>;
        } else {
          return <>Сделано мной на стажировке</>;
        }
      } else {
        if (withTeam) {
          return <>Made by the team</>;
        } else {
          return <>Made by me during the internship</>;
        }
      }
    }
  };

  return (
    <div className={`boxProject ${className}`}>
      <div className="">
        <h3 className="boxProject__title">{explain}</h3>
        <div className="boxProject__creator">
          {intenarship && (withTeam
            ? "Made by the team"
            : "Made by me during the internship")}
        </div>
      </div>
      <div className="boxProject__img">
        <img src={img} alt="dsf"/>
      </div>
      <div className="">
        {link && (
          <a className="boxProject__link" href={link}>
            See the: {label ? label : "Website"}
          </a>
        )}
        {linkCode && (
          <a className={"boxProject__linkCode"} href={linkCode}>
            See the code on GitHub
          </a>
        )}
      </div>
    </div>
  );
};
