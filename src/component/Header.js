import React from "react";
import { Link , NavLink} from 'react-router-dom';

const Header = () => {
    
    // const style1 = ( { isActive } ) => {
    //     return {
    //         color: isActive ? "red" : "blue",
    //         fontSize: isActive ? "22px" : "25px"
    //     }
    // }

    return (
        <>
            <nav>
                
              <h2> Logo </h2>
           
                  {/* <NavLink to="/home" style={ style1 }>Home</NavLink> */}
                <NavLink to="/home" >Home</NavLink>
                <NavLink to="/projects" >Projects</NavLink>
                <NavLink to="/skills" >Skills</NavLink>
                {/* <Link to="/contact" >Contact Me</Link> */}
                
            </nav>

        </>
            
    )
}

export default Header; 