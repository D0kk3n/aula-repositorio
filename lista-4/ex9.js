let input = require('readline-sync');
let n1 = input.questionInt("Digite um numero: ")
let n2 = input.questionInt("Digite um numero: ")
let n3 = input.questionInt("Digite um numero: ")
let n4 = input.questionInt("Digite um numero: ")

(n1=n1+n2)

(n3=n3-n4)

(n1=n1+n3)

if(n1>10){console.log("Resultado maior que 10.")}
else{console.log("Resultado menor ou igual a 10.")}
        