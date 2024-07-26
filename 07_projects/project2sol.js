const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === 0 || height < 0 || isNaN(height)) {
    result.innerHTML = `Please Enter a valid height ${height} `;
  } else if (weight === 0 || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please Enter a valid weight ${weight} `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = `Your BMI is : ${bmi} and You are Under Weight`;
    } else if (18.6 < bmi && bmi<24.9) {
      result.innerHTML = `Your BMI is : ${bmi} and You are in Normal Range`;
    } else {
      result.innerHTML = ` Your BMI is: ${bmi} and You are Overweight `;
    }
  }
});
