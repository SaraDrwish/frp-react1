import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import FontAwesomeIcon from "react-fontawesome";
import FontAwesome  from "react-fontawesome";
//  import { library } from '@fortawesome/fontawesome-svg-core'
//   import { fab } from '@fortawesome/free-brands-svg-icons'
//   import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'



const Home = () => {

  return (

    <div className="home"> 
                <Header />

             {/* <Router>
            
                <Route path="/header" element={ <Header/> }  /> 

            </Router> */}
            
            <h2>Hello this is home page </h2>
            <FontAwesomeIcon icon="fab fa-facebook-square" />
            <FontAwesome icon="fab fa-instagram-square" />
            <FontAwesome icon="fab fa-linkedin" />
              {/* library.add(fab, faCheckSquare, faCoffee) */}
         
      </div>
    )

}

export default Home; 