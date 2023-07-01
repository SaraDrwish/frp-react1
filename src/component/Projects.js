import React, { useState } from "react";
import { Link } from "react-scroll";
// import {  BrowserRouter as Router , Route , Routes} from "react-router-dom";
// import { Outlet } from "react-router-dom";
// import { Link, Outlet } from "react-router-dom";
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom';
import JsProjects from "./JsProject";
import PasicProject from "./PasicProject";
import ReactProject from "./ReactProject";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import { Collapse} from "react-bootstrap"
// import Accordion from 'react-bootstrap/Accordion';
 // import Card from 'react-bootstrap/Card';
 

const Projects = () => {

    const [toggleNav1, setToggleNav1] = useState(false);
    const [toggleNav2, setToggleNav2] = useState(false);
    const [toggleNav3, setToggleNav3] = useState(false);

    return (
       
        <div className="projects" id="projects">
            
            <h2> Projects </h2>
            <p> A Frontend Developer .You Can See My Projects  </p>
            {/* <nav className="projsNav" > */}
            
                {/* <Link onClick={ () => { setToggleNav1(!toggleNav1 , toggleNav2 , toggleNav3)  } }    className="projslink"  >
                        <span> react projs </span>
                 </Link> 
                     <Link onClick={ ()=>{ (setToggleNav2(!toggleNav2 , toggleNav1 , toggleNav3)  )  } }    className="projslink"  >
                        <span>js projs </span>
                     </Link>
                    <Link onClick={ ()=>{ (setToggleNav3(!toggleNav3)   ) } }     className="projslink"   >
                       <span> HTML & CSS projs</span>
                    </Link> */}

              {/* </nav> */}
                    
                            {/* <Router> 
                                <Routes >
                                     <Route path="/projects" element={<Projects />} id="projects"  >
                                            <Route element={ <JsProjects/>  } path="JsProjects" to="JsProjects" id="JsProjects"  />
                                            <Route path="PasicProject" to="PasicProject" element={ <PasicProject/>  }  id="PasicProject" />
                                            <Route path="PasicProject" to="PasicProject" element={ <ReactProject/>  }  id="PasicProject" />
                                    </Route>
                                </Routes>
                            </Router> */}
                    
                    {/* <Outlet /> */}
                    
                
                {/* {toggleNav1 ? <ReactProject /> : ! <PasicProject/> && !<JsProjects/> } */}


                {/* {toggleNav1 ?  <ReactProject />  :  null  }
                {toggleNav2 ? <PasicProject/>  :  null}
                {toggleNav3 ? <JsProjects /> : null} */}


                {/* <div className="nav-content-Box">
                    <button onClick={ ()=>{ setToggleNav(true)} } > <ReactProject /> </button>
                    <button  onClick={ ()=>{ setToggleNav(true)} }  >  <PasicProject/> </button>
                    <button  onClick={ ()=>{ setToggleNav(true)} }  > <JsProjects/> </button>
                </div> */}
                            
                
                            
             <div className="nav-content-projects-links" >
 
                           <Tabs
                                // defaultActiveKey="projsNav"
                                className="mb-3 projsNav"
                                >
                                <Tab className="projslink" eventKey="ReactProject" title="ReactProject">
                                    <ReactProject/> 
                                </Tab>
                                <Tab className="projslink" eventKey="PasicProject" title="PasicProject">
                                    <PasicProject/> 
                                </Tab>
                                <Tab className="projslink" eventKey="JsProjects" title="JsProjects">
                                     <JsProjects/>
                                </Tab>
                               
                          </Tabs>
            </div> {/** end nav-content-projects-links */} 
            
        
            
          {/* <div className="proj blur1 " ></div>
          <div className="proj blur2 " ></div> */}
 
        </div> /** end projects */
        
    )

}

export default Projects; 