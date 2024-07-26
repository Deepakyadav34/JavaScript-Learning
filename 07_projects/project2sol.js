const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === 0 || isNaN(height) || height < 0) {
    result.innerHTML = `please enter a valid height ${height}`;
  } else if (weight === 0 || isNaN(weight) || weight < 0) {
    result.innerHTML = `please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = bmi;
  }
});
