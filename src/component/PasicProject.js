import React from 'react'
import { Link , Outlet} from "react-router-dom";


function PasicProject() {
  return (
    <div className='PasicProject'>
      <h2>HTML & CSS ProJects</h2>
                  <Outlet/>

    </div>
    
  )
}

export default PasicProject
