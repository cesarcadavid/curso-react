// const chanchos = require('./importexport') //Esta es la vieja forma de como importar

// console.log(chanchos); 

import chanchos, {chanchosTristes, otrosChanchos, fn1, fn2}  from './importexport.mjs'

console.log(chanchos)
console.log(chanchosTristes)
console.log(otrosChanchos)
fn1()
fn2()
