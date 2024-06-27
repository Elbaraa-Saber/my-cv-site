import React from "react";
import './style.scss';
import { AboutMe, ChangeImgs, Experience, MyProjects, OldProjects } from "../../../Features/index.ts";


export const MainPage = () => {
    return(
        <div className="mainPage">
            <ChangeImgs/>
            <AboutMe/>
            <Experience/>
            <MyProjects/>
            <OldProjects/>
        </div>
    )
}