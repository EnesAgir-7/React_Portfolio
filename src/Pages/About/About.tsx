import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              <h2>About Me</h2>
              <p>
                I'm a Full-Stack Developer. I love to solve problems, develop new features and design prototypes
                using different mediums. I graduated from the Computer Engineering 
                department in 2020. Since then, I have been improving my skills in 
                Full-Stack Web Development. I also have an interest in mobile application 
                development as well. Additionally, I am Master student in SRH University Heidelberg
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;