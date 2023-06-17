import React from "react";
import { Link, Outlet } from "react-router-dom";
import ReactProject from './ReactProject.js';

// import ReactProject from "ReactProject";

const Projects = () => {

    return (

        <div className="Projects">
            
            <h2> Projects </h2>
            <p> A Frontend Developer .You Can See My Projects  </p>
            {/* <input className="search" type="text" placeholder="search here" /> */}
              <nav className="projsNav">
                <Link to="ReactProject">react projs</Link>
                <Link to="JsProject"> js projs</Link>
                <Link to="PasicProject"> HTML & CSS projs</Link>
              </nav>

            <Outlet />
            
            <ReactProject />

        </div>
        
    )

}

export default Projects; 