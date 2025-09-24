let input = require('readline-sync');
let n1 = input.questionInt("Digite um numero: ")
let n2 = input.questionInt("Digite um numero: ")
let n3 = input.questionInt("Digite um numero: ")

if(n2>n1){n1=n2}
if(n3>n1){n1=n3}
console.log(n1)

