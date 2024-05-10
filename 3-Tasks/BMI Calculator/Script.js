function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var feet = parseFloat(document.getElementById("feet").value);
    var inches = parseFloat(document.getElementById("inches").value);

    if (isNaN(weight) || isNaN(feet) || isNaN(inches) || weight <= 0 || feet <= 0 || inches < 0 || inches >= 12) {
        document.getElementById("result").textContent = "Please enter valid weight and height!";
        return;
    }

    var totalHeight = (feet * 12) + inches; // Convert height to inches
    var heightInMeters = totalHeight * 0.0254; // Convert height to meters

    var bmi = weight / (heightInMeters * heightInMeters);
    var category = "";
    var recommendation = "";

    if (bmi < 18.5) {
        category = "Underweight";
        recommendation = "Recommendations for underweight: Increase calorie intake with nutrient-rich foods, focus on strength training exercises, and consult a healthcare professional for personalized guidance.";
        healthRisk = "Potential health risks: Nutrient deficiencies, weakened immune system, and osteoporosis.";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
        recommendation = "You are in the normal weight range. Maintain a balanced diet and regular exercise routine to stay healthy.";
        healthRisk = "You are at lower risk for weight-related health issues.";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
        recommendation = "Recommendations for overweight: Reduce calorie intake, increase physical activity, avoid processed foods and sugary drinks, and consult a healthcare professional for personalized weight management strategies.";
        healthRisk = "Potential health risks: Type 2 diabetes, high blood pressure and heart disease.";
    } else {
        category = "Obese";
        recommendation = "Recommendations for obesity: Seek professional medical advice for comprehensive weight management strategies, including dietary changes, regular exercise, and potential medical interventions.";
        healthRisk = "Potential health risks: Severe cardiovascular diseases, stroke, and certain cancers.";
    }

    document.getElementById("result").innerHTML = "Your BMI: " + bmi.toFixed(2) + " (" + category + ")";
    document.getElementById("recommendation").innerHTML = recommendation + "<br><br>" + healthRisk;
}
