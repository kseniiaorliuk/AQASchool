export interface IPlanet {
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

export type ResourceEvent = {
  type: 'resource'
  resource: Resource
}

export type TraderEvent = {
  type: 'trader'
}

export type PlanetEvent = ResourceEvent | TraderEvent | null
