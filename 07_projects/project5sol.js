const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
    console.log(color);
  }
  return color;
};

// console.log(randomColor());
let startInt;
function startColor() {
  startInt = setInterval(function () {
    document.body.style.backgroundColor = randomColor();
  }, 1000);
}

document.querySelector('#start').addEventListener('click', startColor);

function stopColor() {
  clearInterval(startInt);
  startInt = null;
}

document.querySelector('#stop').addEventListener('click', stopColor);
