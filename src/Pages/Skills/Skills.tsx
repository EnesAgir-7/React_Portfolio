import React from 'react'
import skills from "../../Data/TechnicalSkills.json";

const Skills = () => {
  return (
    <div id="work">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <h2 data-aos="fade-down">Technical Skills</h2>
            <br/>
            {skills.map((item, i) => (
              <div className="workblock" key={i}>
                <div className="row">
                  <div className="col-sm-5">
                    <h4 data-aos="fade-right">{item.course}</h4>
                  </div>
                  <div className="col-sm-7">
                    <div className="educationright" data-aos="fade-left">
                      <h6>{item.tools}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills