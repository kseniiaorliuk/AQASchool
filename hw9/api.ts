import { IPlanet, PlanetEvent } from './types'

function generateEvent(): PlanetEvent {
  const rand = Math.random()

  if (rand < 0.3) {
    return {
      type: 'resource',
      resource: {
        name: 'Gold',
        value: Math.floor(Math.random() * 100),
      },
    }
  }

  if (rand < 0.7) {
    return {
      type: 'trader',
    }
  }

  return null
}
