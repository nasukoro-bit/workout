document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');
    const bmrResultH2 = document.getElementById('bmr-result');
    const tdeeResultH2 = document.getElementById('tdee-result');
    const goalResultDiv = document.getElementById('goal-result');
    const targetCalorieResultH2 = document.getElementById('target-calorie-result');

    // Input fields
    const ageInput = document.getElementById('age');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const activityLevelSelect = document.getElementById('activity-level');
    const goalSelect = document.getElementById('goal');

    calculateBtn.addEventListener('click', () => {
        // Get values from inputs
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const age = parseInt(ageInput.value);
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);
        const activityLevel = parseFloat(activityLevelSelect.value);
        const goal = goalSelect.value;

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

        // Calculate Target Calories
        let targetCalories = tdee;
        switch (goal) {
            case 'loss_hard':
                targetCalories -= 500;
                break;
            case 'loss_mild':
                targetCalories -= 250;
                break;
            case 'gain_mild':
                targetCalories += 250;
                break;
            case 'gain_hard':
                targetCalories += 500;
                break;
            // case 'maintenance':
            //     break; // do nothing
        }

        // Display results
        bmrResultH2.textContent = `${bmr} kcal`;
        tdeeResultH2.textContent = `${tdee} kcal`;
        resultDiv.style.display = 'flex'; // Use flex to align result items

        targetCalorieResultH2.textContent = `${targetCalories} kcal`;
        goalResultDiv.style.display = 'flex';
    });
});
