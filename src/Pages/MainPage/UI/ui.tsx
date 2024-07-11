import React from "react";
import './style.scss';
import { AboutMe, HomePage, Experience, MyProjects, OldProjects } from "../../../Features/index.ts";


export const MainPage = () => {
    
    const skillsArr = [
        {id : '1' , name: 'HTML' , Percentage: "95"},
        {id : '2' , name: 'CSS' , Percentage: '90'},
        {id : '3' , name: 'JavaScript' , Percentage: '80'},
        {id : '4' , name: 'React' , Percentage: '85'},
        {id : '5' , name: 'TypeScript' , Percentage: '80'},
        {id : '6' , name: 'SCSS' , Percentage: '90'},
    ];
    const additionalSkills = [
        {id : '7' , name: 'BEM' },
        {id : '8' , name: 'Redux' },
        {id : '9' , name: 'API' },
        
    ] 
    return(
        <div className="mainPage">
            <HomePage/>
            <AboutMe skills={skillsArr} additionalSkills={additionalSkills}/>
            <Experience/>
            <MyProjects/>
            <OldProjects/>
        </div>
    )
}