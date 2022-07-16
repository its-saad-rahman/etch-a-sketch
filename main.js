const drawingArea = document.querySelector('.drawing-area');
const sliderValue = document.querySelector('.slider-value span');
const inputSlider = document.querySelector('input[type="range"]');
const clear = document.querySelector('.clear');
const randomClr = document.querySelector('.random-color');
const rainbowClr = document.querySelector('.rainbow-color');
const colorPicker = document.querySelector('#color-picker');

let gridSize = 16;
let backgroundColor = 'black';

//make a grid layout
function makeGrid(values) {
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
  e.target.style.border = backgroundColor;
}

//add a slider to choose grid layout
function showSliderPopup() {
  let gridSize = inputSlider.value;
  sliderValue.textContent = gridSize + ' x ' + gridSize;
  sliderValue.style.left = `${gridSize}% `;
  sliderValue.classList.add('show');

  makeGrid(gridSize);
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
function pickColor() {
  backgroundColor = colorPicker.value;
}
// Generate Random color
function generateRandomColor(e) {
  const hue = Math.floor(Math.random() * 360) + 1;
  const saturation = Math.floor(Math.random() * 100) + 1;
  const luminance = Math.floor(Math.random() * 100) + 1;
  backgroundColor = `hsl(${hue}, ${saturation}%, ${luminance}%)`; //, %
}

//add clear button
function clearBoard() {
  let gridCells = drawingArea.querySelectorAll('div');
  gridCells.forEach((gridCell) => {
    gridCell.style.background = 'white';
    gridCell.style.borderBottom = `1px solid #bdbdbd`;
    gridCell.style.borderRight = `1px solid #bdbdbd`;
  });
}

//Init default grid
makeGrid(gridSize);

//All event listener
inputSlider.addEventListener('input', showSliderPopup);
clear.addEventListener('click', clearBoard);
randomClr.addEventListener('click', generateRandomColor);
colorPicker.addEventListener('input', pickColor);
