const rl = require('readline-sync')

const res1 = rl.question('Digite true ou false: ')
const res2 = rl.question('Digite true ou false: ')

let bool1 = false
let bool2 = false
if (res1.toLowerCase() === 'true' ) {
    bool1 = true
}
if (res2.toLowerCase() === 'true' ) {
    bool2 = true
}
console.log(typeof bool1)

console.log(`${bool1} E ${bool2} = ${bool1 && bool2}`)
console.log(`${bool1} OU ${bool2} = ${bool1 || bool2}`)
console.log(`NÃO ${bool1} = ${!bool1}`)
console.log(`NÃO ${bool2} = ${!bool2}`)