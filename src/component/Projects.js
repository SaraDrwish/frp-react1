import React  from "react";
// import { Link } from "react-scroll";
// import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom';
import JsProjects from "./JsProject";
import PasicProject from "./PasicProject";
import ReactProject from "./ReactProject";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Projects = () => {

    return (
       
        <div className="projects" id="projects">
            
            <h2> Projects </h2>
            <p> A Frontend Developer .You Can See My Projects  </p>

            {/* <nav className="projsNav" >
                <Link onClick={ () => { setToggleNav1(!toggleNav1 , toggleNav2 , toggleNav3)  } }    className="projslink"  >
                        <span> react projs </span>
                 </Link> 
                     <Link onClick={ ()=>{ (setToggleNav2(!toggleNav2 , toggleNav1 , toggleNav3)  )  } }    className="projslink"  >
                        <span>js projs </span>
                     </Link>
                    <Link onClick={ ()=>{ (setToggleNav3(!toggleNav3)   ) } }     className="projslink"   >
                       <span> HTML & CSS projs</span>
                    </Link>
              </nav> */}
                            
             <div className="nav-content-projects-links" >
 
                           <Tabs
                                // defaultActiveKey="projsNav"
                                className="mb-3 projsNav"
                                >
                                <Tab className="projslink" eventKey="ReactProject" title="React Project">
                                    <ReactProject/> 
                                </Tab>
                                <Tab className="projslink" eventKey="PasicProject" title="Pasic Project">
                                    <PasicProject/> 
                                </Tab>
                                <Tab className="projslink" eventKey="JsProjects" title="Js Projects">
                                     <JsProjects/>
                                </Tab>
                               
                          </Tabs>
            </div> {/** end nav-content-projects-links */} 
            
 
        </div> /** end projects */
        
    )

}

export default Projects; 