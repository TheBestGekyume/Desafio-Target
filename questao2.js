// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1
// e o próximo valor sempre será a soma dos 2 valores anteriores
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
// escreva um programa na linguagem que desejar onde, informado um número, 
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o
// número informado pertence ou não a sequência.

const prompt = require('readline-sync');

const fibonacci = (num) => {
    let termo1 = 0;
    let termo2 = 1;

    if(num === termo1) return "O numero informado é o 1º termo da sequencia de Fibonacci";
    if(num === termo2) return "O numero informado é o 2º e o 3º termo da sequencia de Fibonacci";

    for(let i = 2; termo1 <= num; i++) {
        if(termo2 === num) return `O numero informado é o ${i}º termo da sequencia de Fibonacci`
        termo2 += termo1;
        termo1 = termo2 - termo1;
    }

    return `O numero informado NÃO pertence a sequencia de Fibonacci`
}

const numero = prompt.questionInt("Digite um numero: ");

console.log(fibonacci(numero));


