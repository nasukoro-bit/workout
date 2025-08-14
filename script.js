document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');
    const bmrResultH2 = document.getElementById('bmr-result');
    const tdeeResultH2 = document.getElementById('tdee-result');

    // Input fields
    const ageInput = document.getElementById('age');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const activityLevelSelect = document.getElementById('activity-level');

    calculateBtn.addEventListener('click', () => {
        // Get values from inputs
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const age = parseInt(ageInput.value);
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);
        const activityLevel = parseFloat(activityLevelSelect.value);

        // Basic validation
        if (isNaN(age) || age <= 0 || isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
            alert('年齢、身長、体重に有効な数値を入力してください。');
            return;
        }

        // Calculate BMR using Harris-Benedict equation (revised)
        let bmr = 0;
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }
        bmr = Math.round(bmr);

        // Calculate TDEE
        const tdee = Math.round(bmr * activityLevel);

        // Display results
        bmrResultH2.textContent = `${bmr} kcal`;
        tdeeResultH2.textContent = `${tdee} kcal`;
        resultDiv.style.display = 'flex'; // Use flex to align result items
    });
});
