import './index.scss';
import CharacterWalk from './assets/main-character-walk.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const img = document.createElement('img');
const spriteWidth = 48;
const spriteHeight = 48;
const shots = 3;
let cycle = 0;
const characterMove = {
  bottom: false,
  up: false,
  left: false,
  right: false,
};
let pY = canvas.offsetHeight / 2 - spriteHeight / 2;
let pX = canvas.offsetWidth / 2 - spriteWidth / 2;

ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 600, 600);

const keyDownHandler = (e) => {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    characterMove.bottom = true;
  }
  if (e.key === 'Up' || e.key === 'ArrowUp') {
    characterMove.up = true;
  }
  if (e.key === 'Left' || e.key === 'ArrowLeft') {
    characterMove.left = true;
  }
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    characterMove.right = true;
  }
};

const keyUpHandler = (e) => {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    characterMove.bottom = false;
  }
  if (e.key === 'Up' || e.key === 'ArrowUp') {
    characterMove.up = false;
  }
  if (e.key === 'Left' || e.key === 'ArrowLeft') {
    characterMove.left = false;
  }
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    characterMove.right = false;
  }
};

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

img.src = CharacterWalk;
let spritePosY = 0;
const STEP_SIZE = 5;

img.addEventListener('load', () => {
  const step = () => {
    if (characterMove.bottom && pY < 600 - spriteHeight) {
      pY += STEP_SIZE;
      spritePosY = 0;
      cycle = (cycle + 1) % shots;
    }
    if (characterMove.up && pY > 0) {
      pY -= STEP_SIZE;
      spritePosY = spriteHeight * 3;
      cycle = (cycle + 1) % shots;
    }
    if (characterMove.left && pX > 0) {
      pX -= STEP_SIZE;
      spritePosY = spriteHeight;
      cycle = (cycle + 1) % shots;
    }
    if (characterMove.right && pX < 600 - spriteWidth) {
      pX += STEP_SIZE;
      spritePosY = spriteHeight * 2;
      cycle = (cycle + 1) % shots;
    }
    ctx.clearRect(0, 0, 600, 600);
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 600, 600);
    ctx.drawImage(img, cycle * spriteWidth, spritePosY, spriteWidth, spriteHeight, pX, pY, 48, 48);
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
});
