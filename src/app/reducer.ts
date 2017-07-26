import { Action } from '@ngrx/store'
export const RANDOM = 'RANDOM'
export const SHOW = 'SHOW'

export function reducer (state: number = 7, action: Action) :number {
  switch (action.type) {
    case RANDOM: return Math.random()
    default: return state
  }
}

const state = {
  name: String
}

export function showName (state):number {
  return state.name
}
