import React from "react";
import { Link } from "react-scroll";
// import { Link , BrowserRouter ,Route , Routes} from "react-router-dom";
// import { Outlet } from "react-router-dom";
// import { Link, Outlet } from "react-router-dom";
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom';
import JsProjects from "./JsProject";
import PasicProject from "./PasicProject";
import ReactProject from "./ReactProject";
// import { Collapse} from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';
 // import Card from 'react-bootstrap/Card';
 

const Projects = () => {

    return (
       
        <div className="projects" id="projects">
            
            <h2> Projects </h2>
            <p> A Frontend Developer .You Can See My Projects  </p>
            <nav className="projsNav" >
                     {/* <Link to="ReactProject" spy={true} smooth={true} className="projslink" >

                    </Link>
                     <Link to="JsProject" spy={true} smooth={true}  className="projslink">
                    <span>js projs </span>
                         
                     </Link>
                    <Link to="PasicProject" spy={true} smooth={true}  className="projslink" >
                    <span> HTML & CSS projs</span>
                        
                    </Link> */}

            <div className="nav-content-projects-links" >
{/* 
                    <Accordion  defaultActiveKey={['0']} alwaysOpen className="accordion d-flex flex-direction-row  " >
                        <Accordion.Item eventKey="0" className="accordion-Item" >
                            <Accordion.Header className="accordion-Header">react Projects</Accordion.Header>
                                <Accordion.Body  className="accordion.Body">
                                    <ReactProject />
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className="accordion-Item">
                                <Accordion.Header className="accordion-Header" >js projs </Accordion.Header>
                                    <Accordion.Body className="accordion-Body" >
                                    <PasicProject/>
                                    </Accordion.Body >
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className="accordion-Item">
                                <Accordion.Header className="accordion-Header" >HTML & CSS & JS</Accordion.Header>
                                    <Accordion.Body className="accordion-Body">
                                    <JsProjects/>
                                    </Accordion.Body>
                            </Accordion.Item>
                    </Accordion> */}
 
                
                      {/* <Router> 
                          <Routes>
                             <Route path="/projects" element={<Projects />} id="projects" >     
                                 <Route path="ReactProject" to="ReactProject" id="ReactProject" element={<ReactProject />} />
                             
                                      <Route path="JsProjects" to="JsProjects" id="JsProjects" element={ <JsProjects/> } />
                                      <Route path="PasicProject" to="PasicProject" id="PasicProject" element={ <PasicProject/> } />
                                </Route>
                          </Routes>
                    </Router>
                <Outlet /> */}
          </div>                 
        </nav>
   
 
        </div>
        
    )

}

export default Projects; 