var a = 30;
var b = 20;

/* 
    > maior
    < menor
    >= maior ou igual
    <= menor ou igual
    == igualdade de valores
    === igualdade de valores e tipo
    != diferente
*/

if (a >= b) {
    console.log("A é maior ou igual a B");
} else if (b >= a) {
    console.log("B é maior ou igual a A");
} else {
    console.log("Ele são iguais");
}

if (a != b) {
    alert("Diferente");
}

var a = 2;
var b = "2";

if (a === b) {
    alert("Igual");
} else {
    alert("Diferente");
}

/* Os seguintes valores são avaliados como falsos */
if (false) {
    console.log("false")
}

if (true) {
    console.log("false")
}

if (undefined) {
    console.log("false")
}

if (null) {
    console.log("false")
}

if (0) {
    console.log("false")
}

if (NaN) {
    console.log("false")
}

if ("") {
    console.log("false")
}

/* Variáveis boolean */
var c = new Boolean(false);
console.log(c);

/* O objeto é avaliado como true independentemente se ele é falso */
if (c) {
    console.log("false")
}

/* Mas se colocado uma condição, ele vai avaliar se o conteúdo de c é igual ao comparado */
if (c == false) {
    console.log("false")
}

if (c == true) {
    console.log("false")
}