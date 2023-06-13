import React from "react";
import { Link , Outlet} from "react-router-dom";

const Projects = () => {

    return (
        <div className="Projects">
            
            <h2> Projects </h2>
            <p>Lorem8 lorem lorem lore m krek </p>
            {/* <input className="search" type="text" placeholder="search here" /> */}
              <nav className="projsNav">
                <Link to="ReactProject">react projs</Link>
                <Link to="JsProject"> js projs</Link>
                <Link to="PasicProject"> HTML & CSS projs</Link>
            </nav>
            <Outlet/>
         </div>
    )

}

export default Projects; 