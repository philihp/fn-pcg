// // PCG-XSH-RR
const mask = 0xffffffffffffffffn
const increment = 1442695040888963407n
const multiplier = 63641362238467932305n

const rotr32 = (x: bigint, r: bigint) => (x >> r) | (x << (-r & 31n))

export type RandGen = bigint

export const newRandGen = (seed: number): RandGen => {
  return BigInt(seed) + increment
}

export const randNext = (state: RandGen): [number, RandGen] => [
  Number(rotr32((state ^ (state >> 18n)) >> 27n, state >> 59n)),
  (state * multiplier + increment) & mask,
]

export const randRange = (min: number, sup_: number, state: RandGen): [number, RandGen] => {
  const sup = sup_ - min
  if (!(sup > 0 && sup < 0x100000000)) {
    const [n, newState] = randNext(state)
    return [n + min, newState]
  }
  if ((sup & (~sup + 1)) === sup) {
    const [n, newState] = randNext(state)
    return [((sup - 1) & n) + min, newState]
  }
  let [n, newState] = randNext(state)
  while (sup > 4294967296 - (n - (n %= sup))) {
    const [n_, newState_] = randNext(newState)
    n = n_
    newState = newState_
  }
  return [n + min, newState]
}
