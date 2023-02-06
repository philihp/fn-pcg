import { newRandGen, randNext, randRange } from '..'

describe('tests', () => {
  it('passes expectations from demo script', () => {
    expect.assertions(3)
    const gen = newRandGen(42)

    const [n1, gen1] = randNext(gen)
    const [n2, gen2] = randNext(gen1)
    const [n3] = randNext(gen2)

    // same generator generate same number
    const [n4, gen4] = randNext(gen2)

    expect(n3).toBe(n4)

    // ranged int
    const [n5] = randRange(0, 6, gen4)

    expect(n5).toBeGreaterThanOrEqual(0)
    expect(n5).toBeLessThan(6)
  })

  it('uses the same sequence/stream ID if not specified', () => {
    expect.assertions(2)
    const s1 = newRandGen(42)
    const s2 = newRandGen(42)
    const s3 = newRandGen(42)
    expect(s1).toStrictEqual(s2)
    expect(s2).toStrictEqual(s3)
  })

  it('states are the same if stream ID is specified', () => {
    expect.assertions(2)
    const s1 = newRandGen(42, 1)
    const s2 = newRandGen(42, 1)
    const s3 = newRandGen(42, 1)
    expect(s1).toStrictEqual(s2)
    expect(s2).toStrictEqual(s3)
  })

  it('returns numbers within range', () => {
    expect.assertions(20000)
    let gen = newRandGen(42)

    for (let i = 0; i < 10000; i++) {
      const [rand, gen2] = randRange(70, 100, gen)
      expect(rand).toBeLessThan(100)
      expect(rand).toBeGreaterThanOrEqual(70)
      gen = gen2
    }
  })

  it('range can have negative numbers', () => {
    expect.assertions(20000)
    let gen = newRandGen(42)

    for (let i = 0; i < 10000; i++) {
      const [rand, gen2] = randRange(-1000, 1000, gen)
      expect(rand).toBeLessThan(1000)
      expect(rand).toBeGreaterThanOrEqual(-1000)
      gen = gen2
    }
  })

  it('returns random numbers', () => {
    expect.assertions(2)
    const gen0 = newRandGen(12345)
    const [n1, gen1] = randNext(gen0)
    const [n2, gen2] = randNext(gen1)
    const [n3] = randNext(gen2)
    expect(n1).not.toStrictEqual(n2)
    expect(n2).not.toStrictEqual(n3)
  })
})
