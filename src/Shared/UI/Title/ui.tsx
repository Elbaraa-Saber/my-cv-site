import React from "react";
import './style.scss';

interface Props {
    className?: string,
    title: string
    // children
}

export const Title = ({title, className}: Props) => {
    return(
        <h2 className={`title ${className}`}>{title}<span>{}</span></h2>
    )
}