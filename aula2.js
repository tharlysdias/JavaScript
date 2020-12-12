// Comentário de uma linha

/* 
    Isto é um comentário longo
    de múltiplas linhas.
*/

/* Você não pode, porém, /* aninhar comentários */ /* SyntaxError */ */


// Declaração de variáveis
var minhaVariavel = "Curso Programe Fácil"; // variável tanto local como global
console.log(minhaVariavel);

var minhaVariavel2;

y = 10; // nunca utilizar essa forma de declaração de variável (variável de escopo global)

let teste = 10; // variável de escopo local
typeof teste

const T = 10; // constante apenas de leitura

T

T = 11;

// Classificando variáveis
var a;
typeof a

var y;
if (y === undefined) {
    console.log("true");
} else {
    console.log("false");
}

if (y === "number") {
    console.log("true");
} else {
    console.log("false");
}

var l;
l + 2; // Avaliado como NaN


var n = null;
console.log(n * 32); // a saída para o console será 0