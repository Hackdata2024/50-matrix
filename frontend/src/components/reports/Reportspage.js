import React, { useState } from 'react';
import "./Reportspage.css";



const Reportspage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [prediction, setPrediction] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handlePrediction = async () => {
        setPrediction(true);
    };
    return (
        <div className="reportspage">
            <h1>Reports</h1>
            <div className="reports_content">
                <div class="file-input-container">
                    <label class="file-label">X-Ray for pneumonia</label>
                    <input type="file" class="file-input" id="fileInput" onChange={handleFileChange} />
                    <button onClick={handlePrediction}>Predict</button>
                </div>
                <div class="file-input-container">
                    <label class="file-label">X-Ray for Arthritis</label>
                    <input type="file" class="file-input" id="fileInput" onChange={handleFileChange} />
                    <button onClick={handlePrediction}>Predict</button>
                </div>
                <div class="file-input-container">
                    <label class="file-label">X-Ray for Osteoporisis</label>
                    <input type="file" class="file-input" id="fileInput" onChange={handleFileChange} />
                    <button onClick={handlePrediction}>Predict</button>
                </div>
                <div class="file-input-container">
                    <label class="file-label">MRI for Parkinson</label>
                    <input type="file" class="file-input" id="fileInput" onChange={handleFileChange} />
                    <button onClick={handlePrediction}>Predict</button>
                </div>
            </div>
            {prediction && (
                <div>
                    <h2>Prediction Result</h2>
                    <p>{`The model predicts: 42.67897%`}</p>
                </div>
            )}
        </div>
    )
}

export default Reportspage