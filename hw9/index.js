"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var Game_1 = require("./Game");
var player = new Player_1.Player("Kseniia", 100);
var game = new Game_1.Game(player);
game.start();
