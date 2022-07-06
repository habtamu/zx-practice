#!/usr/bin/env zx
import chalk from 'chalk';

$.verbose = false

//let message = await $`echo "Hello World" | tr '[:lower:]' '[:upper:]'`
//Message: HELLO WORLD

let message = await $`echo "Hello world"`.pipe($`tr '[:lower:]' '[:upper:]'`)
console.log(chalk.blue(`Message: ${message}`))

