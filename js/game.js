/* global Phaser */
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Benjamin Abebe
// Created on: Apr 2025
// This file contains the JS functions for index.html

// scene import statements
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"


// create the new scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()



const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
// console.log(game)

// load scenes
game.scene.add('splashscene', splashScene)
game.scene.add('titlescene', titleScene)

// start title
game.scene.start('splashscene')
