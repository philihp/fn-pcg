import { createPcg32, randomInt } from 'pcg'
import { curry } from 'ramda'

export type PCGState = any

// normally you'd want this to internally increment itself, but since this is
// meant to be functional and pure, this is kept constant.
// see https://www.pcg-random.org/posts/critiquing-pcg-streams.html
const PCGSequence = 12345

export const newRandGen = (seed: number, sequence = PCGSequence): PCGState => createPcg32({}, seed, sequence)

export const randNext = (state: PCGState): [number, PCGState] => randomInt(0, 2 ** 32 - 1, state)

export const randRange = curry((min: number, max: number, state: PCGState): [number, PCGState] =>
  randomInt(min, max, state)
)
