# app.py
from tensorflow import keras
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from PIL import Image
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from io import BytesIO

app = Flask(__name__)
CORS(app)

# Load your machine learning model (adjust the path accordingly)
model = load_model('../../models/Osteoporosis.joblib')

# Function to preprocess the image before making predictions
def preprocess_image(img):
    img = img.resize((224, 224))  # Resize image to match model's expected sizing
    img_array = image.img_to_array(img)  # Convert to numpy array
    img_array = np.expand_dims(img_array, axis=0)  # Expand the shape from (224, 224, 3) to (1, 224, 224, 3)
    return img_array

@app.route('/predict', methods=['POST'])
def predict():
    try:
        if 'file' not in request.files:
            return jsonify({'error': 'No file part'})

        file = request.files['file']
        
        if file.filename == '':
            return jsonify({'error': 'No selected file'})

        # Ensure the file is a valid image file
        allowed_extensions = {'png', 'jpg', 'jpeg', 'gif'}
        if '.' in file.filename and file.filename.rsplit('.', 1)[1].lower() in allowed_extensions:
            # Read the image file
            img = Image.open(file.stream)
            
            # Preprocess the image
            img_array = preprocess_image(img)
            
            # Make predictions using the loaded model
            prediction = model.predict(img_array)
            
            # Assuming a binary classification example
            result = 'Positive' if prediction[0][0] > 0.5 else 'Negative'
            
            return jsonify({'prediction': result})
        else:
            return jsonify({'error': 'Invalid file format'})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
