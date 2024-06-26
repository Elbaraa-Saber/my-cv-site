import React from "react";

interface Props {
    imgSrc: string,
    imgAlt: string,
    className?: string
}

export const Img = ({className, imgAlt , imgSrc}: Props) => {
    return(
        <img className={`img ${className}`} src={imgSrc} alt={imgAlt}/>
    )
} 