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
})
