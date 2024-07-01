import React from "react";
import './style.scss';
import { AboutMe, HomePage, Experience, MyProjects, OldProjects } from "../../../Features/index.ts";


export const MainPage = () => {
    return(
        <div className="mainPage">

            <HomePage/>
            <AboutMe/>
            <Experience/>
            <MyProjects/>
            <OldProjects/>
        </div>
    )
}