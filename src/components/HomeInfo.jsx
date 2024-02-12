import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className=" font-medium sm:text-xl text-center"> {text} </p>
    <Link to={link} className=" neo-brutalism-white neo-btn">
      {btnText}{" "}
      <img className=" w-4 h-4 object-contain" src={arrow} alt="aroow" />{" "}
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className=" sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className=" font-semibold">Simon</span> 👋
      <br />A Software Engineer from Canada
    </h1>
  ),
  2: (
    <InfoBox
      link="/about"
      btnText="Learn more"
      text="Passionate about crafting digital solutions and eager to share my journey and expertise"
    />
  ),
  3: (
    <InfoBox
      link="/projects"
      btnText="Visit my portfolio"
      text="Led multiple projects to success over the years"
    />
  ),
  4: (
    <InfoBox
      link="/contact"
      btnText="let's connect"
      text="Need a project done or looking for a dev?"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
