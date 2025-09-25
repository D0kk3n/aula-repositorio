let input = require('readline-sync');
let n1 = input.questionInt("Digite um número: ")
let n2 = input.questionInt("Digite um número: ")

console.log("Números entre" ,n1, "e" ,n2,":")

while(n1<=n2){console.log(n1)
    n1++;
}