import React from "react";
import "./style.scss";

import { ArrowIcon } from "../../Shared/UI/Icons/Arrow.tsx";
import backGroundItems from "../../Shared/Assets/Imgs/doodlesmixedround.png";
import Man from "../../Shared/Assets/Imgs/Group2346.png";
import { FloorIcon } from "../../Shared/UI/Icons/Floor.tsx";
import { DownArrow } from "../../Shared/UI/Icons/DownArrow.tsx";

interface Props {
  id: string;
}
export const HomePage = ({ id }: Props) => {
  const handleScroll = () => {
    const section = document.getElementById("aboutme");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section className="homePage" id={id}>
      <div className="homePage__left">
        <ArrowIcon className="homePage__arrowIcon" />
        <h1 className="homePage__work">
          Frontend
          <br />
          <span>Developer</span>
        </h1>
        <div className="homePage__emailLink">
          <a href="mailto:baraax01@gmail.com" className="homePage__link">
            Hire me
          </a>
        </div>
        <DownArrow onClick={handleScroll} className="homePage__downArrow" />
      </div>
      <div className="homePage__right">
        <img
          className="homPage__backgroundImg"
          src={backGroundItems}
          alt="sdf"
        />
        <img className="homPage__manImg" src={Man} alt="sdf" />
        <FloorIcon className="homePage__floor" />
      </div>
      {/* <Img className="changeImg__img" imgSrc={firstTrip2} imgAlt='myImg'/> */}
    </section>
  );
};
