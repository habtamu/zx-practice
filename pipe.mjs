#!/usr/bin/env zx

$.verbose = false

//let message = await $`echo "Hello World" | tr '[:lower:]' '[:upper:]'`
//Message: HELLO WORLD

let message = await $`echo "Hello world"`.pipe($`tr '[:lower:]' '[:upper:]'`)
console.log(`Message: ${message}`)
