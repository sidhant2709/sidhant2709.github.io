import React from "react";

const Experiences = () => {
  return (
    <div id="experience" className="experiences">
      <div className="d-flex justify-content-center">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>July 2021-Current</h3>
            <h4>Global Logic</h4>
            <p>
              Software Engineer, Engineering
              <br />
              <span className="role">
                Produce clean, efficient code based on specifications
              </span>
            </p>
          </div>
        </div>
        {/* ========================================================================================================= */}

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Nov 2020-April 2021</h3>
            <h4>AMAZON-ROC</h4>
            <p>
              Transportation Specialist - I <br />
              <span className="role">
                Continual, tactical communication with external customers and
                internal customers.
              </span>
            </p>
          </div>
        </div>
        {/* ========================================================================================================= */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>June 2017- Feb 2020</h3>
            <h4>CIMS-BHUBANESWAR</h4>
            <p>
              Marketing Executive
              <br />
              <span className="role">
                To give solutions of marketing plans, advertising and direct
                marketing.
              </span>
            </p>
          </div>
        </div>
        {/* ========================================================================================================= */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>July 2016-Mar 2017</h3>
            <h4>COGNIZANT TECHNOLOGY SOLUTIONS-KOLKATA</h4>
            <p>
              Program Analyst <br />
              <span className="role">
                Dotnet Developer
                <br />
                Produce clean, efficient code based on specifications
              </span>
            </p>
          </div>
        </div>
        {/* ========================================================================================================= */}
      </div>
    </div>
  );
};

export default Experiences;
