import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import img1 from "../assets/img/star.png"
import TypeWriterEffect from 'react-typewriter-effect';


const Home = () => {


  return (

    <div className="home" id="home"> 
      
      <div className="homeOverlay"> </div>
    
      <Header />
      
      <div className="homeContent">

        <div className="left-homCont">

          <h4>Hello every body this is My portofolio </h4>

          < h2 > Hi I'm Sara Darwish
            
            <span className="text-wrterEff" > 

                    <TypeWriterEffect
                        textStyle={{
                          color: 'rgb(255, 108, 16)',
                          display:'inline',
                          // padding: '0.4rem',
                          marginTop:'0.6rem',
                          // fontSize: '4rem',
                        }}
                        startDelay={1000}
                        cursorColor="rgb(255, 108, 16)"
                        multiText={[
                          'Front End Developer',
                          'Back End Developer',
                          'Full Stack Developer',
                          ]}
                        loop={true}
                        multiTextLoop={true}
                        nextTextDelay={1000}
                        typeSpeed={50}
                />
              
              </span>

          </h2>
          
          <span>I have experinace in the web development among 3 years </span>    

          <button   > 
            <span>Let's Contact </span>
            <a href="#" className="svg">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                 <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </a>
            
          </button>
          
        </div>

        <div className="right-homCont">
        
          <img className="starImg" src={img1} alt="img1" /> 
          <div className="blur1" ></div>
          <div className="blur2" ></div>
        </div>



      </div> {/* end homeContent **/}

            
      
               
    </div> /**end home */
    

    )

}

export default Home; 