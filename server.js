const os = require('os')
const path = require('path')
// const math = require('./math')
const {add, divide, ...math} = require('./math')

// console.log('hello')
// console.log(global)

/*
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))
*/

console.log(math.sub(2, 4))
console.log(add(2, 4))
console.log(divide(2, 4))