import React from "react";
import "./style.scss";
import { Title, BoxProject } from "../../Shared/index.ts";

interface Props {
  className?: string;
  selectedLang: "English" | "Russian";
}

export const MyProjects = ({className, selectedLang}: Props) => {
  return (
    <section className="myProjects">
      <Title title="Мои Проекты" className="myProjects__title" />
      <div className="container myProjects__container">
        <div className="myProjects__boxes">
          <BoxProject
            label="Eatly"
            link="https://elbaraa-saber.github.io/eatly/"
            withTeam={false}
            explain={selectedLang ==='Russian' ? "Сайт для заказа еды (React JS)." : 'Website for ordering food (React JS).'}
            className="myProjects__box"
            linkCode="https://github.com/Elbaraa-Saber/eatly"
            intenarship={true}
            selectedLang={selectedLang}
            />
          <BoxProject
            intenarship={true}
            label="Парсер форм"
            link="https://elbaraa-saber.github.io/daynamicForm"
            withTeam={false}
            explain={selectedLang ==='Russian' ? "Динамический парсер форм (React TS)." : 'Dynamic form parser (React TS).'}
            className="myProjects__box"
            linkCode="https://github.com/Elbaraa-Saber/daynamicForm"
            selectedLang={selectedLang}
            />
          <BoxProject
            intenarship={true}
            label="Канбан доска"
            linkCode="https://github.com/DaryaVin/AA_HW3"
            withTeam={true}
            explain={selectedLang ==='Russian' ? "Канбан доска  (React TS)." : 'Kanban board (React TS).'}
            className="myProjects__box"
            selectedLang={selectedLang}
            />
          <BoxProject
            intenarship={true}
            label="Сервис Онлайн образования"
            linkCode="https://github.com/pmaxaa/education-service"
            withTeam={true}
            explain={selectedLang ==='Russian' ? "Сервис Онлайн образования  (React TS)." : 'Online Education Service (React TS).'}
            className="myProjects__box"
            selectedLang={selectedLang}
            />
        </div>
      </div>
    </section>
  );
};

