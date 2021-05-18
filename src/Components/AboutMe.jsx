import React from "react";
import MyImage from "../Images/Sid.jpg";
const AboutMe = () => {
  return (
    <section id="about" className="container-fluid about-me">
      <div className="container py-5 cont-h about-me-border">
        <h1 className="about-header text-center">ABOUT ME</h1>
        <div className="quote">
          <p>
            "When I was 5 years old, my mother always told me that happiness was
            the key to life. When I went to school, they asked me what I wanted
            to be when I grew up. I wrote down 'happy'. They told me I didn't
            understand the assignment, and I told them they didn't understand
            life."
          </p>
          <div className="quote-by">
            <span>-John Lenon</span>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-6 col-xm-12 d-flex flex-column justify-content-center align-items-center my-photo">
            <div className="photo-wrap">
              <img src={MyImage} alt="Sidhant" className="profile-img" />
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <p className="about-paragraph">
              I am <span className="my-name">Sidhant Kumar Sahoo</span>. I am
              from Bhubaneswar, Odisha.
              an electrical engineering graduate from C.V. Raman college of engineering.
              <br /> I graduated in the year 2016 and got hired by Cognizant Technology Solutions through the campus placement where I worked for 8 months as a software developer. 
              After that I worked as a Marketing Executive
              for CIMS Bhubaneswar in March of 2020 I lost my job due to
              pandemic.
              <br />
              In Nov-2020 I started working as a Transportation Specialist in
              Amazon-ROC Hyderabad.
              <br />
              <span className="masai">
                In past few months I have invested my time learning technical
                and soft skills.
                <br />
                Have built a number of web applications and 3 major projects.
                Have invested a lot of time in data structures and algorithm.
                <br />
                Learned a great deal about team-work, leadership, and
                communication. After months of rigorous training, here I am
                looking for an opportunity as a full stack web developer.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
