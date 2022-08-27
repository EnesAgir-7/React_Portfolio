import React from "react";
import "./Education.css";
import services from "../../Data/Education.json";

const Education = () => {
  return (
    <div className="education">
        <div className="list">
          <h2 data-aos="fade-down">Education</h2>
        <div className="scroll">
          <ul>
            <li>
              <div className="white" data-aos="fade-right">
                <h3 className="heading ">SRH University Heidelberg</h3>
                <p>Master Science Applied Computer Science</p>
                <span className="date">2021-2023</span>
              </div>
              <span className="circle" data-aos="fade-down"></span>
            </li>
            <li>
              <div className="white" data-aos="fade-left">
                <h3 className="heading ">Amity University Haryana</h3>
                <p>Bachelor of Tech Computer Science and Engineering </p>
                <span className="date">2016-2020</span>
              </div>
              <span className="circle" data-aos="fade-down"></span>
            </li>
            <li>
              <div className="white" data-aos="fade-right">
                <h3 className="heading ">Amity University Haryana</h3>
                <p>Minor Degree in Journalism </p>
                <span className="date">2017-2020</span>
              </div>
              <span className="circle" data-aos="fade-down"></span>
            </li>
            <li>
              <div className="white" data-aos="fade-left">
                <h3 className="heading ">Jamia Hamdard University</h3>
                <p>English Course </p>
                <span className="date">2015</span>
              </div>
              <span className="circle" data-aos="fade-down"></span>
            </li>
            <li>
              <div className="white" data-aos="fade-right">
                <h3 className="heading ">Amity University Haryana</h3>
                <p> High School</p>
                <span className="date">2009-2014</span>
              </div>
              <span className="circle" data-aos="fade-down"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
