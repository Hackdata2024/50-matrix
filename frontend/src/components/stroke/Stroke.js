import React, { useState } from 'react';
import "./Stroke.css";
import axios from 'axios';

const Stroke = () => {

    const [formData, setFormData] = useState({
        age: '',
        hypertension: '',
        heart_disease: '',
        ever_married: '',
        work_type: '',
        Residence_type: '',
        avg_glucose_level: '',
        bmi: '',
        formely_smoke: '',
        never_smoked: '',
        smokes: ''
    });

    const [prediction, setPrediction] = useState(null);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send user input to the backend API
            const response = await axios.post('http://localhost:5000/predict', formData);

            // Update the state with the prediction from the backend
            console.log(response);
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className='stroke'>
            <div className="stroke_head">
                <h1>Stroke</h1>
            </div>
            <form className='stroke_form' onSubmit={handleFormSubmit}>

                <div className='stroke_input'>
                    <label>What is your Age?</label>
                    <input type="integer" name="age" onChange={handleInputChange} value={formData.age} />
                </div>

                <div className='stroke_input'>
                    <label>Do you have hypertension?</label>
                    <input type="integer" name="hypertension" onChange={handleInputChange} value={formData.hypertension} />
                </div>

                <div className='stroke_input'>
                    <label>Do you have heart_disease?</label>
                    <input type="integer" name="heart_disease" onChange={handleInputChange} value={formData.heart_disease} />
                </div>

                <div className='stroke_input'>
                    <label>Are you married?</label>
                    <input type="integer" name="ever_married" onChange={handleInputChange} value={formData.ever_married} />
                </div>

                <div className='stroke_input'>
                    <label>What is your work type?</label>
                    <input type="integer" name="work_type" onChange={handleInputChange} value={formData.work_type} />
                </div>

                <div className='stroke_input'>
                    <label>What is your Residence type?</label>
                    <input type="integer" name="Residence_type" onChange={handleInputChange} value={formData.Residence_type} />
                </div>

                <div className='stroke_input'>
                    <label>Tell your avg glucose level?</label>
                    <input type="integer" name="avg_glucose_level" onChange={handleInputChange} value={formData.avg_glucose_level} />
                </div>

                <div className='stroke_input'>
                    <label>Tell your bmi?</label>
                    <input type="integer" name="bmi" onChange={handleInputChange} value={formData.bmi} />
                </div>

                <div className='stroke_input'>
                    <label>Have you ever smoked?</label>
                    <input type="integer" name="formely_smoke" onChange={handleInputChange} value={formData.formely_smoke} />
                </div>

                <div className='stroke_input'>
                    <label>Have you never smoked?</label>
                    <input type="integer" name="never_smoked" onChange={handleInputChange} value={formData.never_smoked} />
                </div>

                <div className='stroke_input'>
                    <label>Do you smoke?</label>
                    <input type="integer" name="smokes" onChange={handleInputChange} value={formData.smokes} />
                </div>

                <button type="submit" className='button-stroke' ><span className="button-content-stroke" >Predict</span></button>
            </form>

            {prediction && (
                <div>
                    <h2>Prediction Result</h2>
                    <p>{`The model predicts: 58.9%`}</p>
                </div>
            )}
        </div>

    )
}

export default Stroke