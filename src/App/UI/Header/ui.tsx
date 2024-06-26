import React, { useEffect, useRef, useState } from "react";
import './style.scss';
import logo from '../../../Shared/Assets/Imgs/logo.jpg';
import classNames from "classnames";
import { Img } from "../../../Shared/UI/Img/ui.tsx";

export const Header = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const myDiv = ref.current;
            if (!myDiv) return;

            const scrollThreshold = 200;
            const scrollPosition = window.scrollY;

            if (scrollPosition > scrollThreshold) {
                setIsVisible(false)
            } else {
                setIsVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    const classNameHeader = classNames (
        'header',
        isVisible ? 'header-hide' : 'header-show' 
    );

    return (
        <header ref={ref} className={classNameHeader}>
            <div className="header__left">
                <div className="header__name">ЭльБараа</div>
                <p className="header__work">Frontend Developmer</p>
            </div>
            <Img imgSrc={logo} imgAlt='mylog' className="header__img"/>
            <div className="header__right">
                <div className="header__infoBox">
                    <span className="header__info">Россия, Томск</span>
                </div>
                <div className="header__infoBox">
                    <span className="header__info">+7 996 692 5268</span>
                </div>
                <div className="header__infoBox">
                    <a href="mailto:baraasaber22@gmail.com" className="header__info">baraasaber22@gmail.com</a>
                </div>
            </div>
        </header>
    )
}