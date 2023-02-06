import { createPcg32, randomInt } from 'pcg'

export type PCGState = number

export const newRandGen = (seed: number, stream = 1): PCGState => createPcg32({}, seed, stream)

export const randNext = (state: PCGState): [number, PCGState] => randomInt(0, 2 ** 32 - 1, state)

export const randRange = (min: number, max: number, state: PCGState): [number, PCGState] => randomInt(min, max, state)
