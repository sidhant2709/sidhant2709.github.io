/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import p1 from "../Images/Projects Images/p1.jpg";
import aljazeera from "../Images/Projects Images/aljazeera.png";
import nykaa from "../Images/Projects Images/nykaa.png";
import loom from "../Images/Projects Images/loom.png";
import p4 from "../Images/Projects Images/p4.jpg";
import cssIcon from "../Images/Icon Images/css.svg";
import jsIcon from "../Images/Icon Images/js.svg";
import reactIcon from "../Images/Icon Images/react.svg";
import htmlIcon from "../Images/Icon Images/html.svg";
import { FaGithub,FaMedium,FaLink,FaExternalLinkAlt} from "react-icons/fa";


import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Projects = () => {
  const openProjectAlzajeera = () => {
    const content = (
      <div className="popup-box">
        <h2>PROJECT-1</h2>
        <img
          src={aljazeera}
          alt="aljazeera"
          className="portfolio-image-popupbox"
        />

        <p>ALJAZEERA CLONE</p>

        <div className="link-button">
          <button
            onClick={() =>
              window.open(
                "https://github.com/rohanranjan25061996/hexane-aljeera-clone"
              )
            }
            className="github"
          >
          <FaGithub size="30"/></button>
          <button onClick={() =>
              window.open(
                "https://60601aa669e55d6d22f1cce0--aljajeera-clone.netlify.app/"
              )
            } className="explore"><FaExternalLinkAlt size="30"/></button>
          <button
            onClick={() =>
              window.open("https://sidhant1593.medium.com/project-3-aljazeera-clone-ab2dc92e425f")
            }
            className="medium"
          ><FaMedium size="30"/></button>
        </div>
        <h3>Technologies used</h3>
        <div className="technology-used">
          <img src={cssIcon} alt="cssIcon" className="tech-icon" />
          <img src={jsIcon} alt="cssIcon" className="tech-icon" />
          <img src={htmlIcon} alt="cssIcon" className="tech-icon" />
          <img src={reactIcon} alt="cssIcon" className="tech-icon" />
        </div>
      </div>
    );
    PopupboxManager.open({ content });
  };
  const openProjectNykaa = () => {
    const content = (
      <div className="popup-box">
        <h2>PROJECT-2</h2>
        <img src={nykaa} alt="p2" className="portfolio-image-popupbox" />
        <p>NYKAA CLONE</p>
        <div className="link-button">
          <button
            onClick={() =>
              window.open("https://github.com/divy25/lithiumProject")
            }
            className="github"
          >
            <FaGithub size="30"/>
          </button>
          <button className="explore"><FaExternalLinkAlt size="30"/></button>
          <button
            onClick={() =>
              window.open("https://sidhant1593.medium.com/project-2-nykaa-clone-c982680bd38c")
            }
            className="medium"
          ><FaMedium size="30"/></button>
        </div>
        <h3>Technologies used</h3>
        <div className="technology-used">
          <img src={cssIcon} alt="cssIcon" className="tech-icon" />
          <img src={jsIcon} alt="cssIcon" className="tech-icon" />
          <img src={htmlIcon} alt="cssIcon" className="tech-icon" />
        </div>
      </div>
    );
    PopupboxManager.open({ content });
  };

  const openProjectLoom = () => {
    const content = (
      <div className="popup-box">
        <h2>PROJECT-3</h2>
        <img src={loom} alt="loom" className="portfolio-image-popupbox" />
        <p>LOOM CLONE</p>
        <div className="link-button">
          <button
            onClick={() => window.open("https://github.com/aman73650/Bromine")}
            className="github"
          >
            <FaGithub size="30"/>
          </button>
          <button className="explore"><FaExternalLinkAlt size="30"/></button>
          <button
            onClick={() =>
              window.open("https://sidhant1593.medium.com/project-1-loom-clone-abf47a30583d")
            }
            className="medium"
          ><FaMedium size="30"/></button>
        </div>
        <h3>Technologies used</h3>
        <div className="technology-used">
          <img src={cssIcon} alt="cssIcon" className="tech-icon" />
          <img src={jsIcon} alt="cssIcon" className="tech-icon" />
          <img src={htmlIcon} alt="cssIcon" className="tech-icon" />
        </div>
      </div>
    );
    PopupboxManager.open({ content });
  };
  const openP4 = () => {
    const content = (
      <div className="popup-box">
        <img src={p1} alt="p1" className="portfolio-image-popupbox" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          molestiae temporibus deserunt eius autem corporis eveniet consequatur,
          mollitia accusantium quam quos omnis nulla quas impedit.
        </p>
        <div className="link-button">
          <button
            onClick={() =>
              window.open("https://github.com/divy25/lithiumProject")
            }
            className="github"
          >
            GitHub Link
          </button>
          <button className="demo">EXPLORE</button>
          <button
            onClick={() =>
              window.open("https://sidhant1593.medium.com/project-1-loom-clone-abf47a30583d")
            }
            className="github"
          >Blog Link</button>
        </div>
        <h3>Technologies used</h3>
        <div className="technology-used">
          <img src={cssIcon} alt="cssIcon" className="tech-icon" />
          <img src={jsIcon} alt="cssIcon" className="tech-icon" />
          <img src={htmlIcon} alt="cssIcon" className="tech-icon" />
          <img src={reactIcon} alt="cssIcon" className="tech-icon" />
        </div>
      </div>
    );
    PopupboxManager.open({ content });
  };
  return (
    <div id="projects" className="portfolio-wrapper">
      <h1 className="text-uppercase text-center heading">Projects</h1>
      <div className="container-fluid">
        <div className="image-box-wrapper row justify-content-center">



          <div className="portfolio-image-box" onClick={openProjectAlzajeera}>
            <h2>Al Jazeera Clone</h2>
            <img src={aljazeera} className="portfolio-image" alt="p1" />
          </div>

          {/* ====================================================================================================== */}

          <div className="portfolio-image-box" onClick={openProjectNykaa}>
            <h2>Nykaa Clone</h2>
            <img src={nykaa} className="portfolio-image" alt="nykaa" />
          </div>

          {/* ====================================================================================================== */}

          <div className="portfolio-image-box" onClick={openProjectLoom}>
          <h2>Loom Clone</h2>
            <img src={loom} className="portfolio-image" alt="loom" />
          </div>

          {/* ====================================================================================================== */}

          {/* <div className="portfolio-image-box" onClick={openP4}>
            <img src={p4} className="portfolio-image" alt="p4" />
            <div className="overflow"></div>
          </div> */}



        </div>
      </div>
      <PopupboxContainer />
    </div>
  );
};

export default Projects;