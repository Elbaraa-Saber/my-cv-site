import React from "react";
import "./style.scss";

interface Props {
  skill: { name: string; id: string; Percentage?: string };
  className?: string;
  withPercentage: boolean;
}
export const Skill = ({ skill, className, withPercentage }: Props) => {
  return (
    <div className={`additionalskill ${className}`}>
      {withPercentage ? (
        <>
          <div key={skill.id} className="skill__label">
            {skill.name}
          </div>
          <div className="skill__percentSkill">
            <span
              className="skill__percentShow"
              style={{ width: `${skill.Percentage}%` }}
            ></span>
          </div>
        </>
      ) : (
          <span className="skill__container">{skill.name}</span>
      )}
    </div>
  );
};
