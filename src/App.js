// import logo from './img/3.jpeg';
import React from 'react';
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom';

import './App.css';
// import "./assets/css/style.css"
import Home from "./component/Home.js";
import Header from './component/Header.js';
import Nav from './component/Nav.js';  
import Contact from './component/Contact.js';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Logo from './component/Logo';

function App() {

  return (

    // <BrowserRouter>
    <Router>

      <Header/>
      <Routes>
        
          {/* <Route path="/logo" element={ <Logo/> } /> */}
          {/* <Route element={ <Logo/> } /> */}
        
          <Route path="/home" element={ <Home/> }  /> 
          <Route path="/header" element={ <Header/> }  /> 
          <Route path="/nav" element={ <Nav/> }  /> 
          <Route path="/skills" element={ <Skills/> }  /> 
          <Route path="/contact" element={ <Contact/> }  /> 
          <Route path="/projects" element={ <Projects/> }  /> 
      </Routes>
    
      {/* // </BrowserRouter> */}
      
    </Router>
  );

}

export default App;
