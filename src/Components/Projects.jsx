import React from "react";
import aljazeera from "../Images/Projects Images/aljazeera.png";
import nykaa from "../Images/Projects Images/nykaa.png";
import musicplayer from "../Images/Projects Images/musicplayer.png";
import travel1 from "../Images/Projects Images/travel.png";

import cssIcon from "../Images/Icon Images/css.svg";
import jsIcon from "../Images/Icon Images/js.svg";
import reactIcon from "../Images/Icon Images/react.svg";
import htmlIcon from "../Images/Icon Images/html.svg";
import sassIcon from "../Images/Icon Images/sass.svg";
import reduxIcon from "../Images/Icon Images/redux.svg";



import { FaGithub,FaMedium,FaExternalLinkAlt} from "react-icons/fa";


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
          <img src={reduxIcon} alt="cssIcon" className="tech-icon" />
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

  const openProjectOutdoors = () => {
    const content = (
      <div className="popup-box">
        <h2>PROJECT-3</h2>
        <img src={travel1} alt="travel1" className="portfolio-image-popupbox" />
        <p>LOOM CLONE</p>
        <div className="link-button">
          <button
            onClick={() => window.open("https://github.com/sidhant2709/html-css-travel-website")}
            className="github"
          >
            <FaGithub size="30"/>
          </button>
          <button className="explore"
            onClick={() =>
              window.open("https://sidhant2709.github.io/html-css-travel-website/")
            }
          ><FaExternalLinkAlt size="30"/></button>
          <button className="medium"><FaMedium size="30"/></button>
        </div>
        <h3>Technologies used</h3>
        <div className="technology-used">
          <img src={cssIcon} alt="cssIcon" className="tech-icon" />
          <img src={sassIcon} alt="cssIcon" className="tech-icon" />
          <img src={htmlIcon} alt="cssIcon" className="tech-icon" />
        </div>
      </div>
    );
    PopupboxManager.open({ content });
  };

  const openProjectMusicPlayer = () => {
    const content = (
      <div className="popup-box">
        <h2>PROJECT-4</h2>
        <img src={musicplayer} alt="musicplayer" className="portfolio-image-popupbox" />
        <p>REACT MUSIC PLAYER</p>
        <div className="link-button">
          <button
            onClick={() => window.open("https://github.com/sidhant2709/react-music-player")}
            className="github"
          >
            <FaGithub size="30"/>
          </button>
          <button onClick={() =>
              window.open("https://sid-react-music-player.netlify.app/")
            }
            className="explore"><FaExternalLinkAlt size="30"/></button>
          <button className="medium"><FaMedium size="30"/></button>
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
      <div className="container-fliud">
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
          <div className="portfolio-image-box" onClick={openProjectMusicPlayer}>
              <h2>Music Player</h2>
              <img src={musicplayer} className="portfolio-image" alt="musicplayer" />
          </div>

          {/* ====================================================================================================== */}
          

          <div className="portfolio-image-box" onClick={openProjectOutdoors}>
            <h2>Outdoors-A Travel Website</h2>
            <img src={travel1} className="portfolio-image" alt="travel1" />
          </div>

          </div>          
      </div>
      <PopupboxContainer />
    </div>
  );
};

export default Projects;