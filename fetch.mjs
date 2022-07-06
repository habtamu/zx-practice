#!/usr/bin/env zx

$.verbose = false

let response = await fetch('https://api.github.com/users/habtamu')

let data = await response.json() 

console.log('data: ', JSON.stringify(data, undefined, 2))