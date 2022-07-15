const drawingArea = document.querySelector('.drawing-area');
const sliderValue = document.querySelector('.slider-value span');
const inputSlider = document.querySelector('input[type="range"]');
const clear = document.querySelector('.clear');
const randomClr = document.querySelector('.random-color');
let backgroundColor = 'black';

//make a grid layout
function makeGrid(values = 16) {
  removeGrid();
  drawingArea.style.display = 'grid';
  drawingArea.style.gridTemplateColumns = `repeat(${values}, 1fr)`;
  drawingArea.style.gridTemplateRows = `repeat(${values}, 1fr)`;
  drawingArea.style.gap = 0;
  let cell;
  for (let i = 1; i <= values * values; i++) {
    cell = document.createElement('div');
    cell.classList.add('divArea');
    cell.style.borderBottom = `1px solid #bdbdbd`;
    cell.style.borderRight = `1px solid #bdbdbd`;
    drawingArea.appendChild(cell);
    cell.addEventListener('mousemove', draw);
  }
}

//add click to draw
function draw(e) {
  e.target.style.background = backgroundColor;
}

//add a slider to choose grid layout
function showSliderPopup() {
  let value = inputSlider.value;
  sliderValue.textContent = value + ' x ' + value;
  sliderValue.style.left = `${value}% `;
  sliderValue.classList.add('show');

  makeGrid(value);
}

function removeSliderPopup() {
  sliderValue.classList.remove('show');
}
function removeGrid() {
  while (drawingArea.firstChild) {
    drawingArea.removeChild(drawingArea.lastChild);
  }
}

//add custom color picker
// Generate Random color
function randomHue() {
  const random = Math.floor(Math.random() * 360) + 1;
  return random;
}
function randomSaturation() {
  const random = Math.floor(Math.random() * 100) + 1;
  return random;
}
function randomLuminance() {
  const random = Math.floor(Math.random() * 100) + 1;
  return random;
}
function generateRandomColor() {
  backgroundColor = `hsl(${randomHue()}, ${randomSaturation()}%, ${randomLuminance()}%)`;
}
console.log(generateRandomColor());
//add grid line toggler button
//add clear button
function clearBoard() {
  let gridCells = drawingArea.querySelectorAll('div');
  gridCells.forEach((gridCell) => (gridCell.style.background = 'white'));
}

const divDraw = document.querySelectorAll('.divArea');
//All event listener

inputSlider.addEventListener('input', showSliderPopup);
clear.addEventListener('click', clearBoard);
randomClr.addEventListener('click', generateRandomColor);
console.log(divDraw);
