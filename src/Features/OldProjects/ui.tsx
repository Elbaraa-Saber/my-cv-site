import React from "react";
import "./style.scss";
import { BoxProject } from "../../Shared/UI/BoxProject/ui.tsx";

export const OldProjects = () => {
  return (
    <div className="oldProjects">
      <h3 className="oldProjects__title">Мои проекты во время обученя до стажировке</h3>
      <div className="oldProjects__content">
        <BoxProject
          className="oldProjects__box"
          explain="First template HTML & CSS"
          linkCode="https://github.com/Elbaraa-Saber/First_Template_HTML_CSS"
          link="https://elbaraa-saber.github.io/First_Template_HTML_CSS/"
        />
        <BoxProject
          className="oldProjects__box"
          explain="Second template HTML & CSS"
          linkCode="https://github.com/Elbaraa-Saber/Second-Template_HTML_CSS"
          link="https://elbaraa-saber.github.io/Second-Template_HTML_CSS/"
        />
        <BoxProject
          className="oldProjects__box"
          explain="Third template HTML & CSS"
          linkCode="https://github.com/Elbaraa-Saber/Third_Template_HTML_CSS"
          link="https://elbaraa-saber.github.io/Third_Template_HTML_CSS/"
        />
        <BoxProject
          className="oldProjects__box"
          explain="Fourth template HTML & CSS"
          linkCode="https://github.com/Elbaraa-Saber/Fourth-Template_HTML_CSS"
          link="https://elbaraa-saber.github.io/Fourth-Template_HTML_CSS/"
        />
        <BoxProject
          className="oldProjects__box"
          explain="First template with HTML & CSS & JS"
          linkCode="https://github.com/Elbaraa-Saber/First-Project-with-JS"
          link="https://elbaraa-saber.github.io/First-Project-with-JS/"
        />
        <BoxProject
          className="oldProjects__box"
          explain="First template with ReactJS"
          linkCode="https://github.com/Elbaraa-Saber/ticketsapp_ReactJS"
          link="https://elbaraa-saber.github.io/ticketsapp_ReactJS/"
        />
      </div>
    </div>
  );
};
