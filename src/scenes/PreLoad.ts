import * as Phaser from "phaser";

export default class PreLoad extends Phaser.Scene {
  constructor() {
    super("preloader");
  }

  preload() {
    this.load.image("sky", "assets/background/sky.png");
    this.load.image("city-background", "assets/background/city-background.png");
    this.load.image("priest", "assets/characters/priest@128.png");
  }

  create() {
    this.scene.start("level-one");
  }
}
