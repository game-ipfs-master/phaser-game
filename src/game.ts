import * as Phaser from "phaser";
import LevelOne from "./scenes/LevelOne";
import PreLoad from "./scenes/PreLoad";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: "#000",
  width: 1366,
  height: 768,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 },
    },
  },
  scene: [PreLoad, LevelOne],
};

const game = new Phaser.Game(config);
