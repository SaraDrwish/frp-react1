// // import logo from './img/3.jpeg';
import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { Link } from 'react-scroll'
import './App.css';
import "./assets/css/style.css"
import Home from "./component/Home";
// import Header from './component/Header.js';
import Contact from './component/Contact';
import Skills from './component/Skills';
import Projects from './component/Projects';
// import ReactProject from './component/ReactProject.js';
// import JsProject from './component/JsProject';
import Footer from "./component/Footer";

function App() {
  // const navigate = useNavigate();

  return (
    <div className='App'  >

      {/* <BrowserRouter> */}

                      {/* <Home path="/home"  />   
                      <Skills path="/skills"  /> */}
                      <Home />
                      <Skills />
                      <Projects />                          
                      <Contact />  
                      <Footer />     
        
                        {/* <Route path="/home" element={ <Home/> }  />  */}
                           
          
                        {/* <Route path="/projects" element={<Projects />} target="_blank" >           
                              <Route path="ReactProject" element={ <ReactProject/>} />
                              <Route path="JsProject" element={<JsProject />} />
                        </Route> */}
          
                         {/* <Route path="*" element={<h2> the page is not found  </h2>} />  */}
                         {/* <Route path="/" element={ <h2>Main Bage</h2>}  />  */}
             
      {/* </BrowserRouter> */}
      
    </div>

  );

}

export default App;
