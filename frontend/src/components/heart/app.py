# app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app, resources=[r"/heartpredict"], origins=["http://localhost:3000"])
app.config['CORS_HEADERS'] = 'application/json'   # Enable CORS for all routes

# Load the pre-trained machine learning model
model = joblib.load('../../models/heart.joblib')

@app.route('/heartpredict', methods=['POST'])
def predict():
    try:
        # Get user input from the request
        # Return the prediction as JSON
        data = request.get_json()
        # Process the data and make predictions using the pre-trained model
        # Note: Adjust this part based on your actual model and data processing logic
        print("hlo")
        
        
        prediction = model.predict([[int(data['Age']), int(data['Gender']), int(data['AirPollution']), int(data['Alcoholuse']) , int(data['DustAllergy']) , int(data['OccuPationalHazards']), int(data['GeneticRisk']), int(data['BalancedDiet']), int(data['Obesity']),int(data['Smoking']), int(data['PassiveSmoker']), int(data['ChestPain']), int(data['CoughingofBlood']) , int(data['Fatigue']) , int(data[ 'WeightLoss']), int(data['ShortnessofBreath']), int(data['Wheezing']), int(data['SwallowingDifficulty']) , int(data[ 'ClubbingofFingerNails']), int(data['Wheezing']), int(data['FrequentCold']) , int(data['DryCough']), int(data['Snoring']) ]]).tolist()
        prediction*=1000
        return jsonify({'prediction': prediction})


    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
