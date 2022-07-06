#!/usr/bin/env zx

$.verbose = false

let branch = await $`git branch --show-current`

await $`git push origin ${branch}`