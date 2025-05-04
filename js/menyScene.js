/* global Phaser */
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Benjamin Abebe
// Created on: Apr 2025
// This file contains the JS functions for index.html

/**
 * This class is the Menu scene
 */
class MenuScene extends Phaser.Scene {
  /**
   * This method is the constructor
   */
  constructor() {
    super({ key: "menuScene"})
  }

  /**
   * Can be defined on your own Scenes. 
   * This method is called by the Scene Manager when the scene starts, 
   * before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.odd() or ScenePlugin.start()
    */
  init(data) {
    this.cameras.main.setBackgroundcolor("ffffff")
  }

  /**
   * Can be defined on your own Scenes. 
   * Use it to load assets
   */
  preload() {
    console.log("Menu Scene")
  }

  /** Can be defined on your own Scenes. 
   * This method is called by the Scene Manager when the scene starts, 
   * before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.odd() or ScenePlugin.start()
    */
  create(data){
    // pass
  }

  /** Should be overridden by your own scenes. 
   * This method is called by the Scene Manager when the scene starts, 
   * before preload() and create().
   * @param {number} time - The current time
   * @param {number} delta - The delta time in ms since the last frame. 
    */
  update(time, delta) {
    // pass
  }
}

export default MenuScene
