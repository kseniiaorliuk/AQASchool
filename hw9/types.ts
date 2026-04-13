interface IPlanet {
  id: number
  name: string
  distance: number
  event: PlanetEvent
}

export interface IPlayer {
  name: string
  fuelLevel: number
  inventory: Resource[]
}

export type Resource = {
  name: string
  value: number
}

type ResourceEvent = {
  type: 'resource'
  resource: Resource
}

type TraderEvent = {
  type: 'trader'
}

type PlanetEvent = ResourceEvent | TraderEvent | null
