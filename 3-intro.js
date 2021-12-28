// modules - encapsulated code (only share minimum)
// CommonnJS, every file is a module (by defult)

const names = require('./4-firstModule')

const util = require('./5-utils')

util(names.john)

console.log(names)

// If we have a function inside a module that we invoke a require statment will envoke the function