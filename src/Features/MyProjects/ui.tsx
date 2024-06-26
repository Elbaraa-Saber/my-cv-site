import React from "react";
import "./style.scss";
import { Title, BoxProject } from "../../Shared/index.ts";
// import { BoxProject } from "../../Shared";

export const MyProjects = () => {
  return (
    <section className="myProjects">
      {/* <h3 className="myProjects__title">Мои Проекты</h3> */}
      <Title title="Мои Проекты" className="myProjects__title"/>
      <div className="myProjects__boxes">
        <BoxProject
          label="eatly"
          link="https://github.com/Elbaraa-Saber/eatly"
          withTeam={false}
          explain="Сайт для заказать еду."
          className="myProjects__box"
        />
        <BoxProject
          label="Парсер форм"
          link="https://github.com/Elbaraa-Saber/daynamicForm"
          withTeam={false}
          explain="Динамический парсер форм (React TS)"
          className="myProjects__box"
        />
        <BoxProject
          label="Канбан доска"
          link="https://github.com/DaryaVin/AA_HW3"
          withTeam={true}
          explain="Канбан доска."
          className="myProjects__box"
        />
        <BoxProject
          label="Сервис Онлайн образования"
          link="https://github.com/pmaxaa/education-service"
          withTeam={true}
          explain="Сервис Онлайн образования."
          className="myProjects__box"
        />
      </div>
    </section>
  );
};
