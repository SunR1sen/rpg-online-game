import ClientEngine from './ClientEngine';
import sprites from '../config/sprites';
import ClientWorld from './ClientWorld';
import levelCfg from '../config/world.json';
import gameObjects from '../config/gameObjects.json';
import ClientCell from './ClientCell';

class ClientGame {
  constructor(cfg) {
    Object.assign(this, {
      cfg,
      gameObjects,
      player: null,
    });

    this.engine = this.createEngine();
    this.world = this.createWorld();
    this.initEngine();
  }

  setPlayer(player) {
    this.player = player;
  }

  createWorld() {
    return new ClientWorld(this, this.engine, levelCfg);
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId));
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
      this.world.init();
      this.engine.on('render', (_, time) => {
        this.world.render(time);
      });
      this.engine.start();
      this.initKeys();
    });
  }

  initKeys() {
    this.engine.input.onKey({
      ArrowLeft: (keydown) => this.makeStepTo('left', keydown),
      ArrowRight: (keydown) => this.makeStepTo('right', keydown),
      ArrowUp: (keydown) => this.makeStepTo('up', keydown),
      ArrowDown: (keydown) => this.makeStepTo('down', keydown),
    });
  }

  makeStepTo(direction, keydown) {
    if (keydown) {
      let changeColumn = 0;
      let changeRow = 0;
      switch (direction) {
        case 'left':
          changeColumn = -1;
          break;

        case 'right':
          changeColumn = 1;
          break;

        case 'up':
          changeRow = -1;
          break;

        case 'down':
          changeRow = 1;
          break;

        default:
          return;
      }
      this.player.moveByCellCoord(changeColumn, changeRow, ClientCell.cellIsGrass);
    }
  }

  static init(cfg) {
    if (!ClientGame.game) {
      ClientGame.game = new ClientGame(cfg);
    }
  }
}

export default ClientGame;
