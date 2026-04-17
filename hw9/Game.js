"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var api_1 = require("./api");
var Game = /** @class */ (function () {
    function Game(player) {
        this.player = player;
    }
    Game.prototype.start = function () {
        var planetId = 1;
        while (this.player.fuelLevel > 0) {
            try {
                console.log('Travelling to Planet');
                var planet = (0, api_1.getPlanetData)(planetId);
                console.log("Arrived to ".concat(planet.name));
                this.player.travel(planet.distance);
                if (planet.event.type === 'resource') {
                    this.player.addResource(planet.event.resource);
                }
                else if (planet.event.type === 'trader') {
                    console.log('Hi trader!');
                }
                else if (planet.event === null) {
                    console.log('Nothing happaned');
                }
                planetId++;
            }
            catch (error) {
                console.log('Error:', error.message);
                break;
            }
        }
        console.log('GAME OVER');
    };
    return Game;
}());
exports.Game = Game;
