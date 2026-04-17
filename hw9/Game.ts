import { Player } from './Player'
import { IPlanet } from './types'
import { getPlanetData } from './api'

export class Game {
  player: Player
  constructor(player: Player) {
    this.player = player
  }

  start(): void {
    let planetId = 1

    while (this.player.fuelLevel > 0) {
      try {
        console.log('Travelling to Planet')
        const planet: IPlanet = getPlanetData(planetId)
        console.log(`Arrived to ${planet.name}`)
        this.player.travel(planet.distance)

        if (planet.event.type === 'resource') {
          this.player.addResource(planet.event.resource)
        } else if (planet.event.type === 'trader') {
          console.log('Hi trader!')
        } else if (planet.event.type === null) {
          console.log('Nothing happaned')
        }
      } catch (error) {
        console.log('Error')
        break
      }
    }
    console.log('GAME OVER')
  }
}
