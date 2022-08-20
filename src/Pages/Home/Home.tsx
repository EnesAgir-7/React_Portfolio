import React from "react";
import "./Home.css";
import profileimg from "../../assets/img/profileimg.png";
import Linkedinicon from "../../assets/img/socialicons/linkedin.png";
import Instagramicon from "../../assets/img/socialicons/instagram.png";
import Githubicon from "../../assets/img/socialicons/github.png";
import MailIcon from "../../assets/img/socialicons/email.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 offset-sm-2">
            <div className="rightcontent" data-aos="fade-right">
              <h1>Enes Agir</h1>
              <h2>Full-Stack Developer</h2>
              <br />
              <div className="row">
                <div className="col-sm-4 col-6">
                  <a href="Resume_EnesAgir.pdf" download="Enes_Agir_Resume.pdf" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-primary">
                      Resume
                    </button>
                  </a>
                </div>
                <div className="col-sm-5 col-6">
                  <Link to="/contact">
                    <button type="button" className="btn btn-primary">
                      Hire Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-5">
            <div className="imgsec">
              <div className="bgblack" data-aos="fade-left"></div>
              <img src={profileimg} data-aos="flip-left" alt="Enes Agir" className="img-fluid" />
              <div className="socialmedia">
                <a href="https://www.linkedin.com/in/enes-agir-a0b926200/" target="_blank" rel="noreferrer">
                  <img src={Linkedinicon} alt="linkedin" data-aos="fade-left" data-aos-delay="1000" />
                </a>
                <a href="https://github.com/EnesAgir-7" target="_blank" rel="noreferrer">
                  <img src={Githubicon} alt="github" data-aos="fade-left" data-aos-delay="1000" />
                </a>
                <a href="https://www.instagram.com/enes.agir7/" target="_blank" rel="noreferrer">
                  <img src={Instagramicon} alt="instagram" data-aos="fade-left" data-aos-delay="1000" />
                </a>
                <a href="mailto:enes.agir.7@gmail.com" target="_blank" rel="noreferrer">
                  <img src={MailIcon} alt="email" data-aos="fade-left" data-aos-delay="1000" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
