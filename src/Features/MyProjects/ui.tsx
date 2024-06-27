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
          label="Eatly"
          link="https://elbaraa-saber.github.io/eatly/"
          withTeam={false}
          explain="Сайт для заказа еды (React JS)."
          className="myProjects__box"
          linkCode="https://github.com/Elbaraa-Saber/eatly"
          intenarship={true}
          />
        <BoxProject
          intenarship={true}
          label="Парсер форм"
          link="https://elbaraa-saber.github.io/daynamicForm"
          withTeam={false}
          explain="Динамический парсер форм (React TS)."
          className="myProjects__box"
          linkCode="https://github.com/Elbaraa-Saber/daynamicForm"
          />
        <BoxProject
          intenarship={true}
          label="Канбан доска"
          linkCode="https://github.com/DaryaVin/AA_HW3"
          withTeam={true}
          explain="Канбан доска  (React TS)."
          className="myProjects__box"
          />
        <BoxProject
          intenarship={true}
          label="Сервис Онлайн образования"
          linkCode="https://github.com/pmaxaa/education-service"
          withTeam={true}
          explain="Сервис Онлайн образования  (React TS)."
          className="myProjects__box"
        />
      </div>
    </section>
  );
};
