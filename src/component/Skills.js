import React from "react";
// import
import Carousel from 'react-bootstrap/Carousel';

const Skills = () => {

    return (
        <div className="skills">
            <span> </span>
            
            <div className="skills-container">

                <div className="skills-top">
                    <h2> Skills </h2>
                    <p>You can see my skills here</p>
                </div> {/** end skills-top  */}
               

                <div className="skills-btm">

                  {/* <Carousel className="Carousel">
                        <Carousel.Item className="CarouselItem">
                            <Carousel.Caption className="CarouselItemCabt">
                                <h3>First slide label</h3>
                            </Carousel.Caption>
                       </Carousel.Item>
                        <Carousel.Item className="CarouselItem" >
                                <h3>Second slide label</h3>
                        </Carousel.Item>
                    </Carousel> */}

                    <defs>
                        <linearGradient id="gradient">
                            <stop  offset="80%" stop-color="rgb(255, 163, 107)" />
                            <stop  offset="20%" stop-color="rgb(248, 163, 208)" />
                            {/* <stop  offset="30%" stop-color="rgb(255, 108, 16)" />
                            <stop  offset="20%" stop-color="rgb(248, 16, 140)" /> */}
                        </linearGradient>
                    </defs>
                    <svg height="150" width="150"  >
                        <circle  className="circlSkills" cx="60" cy="60" r="50" stroke="flex" stroke-width="11" />
                        <circle className="progcirclSkills" cx="60" cy="60" r="50" stroke="flex" stroke-width="11" />
                        <text x="50%" y="50%" dy="0.2rem" textAnchor="middle" className="skills-text-prog" fill="#gradient">50%</text>
                    </svg>
                    <svg height="150" width="150">
                       
                        <circle className="circlSkills" cx="60" cy="60" r="50" stroke="flex" stroke-width="11" />
                        <circle className="progcirclSkills" cx="60" cy="60" r="50" stroke="flex" stroke-width="11" />
                        <text x="50%" y="50%" dy="0.2rem" textAnchor="middle" className="skills-text-prog">90%</text>

                    </svg>
                    <svg height="150" width="150">
                        <circle className="circlSkills" cx="60" cy="60" r="50" stroke="flex" stroke-width="11" />
                        <circle className="progcirclSkills" cx="60" cy="60" r="50" stroke="flex" stroke-width="11" />
                        <text x="50%" y="50%" dy="0.2rem" textAnchor="middle" className="skills-text-prog">40%</text>

                    </svg>
                    <svg height="150" width="150">
                        <circle className="circlSkills" cx="60" cy="60" r="50" stroke="flex" stroke-width="11" />
                        <circle className="progcirclSkills" cx="60" cy="60" r="50" stroke="flex" stroke-width="11" />
                        <text x="50%" y="50%" dy="0.2rem" textAnchor="middle" className="skills-text-prog">80%</text>

                   </svg>
                
                
                </div>  {/** end skills-btm */}

            </div>  {/** end skills-container */}
        
        </div>
    )

}

export default Skills; 