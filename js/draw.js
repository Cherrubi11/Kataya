const openBtn = document.getElementById('open-drawing-btn');
const closeBtn = document.getElementById('close-drawing-btn');
const popup = document.getElementById('drawing-popup');

openBtn.addEventListener('click', () => popup.classList.remove('hidden'));
closeBtn.addEventListener('click', () => popup.classList.add('hidden'));

// Drawing Logic
const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mouseout', () => drawing = false);

canvas.addEventListener('mousemove', draw);
const colorPicker = document.getElementById('color-picker');

function draw(e) {
  if (!drawing) return;
  ctx.strokeStyle = colorPicker.value;
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

document.getElementById('clear-canvas').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
