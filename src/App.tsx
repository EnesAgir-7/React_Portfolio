import React, { Route, Routes } from "react-router-dom";
import './App.css';
import Nav from './common/Nav';
import Home from './Pages/Home/Home';
import "./common/CommonCss.css"
import About from "./Pages/About/About";
import Education from "./Pages/Education/Education";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Skills from "./Pages/Skills/Skills";
import Work from "./Pages/Work/Work";
import Project from "./Pages/Project/Project";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "./Pages/Contact/Contact";


function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  return (
    <div>
      <Nav/>
      <Routes>
        <Route  path="/" element={<Home />}></Route>
        <Route  path="/about" element={<About />}></Route>
        <Route  path="/education" element={<Education />}></Route>
        <Route  path="/skills" element={<Skills />}></Route>
        <Route  path="/work" element={<Work />}></Route>
        <Route  path="/projects" element={<Project />}></Route>
        <Route  path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
