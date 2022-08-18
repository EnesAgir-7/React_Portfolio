import React, { Route, Routes } from "react-router-dom";
import './App.css';
import Nav from './common/Nav';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
