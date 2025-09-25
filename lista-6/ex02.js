let input = require('readline-sync');
let n1 = input.questionInt("Digite um número: ")

if(n1>=20){console.log("Número inválido.")}
else{

console.log("Números" ,n1, "a 20:")

while(n1<=20){console.log(n1)
    n1++;
};}