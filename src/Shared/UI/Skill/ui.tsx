import React from "react";
import './style.scss'

interface Props {
    skill: string,
    className?: string
}
export const Skill = ({skill, className}: Props) => {
    return(
        <span className={`skill ${className}`}>{skill}</span>
    )
}