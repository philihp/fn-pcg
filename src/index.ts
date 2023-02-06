// // PCG-XSH-RR
const mask = 0xffffffffffffffffn
const increment = 1442695040888963407n
const multiplier = 63641362238467932305n

const rotr32 = (x: bigint, r: bigint) => (x >> r) | (x << (-r & 31n))

export type PCGState = bigint

export const newRandGen = (seed: number): PCGState => {
  return BigInt.asUintN(64, BigInt(seed) + increment)
}

export const randNext = (state: PCGState): [number, PCGState] => [
  Number(BigInt.asUintN(32, rotr32((state ^ (state >> 18n)) >> 27n, state >> 59n))),
  (state * multiplier + increment) & mask,
]

export const randRange = (min: number, max: number, state: PCGState): [number, PCGState] => {
  const [n, newState] = randNext(state)
  const range = max - min
  return [(n % range) + min, newState]
}
