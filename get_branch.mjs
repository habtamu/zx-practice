#!/usr/bin/env zx

$.verbose = false

let branch = await $`git branch --show-current`
console.log(`current branch: ${branch}`)