import React from 'react';
import "./Symptoms.css";
import { Link } from 'react-router-dom';

const Symptoms = () => {
  return (
    <div className="symptomspage">
        <h1>Select the body part</h1>
        <div className="selection">
            <Link to={'/disease/stroke'} className='button-symptoms' >
                <span className='button-content-symptoms'>Head</span>
            </Link>
            <Link to={'/symptoms/chest'} className='button-symptoms' >
                <span className='button-content-symptoms'>Chest</span>
            </Link>
            <Link to={'/symptoms/heart'} className='button-symptoms' >
                <span className='button-content-symptoms'>Heart</span>
            </Link>
            <Link to={'/symptoms/bone'} className='button-symptoms' >
                <span className='button-content-symptoms'>Bone</span>
            </Link>
            <Link to={'/symptoms/abdomen'} className='button-symptoms' >
                <span className='button-content-symptoms'>Abdomen</span>
            </Link>
            
        </div>
    </div>
  )
}

export default Symptoms