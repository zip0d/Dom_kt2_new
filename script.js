const sliderContainer = document.querySelector('.slider-container');
const sliderValue = sliderContainer.querySelector('.slider-value');
const sliderTrack = sliderContainer.querySelector('.slider-track');
const sliderThumb = sliderContainer.querySelector('.slider-thumb');

let isDragging = false;

function setPosition(x) {
  const minX = sliderTrack.offsetLeft;
  const maxX = sliderTrack.offsetWidth - sliderThumb.offsetWidth + minX;
  let newX = Math.min(Math.max(x, minX), maxX);
  sliderThumb.style.left = `${newX}px`;
  let value = Math.round((newX - minX) / (maxX - minX) * 100);
  sliderValue.textContent = value;
}

sliderThumb.addEventListener('mousedown', function(event) {
  isDragging = true;
});

document.addEventListener('mousemove', function(event) {
  if (isDragging) {
    setPosition(event.clientX - sliderContainer.offsetLeft);
  }
});

document.addEventListener('mouseup', function(event) {
  isDragging = false;
});