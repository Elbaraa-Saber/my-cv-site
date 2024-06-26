import React, { ReactNode, useEffect, useState } from "react";
import './style.scss';
import reber from '../../Shared/Assets/Imgs/reka.jpg';
import firstTrip from '../../Shared/Assets/Imgs/firstTrip.JPG';
import firstTrip2 from '../../Shared/Assets/Imgs/firstTrip2.JPG';
import nabtit from '../../Shared/Assets/Imgs/nabtit.jpg';
import { Img } from "../../Shared/index.ts";


export const ChangeImgs = () => {
    
    // const [background, setBackground] = useState<string | null>("0");
    // const [numberOfImg, setNumberOfImg] = useState(0);
    // const arrImgs = [
    //     { id: '1' ,src: reber, alt: 'In Reaber'},
    //     { id: '2', src: firstTrip, alt: 'firstTrip'},
    //     { id: '3', src: firstTrip2, alt: 'firstTrip2'},
    //     { id: '4', src: nabtit, alt: 'nabtit'},
    // ];

    // useEffect (() => {
    //     const handleChangeImgs = () => {
    //         if(numberOfImg < 4){
    //             const newImg = arrImgs[numberOfImg].id;
    //             setBackground(newImg);
    //             setNumberOfImg(numberOfImg + 1);
    //         } else {
    //             setNumberOfImg(0);
    //         }
            
    //     }

    //     const changeId = setInterval(handleChangeImgs, 5000);
    //     return() => {
    //         clearInterval(changeId);
    //     }
    // })

    return(
        <section className="changeImg">
            {/* {arrImgs.map((img) => (
                img.id === background && 
                <Img className="changeImg__img" imgSrc={img.src} imgAlt={img.alt}/>
            ))} */}
            <Img className="changeImg__img" imgSrc={firstTrip2} imgAlt='myImg'/>
            <p className="changeImg__question">Who Am I...?</p>
        </section>
    )
}