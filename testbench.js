let total = 0
let paretotal = 0
const parenthesesRegex =  /\(([^)]+)\)/g
const symbol =/[-+*/]/g
// /[-+*/]/g
const symbol2 =/[+\-*/]?\d+|\*?\([^)]+\)/g
const operation2 = `total = 4+4-2*(5 + 5)+(3+3)`
const slen = operation2.replace(`total =`,``).trim()
const splits = slen.match(symbol2)

console.log("splits", splits)
const match = [...operation2.matchAll(parenthesesRegex)]
const matches = match.map(match => match[1].match(/\d+(\.\d+)?/g)).flat()
console.log("match",matches)
const sym = match[0][1].match(symbol)
const pare = `paretotal = ${matches[0]}${sym[0]}${matches[1]}`
eval(pare)
const fpara = `*${paretotal}` 
const operation = `total = 4+4-2${fpara}`
eval(operation)
console.log(operation)
console.log(total)