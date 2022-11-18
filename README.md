[![Version](https://img.shields.io/npm/v/pcg-gen)](https://www.npmjs.com/package/pcg-gen)
[![Requirements Status](https://requires.io/github/philihp/fast-shuffle/requirements.svg?branch=main)](https://requires.io/github/philihp/fast-shuffle/requirements/?branch=main)
![Tests](https://github.com/philihp/pcg-gen/workflows/tests/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/philihp/pcg-gen/badge.svg?branch=main)](https://coveralls.io/github/philihp/pcg-gen?branch=main)
![Downloads](https://img.shields.io/npm/dt/pcg-gen)
![License](https://img.shields.io/npm/l/pcg-gen)

# Permuted Congruential Generator Generator

A permuted congruential generator (PCG) is a pseudorandom number generation algorithm developed in 2014 which applies an output permutation function to improve the statistical properties of a modulo-2^n linear congruential generator. It achieves excellent statistical performance with small and fast code, and small state size. [There are reasons why this might be better.](https://www.pcg-random.org/index.html)

This implementation returns both the random number, and the current state of the generator so it's a pure function. The interface is meant to be a drop-in replacement for [fn-mt](https://www.npmjs.com/package/fn-mt)

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
