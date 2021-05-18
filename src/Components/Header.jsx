/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typed from "react-typed";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import resume from "./files/Resume.pdf";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Hello, I'm SIDHANT KUMAR SAHOO</h1>
        <Typed
          className="typed-text"
          strings={["I am an aspiring Full Stack Developer.","Below you can download my Resume","Visit my GitHub & LinkedIn Profile"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <div>
          <button
            className="btnGit"
            onClick={() => window.open("https://github.com/sidhant2709")}
          >
            <FaGithub size="35" />
          </button>
          <a href={resume} download className="btn-main-offer">
            Download Resume
          </a>
          <button
            className="btnGit"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/sidhant-kumar-sahoo-08a8291b8/"
              )
            }
          >
            <FaLinkedin size="35" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
