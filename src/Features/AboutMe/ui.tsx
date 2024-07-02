import React from "react";
import "./style.scss";
import { Skill } from "../../Shared/index.ts";

import OfficeImg from "../../Shared/Assets/Imgs/Group62.png";
import Background from "../../Shared/Assets/Imgs/doodleItems.jpg";
import { FloorIcon } from "../../Shared/UI/Icons/Floor.tsx";

interface Props {
  className?: string;
  skills: { name: string; id: string; Percentage: string }[];
  additionalSkills?: { id: string; name: string }[];
}
export const AboutMe = ({ className, skills, additionalSkills }: Props) => {
  return (
    <section className="aboutMe">
      <div className="aboutMe__left">
        <div className="aboutMe__header">
          <div className="aboutMe__title">
            About <span>me</span>
          </div>
          <p className="aboutMe__description">
            Меня зовут Салем Эльбараа, обучаюсь по специальности: "Программная
            инженерия" в НИ ТГУ.
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
        <img src={Background} alt="background" className="aboutMe__backImg" />
        <img src={OfficeImg} alt="office" className="aboutMe__officeImg" />
        <FloorIcon className="aboutMe__floor" />
      </div>
    </section>
  );
};
