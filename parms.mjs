#!/usr/bin/env zx

$.verbose= false

const size = argv.size;
const isJpg  = argv.jpg

console.log(`size : ${size}`)
console.log(`Format : ${isJpg}`)

//zx parms.mjs --size=10x10
// size : 10x10

//zx parms.mjs --size=10x10 --png
// size : 10x10
// Format : undefined

//zx parms.mjs --size=10x10 --jpg
// size : 10x10
// Format : true
