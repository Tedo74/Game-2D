
const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

img = new Image();
img.src = '/assets/ufo.svg';    

const canvas1 = document.getElementById('canvas1');
const ctx = canvas1.getContext('2d');
canvas1.width = document.body.clientWidth;
canvas1.height = scrollHeight;
const ufo = document.getElementById('ufo');

let x = canvas1.width * 0.5;
let y = canvas1.height * 0.5;
let speed = 3;

img.onload = function (e) {
  ctx.drawImage(img, x, y);
}

function draw() {
  ctx.clearRect(
    Math.max(x - 10 * speed, 0), 
    Math.max(y - 10 * speed, 0),
    Math.min(x + img.width + 10 * speed, canvas1.width),
    Math.min( y + img.height +10 * speed, canvas1.height)
    );
  ctx.drawImage(img,x,y);
}

function update() {
  window.requestAnimationFrame(draw);
}

function moveUfo(e) {
  if (e.key === '+') {
      speed++;
  }
  if (e.key === '-') {
    speed--;
}

  for (let i = 0; i <= speed; i++) {
    if (e.key === 'ArrowDown' && y+img.height < canvas1.height) {
      y+=1;
    }
    if (e.key === 'ArrowUp' && y > 0) {
      y-=1;
    }
    if (e.key === 'ArrowLeft' && x > 0) {
      x-=1;
    }
    if (e.key === 'ArrowRight' && x+img.width < canvas1.width) {
      x+=1;
    }
  }
}

window.addEventListener('keydown', (e) => {
  moveUfo(e);
});

const interval = setInterval(() => {
  update();
}, 12);