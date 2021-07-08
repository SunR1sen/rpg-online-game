import './index.scss';
import ClientGame from './client/ClientGame';
// import characterWalk from './assets/main-character-walk.png';
// import worldCfg from './config/world.json';
// import terrainAtlas from './assets/terrain.png';
// import sprites from './config/sprites';

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});

// const canvas = document.getElementById('game');
// const ctx = canvas.getContext('2d');
//
// const terrain = document.createElement('img');
// terrain.src = terrainAtlas;
//
// terrain.addEventListener("load", () => {
//     const {map} = worldCfg;
//     map.forEach((rowCfg, y) => {
//         rowCfg.forEach((cellCfg, x) => {
//             const [sX, sY, sW, sH] = sprites.terrain[cellCfg[0]].frames[0];
//             ctx.drawImage(terrain, sX, sY, sW, sH,
//                 x * spriteWidth, y * spriteHeight, spriteWidth, spriteHeight);
//         })
//     })
// })
//
// const characterImg = document.createElement('img');
// const spriteWidth = 48;
// const spriteHeight = 48;
// const shots = 3;
// let cycle = 0;
// const characterMove = {
//     bottom: false,
//     up: false,
//     left: false,
//     right: false,
// };
// let pY = canvas.offsetHeight / 2 - spriteHeight / 2;
// let pX = canvas.offsetWidth / 2 - spriteWidth / 2;
//
// const keyDownHandler = (e) => {
//     if (e.key === 'Down' || e.key === 'ArrowDown') {
//         characterMove.bottom = true;
//     }
//     if (e.key === 'Up' || e.key === 'ArrowUp') {
//         characterMove.up = true;
//     }
//     if (e.key === 'Left' || e.key === 'ArrowLeft') {
//         characterMove.left = true;
//     }
//     if (e.key === 'Right' || e.key === 'ArrowRight') {
//         characterMove.right = true;
//     }
// };
//
// const keyUpHandler = (e) => {
//     if (e.key === 'Down' || e.key === 'ArrowDown') {
//         characterMove.bottom = false;
//     }
//     if (e.key === 'Up' || e.key === 'ArrowUp') {
//         characterMove.up = false;
//     }
//     if (e.key === 'Left' || e.key === 'ArrowLeft') {
//         characterMove.left = false;
//     }
//     if (e.key === 'Right' || e.key === 'ArrowRight') {
//         characterMove.right = false;
//     }
// };
//
// document.addEventListener('keydown', keyDownHandler);
// document.addEventListener('keyup', keyUpHandler);

// characterImg.src = characterWalk;
// let spritePosY = 0;
// const STEP_SIZE = 5;

// characterImg.addEventListener('load', () => {
//     const walk = () => {
//         if (characterMove.bottom && pY < canvas.offsetHeight - spriteHeight) {
//             pY += STEP_SIZE;
//             spritePosY = 0; // back side
//             cycle = (cycle + 1) % shots;
//         }
//         if (characterMove.up && pY > 0) {
//             pY -= STEP_SIZE;
//             spritePosY = spriteHeight * 3; // front side
//             cycle = (cycle + 1) % shots;
//         }
//         if (characterMove.left && pX > 0) {
//             pX -= STEP_SIZE;
//             spritePosY = spriteHeight; // left side
//             cycle = (cycle + 1) % shots;
//         }
//         if (characterMove.right && pX < canvas.offsetWidth - spriteWidth) {
//             pX += STEP_SIZE;
//             spritePosY = spriteHeight * 2; // right side
//             cycle = (cycle + 1) % shots;
//         }
//         ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
//         ctx.drawImage(characterImg, cycle * spriteWidth,
//         spritePosY, spriteWidth, spriteHeight, pX, pY, 48, 48);
//         window.requestAnimationFrame(walk);
//     };
//     window.requestAnimationFrame(walk);
// });
