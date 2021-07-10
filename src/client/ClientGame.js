import ClientEngine from './ClientEngine';
import sprites from '../config/sprites';

class ClientGame {
  constructor(cfg) {
    Object.assign(this, {
      cfg,
    });

    this.engine = this.createEngine();
    this.initEngine();
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId));
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
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
