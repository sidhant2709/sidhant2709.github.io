/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" href="#">
          <h2 className="logo">{`<Hello World />`}</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">
                Home<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="about"
                offset={-90}
                className="nav-link"
                href="#"
              >
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="technologies"
                offset={-90}
                className="nav-link"
                href="#"
              >
                proficiences
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="projects"
                offset={-90}
                className="nav-link"
                href="#"
              >
                projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="experience"
                offset={-90}
                className="nav-link"
                href="#"
              >
                experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="contacts"
                offset={-90}
                className="nav-link"
                href="#"
              >
                contact me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
