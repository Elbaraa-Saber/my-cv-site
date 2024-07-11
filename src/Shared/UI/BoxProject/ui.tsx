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
  selectedLang: "Russian" | "English";
}

export const BoxProject = ({
  label,
  link,
  withTeam,
  explain,
  className,
  linkCode,
  intenarship,
  selectedLang,
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
        <div className="boxProject__creator">{Creator()}</div>
      </div>
      <div className="">
        {link && (
          <a className="boxProject__link" href={link}>
            {selectedLang === "Russian" ? (
              <>
                Нажмите, чтобы увидеть <span>{label ? label : "Сайт"}</span>
              </>
            ) : (
              <>
                Click to see <span>{label ? label : "website"}</span>
              </>
            )}
          </a>
        )}
        {linkCode && (
          <a className={"boxProject__linkCode"} href={linkCode}>
            Click to see code on Github
          </a>
        )}
      </div>
    </div>
  );
};
