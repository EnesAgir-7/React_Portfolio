import React, { useState } from "react";
import "./Nav.css";
import Home from "../assets/img/home.png";
import About from "../assets/img/about.png";
import Contact from "../assets/img/contact.png";
import Education from "../assets/img/education.png";
import Projects from "../assets/img/portfolio.png";
import Skills from "../assets/img/Skills.png";
import Work from "../assets/img/work.png";
import Jsprojects from "../assets/img/jsprojects.png";


const Nav = () => {
  const [visible, setVisible]= useState(false);
  return (
    <div>
      <div id="navigation">
        <ul>
          <li data-aos="zoom-in">
            <img src={Home} alt="home" />
          </li>
          <li data-aos="zoom-in">
            <img src={About} alt="about" />
          </li>
          <li data-aos="zoom-in">
            <img src={Skills} alt="services" />
          </li>
          <li data-aos="zoom-in">
            <img src={Work} alt="work" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav