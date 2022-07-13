const drawingArea = document.querySelector('.drawing-area');
const sliderValue = document.querySelector('.slider-value span');
const inputSlider = document.querySelector('input[data-name="grid"]');
let isDrawing = false;

inputSlider.oninput = () => {
  let value = inputSlider.value;

  sliderValue.textContent = value + ' x ' + value;
  sliderValue.style.left = `${value}% `;
  sliderValue.classList.add('show');
};
inputSlider.onblur = () => {
  sliderValue.classList.remove('show');
};
function inputSliderValue() {
  let value = inputSlider.value;

  return value;
}
console.log(inputSliderValue());
inputSlider.addEventListener('input', inputSliderValue);
// inputSlider.addEventListener('mousemove', inputSliderValue);
//make a grid layout
function makeGrid(rows, cols) {
  drawingArea.style.display = 'grid';
  drawingArea.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
  drawingArea.style.gridTemplateRows = `repeat(${cols}, 1fr)`;
  drawingArea.style.gap = 0;
  //drawingArea.style.border = `2px solid red`;
}
makeGrid(16, 16);

function createDivElement(className, num) {
  for (let i = 1; i <= num; i++) {
    let div = document.createElement('div');
    drawingArea.appendChild(div);
    div.classList.add(`${className}`);
    div.style.borderBottom = `1px solid black`;
    div.style.borderRight = `1px solid black`;
    // div.style.border = `1px solid black`;
  }
}
createDivElement('divArea', 256);
const divDraw = document.querySelectorAll('.divArea');

//add click to draw
function draw(e) {
  //if (!isDrawing) return;
  console.log('clicked');
  e.target.style.background = 'black';
}

//divDraw.forEach((div) => div.addEventListener('mousedown', draw));
//divDraw.forEach((div) => div.addEventListener('mousemove', draw));
//add a slider to choose grid layout
//add custom color picker
//add grid line toggler button
//add clear button
