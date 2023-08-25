function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || isNaN(weight)) {
        alert("Please enter valid values for height and weight.");
        return;
    }

    const bmi = weight / (height * height);
    let status;

    if (bmi < 18.5) {
        status = "UNDERWEIGHT";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "NORMAL";
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "OVERWEIGHT";
    } else {
        status = "OBESE";
    }

    const result = `Your BMI is: ${bmi.toFixed(2)}\nStatus: ${status}`;
    alert(result);
}