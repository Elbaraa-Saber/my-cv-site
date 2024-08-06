import React from "react";
import "./style.scss";
import { Skill } from "../../Shared/index.ts";

import OfficeImg from "../../Shared/Assets/Imgs/Group62.png";
import Background from "../../Shared/Assets/Imgs/doodleItems.jpg";
import { FloorIcon } from "../../Shared/UI/Icons/Floor.tsx";
import { SleepZIcon } from "../../Shared/UI/Icons/SleepZIcon.tsx";

interface Props {
  className?: string;
  skills: { name: string; id: string; Percentage: string }[];
  additionalSkills?: { id: string; name: string }[];
  id: string;
}
interface Props {
  className?: string;
  selectedLang: "English" | "Russian";
}
export const AboutMe = ({ className, skills, id, additionalSkills }: Props{ className, selectedLang }: Props) => {
  return (
    <section className="aboutMe" id={id}>
      <div className="aboutMe__left">
        <div className="aboutMe__header">
          <h2 className="aboutMe__title">
            About <span>me</span>
          </h2>
          <p className="aboutMe__description">
            My name is Salem Elbaraa. I am a web developer, studying Software
            Engineering at TSU.
            {/* Меня зовут Салем Эльбараа. Я веб-разработчик, обучаюсь по специальности "Программная
            инженерия" в НИ ТГУ. */}
          </p>
        </div>
        <div className="abouMe__skills">
          {skills
            ? skills.map((skill) => (
                <Skill key={skill.id} withPercentage={true} skill={skill} />
              ))
            : "Error"}
        </div>
        <div className="aboutMe__additionalSills">
          {additionalSkills &&
            additionalSkills.map((skill) => (
              <Skill key={skill.id} withPercentage={false} skill={skill} />
            ))}
        </div>
      </div>
      <div className="aboutMe__right">
        <div className="aboutMe__zIcons">
          <SleepZIcon className="aboutMe__zTop" />
          <SleepZIcon className="aboutMe__zBetween" />
          <SleepZIcon className="aboutMe__zUnder" />
        </div>
        <img src={Background} alt="background" className="aboutMe__backImg" />
        <img src={OfficeImg} alt="office" className="aboutMe__officeImg" />
        <FloorIcon className="aboutMe__floor" />
      </div>
    </section>
  );
};
