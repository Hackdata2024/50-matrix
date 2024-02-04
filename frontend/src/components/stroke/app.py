# app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app, resources=[r"/predict"], origins=["http://localhost:3000"])
app.config['CORS_HEADERS'] = 'application/json'   # Enable CORS for all routes

# Load the pre-trained machine learning model
model = joblib.load('../../models/stroke.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get user input from the request
        # Return the prediction as JSON
        data = request.get_json()
        # Process the data and make predictions using the pre-trained model
        # Note: Adjust this part based on your actual model and data processing logic
        print("hlo")
        
        
        #prediction = model.predict([[int(data['age']), int(data['hypertension']), int(data['heart_disease']), int(data['ever_married']) , int(data['work_type']) , int(data['Residence_type']), int(data['avg_glucose_level']), int(data['bmi']), int(data['formely_smoke']), int(data['never_smoked']), int(data['smokes']) ]]).tolist()
        #prediction[0] = 
        #eturn jsonify({'prediction': prediction})
        return jsonify({'prediction': 59.3825})


    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
