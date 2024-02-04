import React from 'react'
import { Link } from 'react-router-dom'
import "./Disease.css";
import diseases_vid from "../../diseases_vid.gif";


const Disease = () => {
    return (
        <div className="disease">
            <div className="disease_left">
                <h2>Select a Disease</h2>
                <div className="disease_left_content">
                    <Link to={'/symptoms/heart'} className='button' >
                        <span className='button-content' >Heart Diseases</span>
                    </Link>
                    <Link to={'/disease/stroke'} className='button' >
                        <span className='button-content'>Stroke</span>
                    </Link>
                    <Link to={'/disease/arthritis'} className='button' >
                        <span className='button-content'>Arthretis</span>
                    </Link>
                    <Link to={'/disease/osteoporosis'} className='button' >
                        <span className='button-content'>Osteoporosis</span>
                    </Link>
                    <Link to={'/disease/pneumonia'} className='button' >
                        <span className='button-content'>Pneumonia</span>
                    </Link>
                    <Link to={'/symptoms/chest'} className='button' >
                        <span className='button-content'>Cancer</span>
                    </Link>
                    <Link to={'/disease/angina'} className='button' >
                        <span className='button-content'>Angina</span>
                    </Link>
                </div>
            </div>
            <div className="disease_right">
                <img src={diseases_vid} alt="" width={600} height={600} />
            </div>
        </div>
    )
}

export default Disease