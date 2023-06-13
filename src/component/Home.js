import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import img1 from "../assets/img/star.png"


const Home = () => {

  return (

    <div className="home"> 
      <Header />
      
      <div className="homeContent">

        <div className="left-homCont">
          <h4>Hello every body this is My portofolio </h4>
          <h2>Hi I am Sara Darwish </h2>
          <h2>Front End Devoloper</h2>
          <h3>I have experinace in the web development among 3 years </h3>
          <button > 
            <span>Let's Contact </span>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </button>
          
        </div>

         <div className="right-homCont">
            <img  src={img1}   alt="img1" /> 
        </div>



      </div> {/* end homeContent **/}

            
      
               
    </div> /**end home */
    

    )

}

export default Home; 