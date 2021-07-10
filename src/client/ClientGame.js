import ClientEngine from './ClientEngine';
import sprites from '../config/sprites';
import ClientWorld from './ClientWorld';
import levelCfg from '../config/world.json';

class ClientGame {
  constructor(cfg) {
    Object.assign(this, {
      cfg,
    });

    this.engine = this.createEngine();
    this.world = this.createWorld();
    this.initEngine();
  }

  createWorld() {
    return new ClientWorld(this, this.engine, levelCfg);
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId));
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
      this.engine.on('render', (_, time) => {
        this.world.init();
      });
      this.engine.start();
    });
  }

  static init(cfg) {
    if (!ClientGame.game) {
      ClientGame.game = new ClientGame(cfg);
    }
  }
}

export default ClientGame;
