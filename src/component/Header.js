import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import linkedicon from "../assets/img/linkedin.svg"
 

const Header = () => {
    
    const x = useNavigate();

    const mobile = window.innerWidth <= 768 ? true : false; 

    const [HeaderNav, setHeaderNav] = useState(false);
    // const [active, setActive] = useState(false);
      const [MenueOpen, setMenueOpen] = useState(false) 

    // const [active, setActive] = useState("right-h");
    // const navToggl = () => {
    //     active === "right-h" ? setActive("right-h active-nav") : setActive("right-h");
    // }
 
    const HeaderNavbar = () => {
        if (window.scrollY >= 50) {
            // if (window.innerWidth >= 100) {
            setHeaderNav(true)
        } else {
            setHeaderNav(false)
            }
       }
    window.addEventListener("scroll", HeaderNavbar)
    
        return (

            <nav className={HeaderNav ? "HeaderNav active" : "HeaderNav"}  >
            {/* // <nav className={HeaderNav ? "homeContent active" : "HeaderNav"}  > */}
            {/* // <nav className={HeaderNav ? "homeContent active" : "homeContent"}  > */}

                <div className="left-h">
                    <a href="/home" > <h2 className="logo" > Logo </h2> </a>
                      <svg className="HeaderRebonsivNavClose"
                        onClick={()=>setMenueOpen(false) }
                          smooth={true} span={true}
                                  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                 <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                       </svg> 
                </div> {/* {end left-h} */}
                
                {(MenueOpen === false && mobile === true) ? 
                    
                    <svg className="HeaderRebonsivNavClose"
                        
                        onClick={ ()=> setMenueOpen(true) }
                                    //     onClick={() => {
                                    // setActive(!active)
                                    // }}
                                        xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                       </svg> 
                 
                    :

                <div className= "right-h">
                {/* // <div className={active ? "HeaderRebonsivNav" : "right-h"} onClick={() => { */}
                    {/* // setActive(true) */}
                {/* // }}> */}
                    <NavLink onClick={()=>setMenueOpen(false) } to="home"  smooth={true} span={true} className="homeActive" >Home</NavLink>
                    <NavLink  to="projects" onClick={()=>setMenueOpen(false) } smooth={true} span={true} >Projects</NavLink>
                    <NavLink onClick={()=>setMenueOpen(false) }  smooth={true} span={true} to="skills" >Skills</NavLink>
                    {/* <Link to="/contact" >Contact Me</Link> */}
                    <div className="right-icons">

                        <div onClick={()=>setMenueOpen(false) } smooth={true} span={true}   className="circlSoical" >
                            <a href="https://www.facebook.com/profile.php?id=100004068983816" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                </svg>
                            </a>
                            <a href="https://github.com/SaraDrwish" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512">
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/sara-darwish-921341178/" target='_blank' >
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                </svg>
                            </a>
                        </div>  {/* {end circlSoical } */}

                            <Link onClick={()=>setMenueOpen(false) } smooth={true} span={true} to="./Contact.js" >
                                <button className="btn" onClick={() => x("/contact")} > Let's Contact  </button>
                            </Link>

                    </div>   {/* {end right-icons  } */}

                    
                
                </div>   /* {end right-h} */
            
           }
                
            </nav>
            
        )
    }
 
export default Header; 