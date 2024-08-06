import React from "react";
import './style.scss';
import { AboutMe, HomePage, Experience, MyProjects, ContactMe } from "../../../Features/index.ts";


export const MainPage = () => {
    
    const skillsArr = [
        {id : '1' , name: 'HTML' , Percentage: "95"},
        {id : '2' , name: 'CSS' , Percentage: '90'},
        {id : '3' , name: 'JavaScript' , Percentage: '80'},
        {id : '4' , name: 'React' , Percentage: '85'},
        {id : '5' , name: 'TypeScript' , Percentage: '80'},
    ];
    const additionalSkills = [
        {id : '7' , name: 'BEM' },
        {id : '8' , name: 'Redux' },
        {id : '9' , name: 'API' },
        {id : '6' , name: 'SCSS'},
        
    ] 
    return(
        <div className="mainPage">
            <HomePage id='home'/>
            <AboutMe id="aboutme" skills={skillsArr} additionalSkills={additionalSkills}/>
            <Experience id="myexperience"/>
            <MyProjects id="projects"/>
            <ContactMe id="contact"/>
        </div>
    )
}