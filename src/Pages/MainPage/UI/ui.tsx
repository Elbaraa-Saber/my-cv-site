import React from "react";
import './style.scss';
import { AboutMe, ChangeImgs, Experience, MyProjects, OldProjects } from "../../../Features/index.ts";

interface Props {
    selectedLang: 'Russian' | 'English';
}
export const MainPage = ({selectedLang}: Props) => {
    return(
        <div className="mainPage">
            <ChangeImgs/>
            <AboutMe selectedLang={selectedLang}/>
            <Experience selectedLang={selectedLang}/>
            <MyProjects selectedLang={selectedLang}/>
            <OldProjects selectedLang={selectedLang}/>
        </div>
    )
}