/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Benjamin Abebe
// Created on: Apr 2025
// This file contains the JS functions for index.html


/**
 * This method is the constructor
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the constructor. 
   */
  constructor() {
    super({ key: "splashScene" })
  }

  /** 
   * Can be defined on your own Scenes. 
   * Use it to create your game objects. 
   *  @param {Object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start(). 
   */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  /**
   * Can be defined on your own Scenes. 
   * Use it to load assets. 
   */
  preload() {
    console.log("Splash Scene")
  }


  create(data) {
    // pass
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running. 
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame. 
   */
  update(time, delta) {
    this.scene.switch("titleScene")
  }
}

export default SplashScene
