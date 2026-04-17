import { IPlanet } from './types'

export function getPlanetData(id: number): IPlanet {
  // Stub implementation
  return {
    id,
    name: `Planet ${id}`,
    distance: 10,
    event: null,
  }
}
