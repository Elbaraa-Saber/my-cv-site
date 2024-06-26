import React from "react";
import './style.scss';

interface Props {
    className?: string,
    title: string
}

export const Title = ({title, className}: Props) => {
    return(
        <h3 className={`title ${className}`}>{title}</h3>
    )
}