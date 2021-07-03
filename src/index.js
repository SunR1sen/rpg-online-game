import './index.scss';
import CharacterWalk from './assets/main-character-walk.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const img = document.createElement('img');
const spriteWidth = 48;
const spriteHeight = 48;
const shots = 3;
let cycle = 0;
let bottomPressed = false;
let pY = 0;

const keyDownHandler = (e) => {
    console.log(e);
    if (e.key === "Down" || e.key === "ArrowDown") {
        bottomPressed = true;
    }
};

const keyUpHandler = (e) => {
    console.log(e);
    if (e.key === "Down" || e.key === "ArrowDown") {
        bottomPressed = false;
    }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);


img.src = CharacterWalk;

img.addEventListener("load", () => {
    setInterval(() => {
        if (bottomPressed) {
            pY += 10;
            cycle = (cycle + 1) % shots;
        }
        ctx.clearRect(0, 0, 600, 600);
        ctx.drawImage(img, cycle * spriteWidth, 0, spriteWidth, spriteHeight, 0, pY, 100, 100);
    }, 120)
})

