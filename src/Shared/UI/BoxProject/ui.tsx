import React from "react";
import './style.scss';
import { NavLink } from "react-router-dom";

interface Props {
    explain: string,
    label: string,
    link: string,
    withTeam: boolean,
    className?: string
}

export const BoxProject = ({label, link, withTeam, explain, className}: Props) => {
    return(
        <div className={`boxProject ${className}`}>
            <div className="    ">
                <h3 className="boxProject__title">{explain}</h3>
                <div className="boxProject__creator">{withTeam ? "Сделано командой" : 'Сделано мной'} на стажировке</div>
            </div>
            <NavLink className='boxProject__link' to={link}>Go to <span>{label}</span></NavLink>
        </div>
    )
}