import React, { useState } from 'react'
import axios from 'axios'
import "./Heart.css"

const Heart = () => {


    const [formData, setFormData] = useState({
        Age: '',
        Gender: '',
        AirPollution: '',
        Alcoholuse: '',
        DustAllergy: '',
        OccuPationalHazards: '',
        GeneticRisk: '',
        chronicLungDisease: '',
        BalancedDiet: '',
        Obesity: '',
        Smoking: '',
        PassiveSmoker: '',
        ChestPain: '',
        CoughingofBlood: '',
        Fatigue: '',
        WeightLoss: '',
        ShortnessofBreath: '',
        Wheezing: '',
        SwallowingDifficulty: '',
        ClubbingofFingerNails: '',
        FrequentCold: '',
        DryCough: '',
        Snoring: ''
    });

    const [prediction, setPrediction] = useState(null);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send user input to the backend API
            const response = await axios.post('http://localhost:5000/heartpredict', formData);

            // Update the state with the prediction from the backend
            console.log(response);
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    return (
        <div className="heartpage">
            <div className="heartpage_head">
                Heart Diseases
            </div>
            <form className='stroke_form' onSubmit={handleFormSubmit} >

                <div className='stroke_input'>
                    <label>What is your Age?</label>
                    <input type="integer" name="Age" onChange={handleInputChange} value={formData.Age} />
                </div>
                <div className='stroke_input'>
                    <label>Enter you gender?</label>
                    <input type="integer" name="Gender" onChange={handleInputChange} value={formData.Gender} />
                </div>
                <div className='stroke_input'>
                    <label>What is AirPollution?</label>
                    <input type="integer" name="AirPollution" onChange={handleInputChange} value={formData.AirPollution} />
                </div>
                <div className='stroke_input'>
                    <label>What is your Alcoholuse?</label>
                    <input type="integer" name="Alcoholuse" onChange={handleInputChange} value={formData.Alcoholuse} />
                </div>
                <div className='stroke_input'>
                    <label>Do you have any DustAllergy?</label>
                    <input type="integer" name="DustAllergy" onChange={handleInputChange} value={formData.DustAllergy} />
                </div>
                <div className='stroke_input'>
                    <label>What is OccuPationalHazards?</label>
                    <input type="integer" name="OccuPationalHazards" onChange={handleInputChange} value={formData.OccuPationalHazards} />
                </div>
                <div className='stroke_input'>
                    <label>What is your GeneticRisk?</label>
                    <input type="integer" name="GeneticRisk" onChange={handleInputChange} value={formData.GeneticRisk} />
                </div>
                <div className='stroke_input'>
                    <label>do you have any chronicLungDisease?</label>
                    <input type="integer" name="chronicLungDisease" onChange={handleInputChange} value={formData.chronicLungDisease} />
                </div>
                <div className='stroke_input'>
                    <label>do you have a balanced diet?</label>
                    <input type="integer" name="BalancedDiet" onChange={handleInputChange} value={formData.BalancedDiet} />
                </div>
                <div className='stroke_input'>
                    <label>Are you obese?</label>
                    <input type="integer" name="Obesity" onChange={handleInputChange} value={formData.Obesity} />
                </div>
                <div className='stroke_input'>
                    <label>What is your Age?</label>
                    <input type="integer" name="Smoking" onChange={handleInputChange} value={formData.Smoking} />
                </div>
                <div className='stroke_input'>
                    <label>What is your Age?</label>
                    <input type="integer" name="PassiveSmoker" onChange={handleInputChange} value={formData.PassiveSmoker} />
                </div>
                <div className='stroke_input'>
                    <label>What is your Age?</label>
                    <input type="integer" name="ChestPain" onChange={handleInputChange} value={formData.ChestPain} />
                </div>
                <div className='stroke_input'>
                    <label>What is your Age?</label>
                    <input type="integer" name="CoughingofBlood" onChange={handleInputChange} value={formData.CoughingofBlood} />
                </div>
                <div className='stroke_input'>
                    <label>What is your Age?</label>
                    <input type="integer" name="Fatigue" onChange={handleInputChange} value={formData.Fatigue} />
                </div>
                <div className='stroke_input'>
                    <label>What is your Age?</label>
                    <input type="integer" name="WeightLoss" onChange={handleInputChange} value={formData.WeightLoss} />
                </div>
                <div className='stroke_input'>
                    <label>What is your Age?</label>
                    <input type="integer" name="ShortnessofBreath" onChange={handleInputChange} value={formData.ShortnessofBreath} />
                </div>
                <div className='stroke_input'>
                    <label>What is your Age?</label>
                    <input type="integer" name="CoughingofBlood" onChange={handleInputChange} value={formData.CoughingofBlood} />
                </div>
                <div className='stroke_input'>
                    <label>What is your Age?</label>
                    <input type="integer" name="Wheezing" onChange={handleInputChange} value={formData.Wheezing} />
                </div>
                <div className='stroke_input'>
                    <label>What is your Age?</label>
                    <input type="integer" name="SwallowingDifficulty" onChange={handleInputChange} value={formData.SwallowingDifficulty} />
                </div>
                <div className='stroke_input'>
                    <label>What is your Age?</label>
                    <input type="integer" name="ClubbingofFingerNails" onChange={handleInputChange} value={formData.ClubbingofFingerNails} />
                </div>
                <div className='stroke_input'>
                    <label>What is your Age?</label>
                    <input type="integer" name="FrequentCold" onChange={handleInputChange} value={formData.FrequentCold} />
                </div>
                <div className='stroke_input'>
                    <label>What is your Age?</label>
                    <input type="integer" name="DryCough" onChange={handleInputChange} value={formData.DryCough} />
                </div>
                <div className='stroke_input'>
                    <label>What is your Age?</label>
                    <input type="integer" name="Snoring" onChange={handleInputChange} value={formData.Snoring} />
                </div>

                <button type="submit" className='button-stroke' ><span className="button-content-stroke" >Predict</span></button>

            </form>

            {prediction && (
                <div>
                    <h2>Prediction Result</h2>
                    <p>{`The model predicts: ${prediction}`}</p>
                </div>
            )}
        </div>
    )
}

export default Heart