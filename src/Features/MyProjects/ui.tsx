import React, { useState } from "react";
import "./style.scss";
import { Title, BoxProject } from "../../Shared/index.ts";
import Eatly from "../../Shared/Assets/Imgs/OurTopRestaurants.png";
import Form from "../../Shared/Assets/Imgs/Popup.png";
import List from "../../Shared/Assets/Imgs/SimpleKanban.png";
import studySite from "../../Shared/Assets/Imgs/mainLerining.png";
import Temp1 from "../../Shared/Assets/Imgs/Temp1.jpg";
import Temp2 from "../../Shared/Assets/Imgs/Temp2.jpg";
import Temp3 from "../../Shared/Assets/Imgs/Temp3.jpg";
import Temp4 from "../../Shared/Assets/Imgs/Temp4.jpg";
import TempJS from "../../Shared/Assets/Imgs/TempJS.jpg";
import Tickets from "../../Shared/Assets/Imgs/Tickets.jpg";
import ExpressJs from "../../Shared/Assets/Imgs/express.png";
import CShar from "../../Shared/Assets/Imgs/Csharp.png";

interface Props {
  id: string;
}
const ProjectsArr = [
  {
    id: 1,
    by: "React",
    intenarship: true,
    withTeam: false,
    label: "Eatly",
    explain: "Website for ordering food",
    link: "https://elbaraa-saber.github.io/eatly/",
    linkCode: "https://github.com/Elbaraa-Saber/eatly",
    img: Eatly,
  },
  {
    id: 2,
    by: "C#",
    intenarship: false,
    withTeam: false,
    label: "Delivery API",
    explain: "Dynamic Form Parser",
    link: "https://github.com/Elbaraa-Saber/DelivaryApi",
    linkCode: "https://github.com/Elbaraa-Saber/daynamicForm",
    img: CShar,
  },
  {
    id: 3,
    by: "ReactTS",
    intenarship: true,
    withTeam: true,
    label: "Kanban board",
    explain: "Tasks Manager",
    linkCode: "https://github.com/DaryaVin/AA_HW3",
    img: List,
  },
  {
    id: 4,
    by: "ReactTS",
    intenarship: true,
    label: "Education Service",
    linkCode: "https://github.com/pmaxaa/education-service",
    withTeam: true,
    explain: "Online Education Service",
    img: studySite,
  },
  {
    id: 5,
    by: "HTML+CSS",
    intenarship: false,
    explain: "First template HTML & CSS",
    link: "https://elbaraa-saber.github.io/First_Template_HTML_CSS/",
    linkCode: "https://github.com/Elbaraa-Saber/First_Template_HTML_CSS",
    img: Temp1,
  },
  {
    id: 6,
    by: "HTML+CSS",
    intenarship: false,
    explain: "Second template HTML & CSS",
    linkCode: "https://github.com/Elbaraa-Saber/Second-Template_HTML_CSS",
    link: "https://elbaraa-saber.github.io/Second-Template_HTML_CSS/",
    img: Temp2,
  },
  {
    id: 7,
    by: "HTML+CSS",
    intenarship: false,
    img: Temp3,
    explain: "Third template HTML & CSS",
    linkCode: "https://github.com/Elbaraa-Saber/Third_Template_HTML_CSS",
    link: "https://elbaraa-saber.github.io/Third_Template_HTML_CSS/",
  },
  {
    id: 8,
    by: "HTML+CSS",
    intenarship: false,
    img: Temp4,
    explain: "Fourth template HTML & CSS",
    linkCode: "https://github.com/Elbaraa-Saber/Fourth-Template_HTML_CSS",
    link: "https://elbaraa-saber.github.io/Fourth-Template_HTML_CSS/",
  },
  // {
  //   id: 9,
  //   by: "JS",
  //   intenarship: false,
  //   img: TempJS,
  //   explain: "First template with HTML & CSS & JS",
  //   linkCode: "https://github.com/Elbaraa-Saber/First-Project-with-JS",
  //   link: "https://elbaraa-saber.github.io/First-Project-with-JS/",
  // },
  {
    id: 10,
    by: "ExpressJS",
    intenarship: false,
    img: ExpressJs,
    explain: "Book Store API with NodeJS & Express",
    linkCode: "https://github.com/Elbaraa-Saber/bookStoreApi",
  },
  {
    id: 11,
    by: "ExpressJS",
    intenarship: false,
    img: ExpressJs,
    explain: "Courses CRUD operations API with NodeJS & Express",
    linkCode: "https://github.com/Elbaraa-Saber/courses-crud-operations",
  },
];
export const MyProjects = ({id}: Props) => {
  const [filter, setFilter] = useState<
    "React" | "HTML+CSS" | "C#" | "ReactTS" | "JS & ExpressJS" |"all"
  >("all");

  return (
    <section className="myProjects" id={id}>
      <div className="myProjects__head">
        <h2 className="myProjects__title">
          My recent <span>works</span>
        </h2>
        <ul className="myProject__filter">
          <li
            onClick={() => setFilter("all")}
            className={`myProject__choise ${
              filter === "all" && "myProject__choise-chicked"
            }`}
          >
            All
          </li>
          <li
            className={`myProject__choise ${
              filter === "C#" && "myProject__choise-chicked"
            }`}
            onClick={() => setFilter("C#")}
          >
            C#
          </li>
                    <li
            className={`myProject__choise ${
              filter === "ExpressJS" && "myProject__choise-chicked"
            }`}
            onClick={() => setFilter("ExpressJS")}
          >
            ExpressJS
          </li>
          <li
            className={`myProject__choise ${
              filter === "React" && "myProject__choise-chicked"
            }`}
            onClick={() => setFilter("React")}
          >
            ReactJS
          </li>
          <li
            className={`myProject__choise ${
              filter === "ReactTS" && "myProject__choise-chicked"
            }`}
            onClick={() => setFilter("ReactTS")}
          >
            React & TS
          </li>
          <li
            className={`myProject__choise ${
              filter === "HTML+CSS" && "myProject__choise-chicked"
            }`}
            onClick={() => setFilter("HTML+CSS")}
          >
            HTML & CSS
          </li>
        </ul>
      </div>
      <div className="container myProjects__container">
        <div className="myProjects__boxes">
          {ProjectsArr.map((project) =>
            filter === "all" ? (
              <BoxProject
                className="myProjects__box"
                key={project.id}
                intenarship={project.intenarship}
                label={project.label ? project.label : ""}
                withTeam={false}
                explain={project.explain}
                link={project.link}
                linkCode={project.linkCode}
                img={project.img}
              />
            ) : (
              project.by === filter && (
                <BoxProject
                  className="myProjects__box"
                  key={project.id}
                  intenarship={project.intenarship}
                  label={project.label ? project.label : ""}
                  withTeam={false}
                  explain={project.explain}
                  link={project.link}
                  linkCode={project.linkCode}
                  img={project.img}
                />
              )
            )
          )}
        </div>
      </div>
    </section>
  );
};
