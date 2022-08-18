import React, { Route, Routes } from "react-router-dom";
import './App.css';
import Nav from './common/Nav';
import Home from './Pages/Home/Home';
import "./common/CommonCss.css"
import About from "./Pages/About/About";


function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route  path="/" element={<Home />}></Route>
        <Route  path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
