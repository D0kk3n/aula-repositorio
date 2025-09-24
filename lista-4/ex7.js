let input = require('readline-sync');

let n1 = input.questionInt("Digite um numero: ")
let n2 = input.questionInt("Digite um numero: ")
let n3 = input.questionInt("Digite um numero: ")

if(n1<n2<n3){console.log(n1,n2,n3)}
else{console.log(n3,n2,n1)}   
    