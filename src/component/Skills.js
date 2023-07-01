import React, { useState } from "react";
// import { Swiper, SwiperSlide , useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
 // import Carousel from 'react-bootstrap/Carousel';
// import { motion } from 'framer-motion';


const Skills = () => {

 
    // const [selected, setSelected] = useState(0);
    // const crclProgress =  ;
    // const transition = { type: "spring", duration: 3 }

    return (

        <div className="skills" id="skills"  >
            <span> </span>

            {/* --------------------- */}

            {/*                 
              <motion.span                 
                  key={selected}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ transition, duration: 2 }}
                  exit={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}   >              
                  {crclProgress[selected].review}
              </motion.span>
 
          <div className="right-testi">
              <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ transition, duration: 2 }}
                  whileInView={{opacity:1 ,x:0} }
              ></motion.div>

              <motion.div
                 initial={{ opacity: 0, x: 100 }}
                  transition={{ transition, duration: 2 }}
                  whileInView={{opacity:1 ,x:0} }
              ></motion.div>

              <motion.img  
                  key={selected}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ transition, duration: 2 }}
                  exit={{ opacity: 0, x: -100 }}
                  whileInView={{opacity:1 ,x:0} }     
                  src={crclProgress[selected].img} alt="tstimg" />
              <div className="arros">
                  <svg
                      onClick={() => {
                      selected === 0 ? setSelected( crclProgress - 1) : setSelected( (prv) => prv-1)
                        } }
                      xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" className="arro">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                     </svg>
                  <svg  
                      onClick={() => {
                          selected === crclProgress - 1 ? setSelected(0) :  setSelected( (prv) => prv+1)
                               } }                 
                      xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" className="arro" >
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>

                 </div>

            </div> */}

            {/**end arros */}

            <div className="skills-container">

                <div className="skills-top">
                    <h2> Skills </h2>
                    <p>You can see my skills here</p>
                </div> {/** end skills-top  */}

                <div className="skills-btm">

                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" className="arro">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg> */}

                    <Swiper
                        modules={[Navigation, Pagination]}
                        className="Swiperptns"
                        loopFillGroupWithBlank={true}
                        navigation={true}
                        slidesPerView={3}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        loop={true}
                       >
                        
                        <SwiperSlide>
                                <div className="circleBigBox">
                                    <div className="outer">
                                        <div className="inner">
                                            <div id="number" className="number">
                                                90%
                                            </div> {/** end num */}
                                        </div> {/** end inn */}

                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="160px" width="160px" className="svgcricl" >
                                            <defs>
                                                <linearGradient id="gradient">
                                                    <stop offset="0%" stop-color="rgb(255, 163, 107)" />
                                                    <stop offset="100%" stop-color="rgb(248, 163, 208)" />
                                                </linearGradient>
                                            </defs>
                                            {/* <circle  className="circlSkills" cx="70" cy="70" r="60" stroke="flex" stroke-width="15" /> */}
                                            <circle className="progcirclSkills" cx="70" cy="70" r="60" strokeLinecap="round" />
                                        </svg>
                                        {/* <text x="0%" y="50%" dy="0rem" textAnchor="middle" className="skills-text-prog"  >Js dev</text> */}


                                    </div> { /**end outer*/}
                                    <text textAnchor="middle" className="skills-text-prog" > Web Devoloper</text>
                                </div> {/** end circleBigBox */}
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="circleBigBox">
                                <div className="outer">
                                    <div className="inner">
                                        <div id="number" className="number">
                                            70%
                                        </div>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="160px" width="160px" className="svgcricl" >
                                        <defs>
                                            <linearGradient id="gradient">
                                                <stop offset="0%" stop-color="rgb(255, 163, 107)" />
                                                <stop offset="100%" stop-color="rgb(248, 163, 208)" />
                                            </linearGradient>
                                        </defs>
                                        {/* <circle  className="circlSkills" cx="70" cy="70" r="60" stroke="flex" stroke-width="15" /> */}
                                        <circle className="progcirclSkills" cx="70" cy="70" r="60" strokeLinecap="round" />
                                    </svg>
                                    {/* <text x="0%" y="50%" dy="0rem" textAnchor="middle" className="skills-text-prog"  >Js dev</text> */}


                                </div> { /**end outer*/}
                                <text textAnchor="middle" className="skills-text-prog" > Web Devoloper</text>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="circleBigBox">
                                <div className="outer">
                                    <div className="inner">
                                        <div id="number" className="number">
                                            87%
                                        </div>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="160px" width="160px" className="svgcricl" >
                                        <defs>
                                            <linearGradient id="gradient">
                                                <stop offset="0%" stop-color="rgb(255, 163, 107)" />
                                                <stop offset="100%" stop-color="rgb(248, 163, 208)" />
                                            </linearGradient>
                                        </defs>
                                        <circle className="progcirclSkills" cx="70" cy="70" r="60" strokeLinecap="round" />
                                    </svg>
                                    {/* <text x="0%" y="50%" dy="0rem" textAnchor="middle" className="skills-text-prog"  >Js dev</text> */}


                                </div> { /**end outer*/}
                                <text textAnchor="middle" className="skills-text-prog" > Web Devoloper</text>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" className="arro" >
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                 </svg> */}

                </div>  {/** end skills-btm */}

            </div>  {/** end skills-container */}

        </div>
    )

}

export default Skills; 