import * as Phaser from "phaser";

export default class LevelOne extends Phaser.Scene {
  constructor() {
    super("level-one");
  }

  preload() {}

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    this.add.tileSprite(width * 0.5, height * 0.5, width, height, "sky");
    this.add.tileSprite(width, height * 0.5, 0, 0, "city-background");
    const priest = this.physics.add.sprite(width * 0.5, height * 0.5, "priest");

    const body = priest.body as Phaser.Physics.Arcade.Body;
    body.setCollideWorldBounds(true);

    this.physics.world.setBounds(0, 0, Number.MAX_SAFE_INTEGER, height - 30);
  }
}
