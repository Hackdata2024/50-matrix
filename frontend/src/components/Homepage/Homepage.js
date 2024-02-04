import React from 'react';
import "./Homepage.css";
import {Link} from "react-router-dom";

const Homepage = () => {
  return (
    <div className='homepage' >
       <div className="home_content">
        <div className="home_content_head">
          <h1>Welcome to our website !</h1>
        </div>
        <div className="home_content_buttons">
          <Link to={'/disease'} className='buttons_link' >
            Diseases
          </Link>
          <Link to={'/reports'} className='buttons_link' >
            Reports
          </Link>
          <Link to={'/symptoms'} className='buttons_link' >
            Symptoms
          </Link>
        </div>
        </div> 
    </div>
  )
}

export default Homepage