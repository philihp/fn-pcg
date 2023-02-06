[![Version](https://img.shields.io/npm/v/fn-pcg)](https://www.npmjs.com/package/fn-pcg)
[![Snyk](https://snyk.io/test/github/philihp/fn-pcg/badge.svg)](https://snyk.io/test/github/philihp/fn-pcg)
![Tests](https://github.com/philihp/fn-pcg/workflows/tests/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/philihp/fn-pcg/badge.svg?branch=main)](https://coveralls.io/github/philihp/fn-pcg?branch=main)
![Downloads](https://img.shields.io/npm/dt/fn-pcg)
![License](https://img.shields.io/npm/l/fn-pcg)

# Functional Permuted Congruential Generator

A permuted congruential generator (PCG) is a pseudorandom number generation algorithm developed in 2014 which applies an output permutation function to improve the statistical properties of a modulo-2^n linear congruential generator. It achieves excellent statistical performance with small and fast code, and small state size. [There are reasons why this might be better.](https://www.pcg-random.org/index.html)

This implementation is a pure, determinstic function that returns both the random number and the current state of the generator. The interface is meant to be a drop-in replacement for [fn-mt](https://www.npmjs.com/package/fn-mt)

## Install

```bash
npm install --save fn-pcg
```

## Usage

```js
import { newRandGen, randNext, randRange } from 'fn-pcg'

const gen = newRandGen(42)

const [n1, gen1] = randNext(gen)
const [n2, gen2] = randNext(gen1)
const [n3, gen3] = randNext(gen2)

console.log(n1)
console.log(n2)
console.log(n3)

// same generator generate same number
const [n4, gen4] = randNext(gen2)

console.log(n4)

// ranged int
const [n5, gen5] = randRange(0, 6, gen4)

console.log(n5) // generate integer from 0 to 5
```
