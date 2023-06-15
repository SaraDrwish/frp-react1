// // import logo from './img/3.jpeg';
import React from 'react';
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom';
import './App.css';
import "./assets/css/style.css"
import Home from "./component/Home.js";
// import Header from './component/Header.js';
import Contact from './component/Contact.js';
import Skills from './component/Skills';
import Projects from './component/Projects';
import ReactProject from './component/ReactProject.js';
import JsProject from './component/JsProject';
import Footer from "./component/Footer";



function App() {

  return (
    
    <div className='App' >
   
            <Router>

                    {/* <Header /> */}
                      <Home/>   
                      <Skills /> 
                      <Projects />
                      
                    <Contact />  
                    <Footer/>
        
                    <Routes>
                        {/* <Route path="/logo" element={ <Logo/> } /> */}
           
                        {/* <Route path="/home" element={ <Home/> }  />  */}
                        {/* <Route path="/header" element={ <Header/> }  />  */}
                        {/* <Route path="/skills" element={ <Skills/> }  />  */}
                        {/* <Route path="/contact" element={<Contact />} />  */}
                       
                 
                       {/* <Route path="/projects" element={<Projects />} target="_blank" >           
                           <Route path="ReactProject" element={ <ReactProject/>} />
                            <Route path="JsProject" element={<JsProject />} />
                      </Route>
                        */}
                         {/* <Route path="*" element={<h2> the page is not found  </h2>} />  */}
                         {/* <Route path="/" element={ <h2>Main Bage</h2>}  />  */}

                </Routes>
                
                {/* </BrowserRouter> */}
                
            </Router>

    </div>


  );

}

export default App;
