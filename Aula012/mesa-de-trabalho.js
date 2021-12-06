console.log("Exercício 1\n")

const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador(a, b) {
    let pontosA = 0;
    let pontosB = 0;
    for (let i = 0; i <= a.length - 1; i++) {
        if (a[i] > b[i]) {
            pontosA++;
        } else if (a[i] < b[i]) {
            pontosB++;
        }
    }
    return `O primeiro participante obteve ${pontosA} pontos e o segundo participante obteve ${pontosB} pontos.`;
}

console.log(encontrarGanhador(alicia, bob));

console.log("\n------------\n")

console.log("Exercício 2\n")

function digitalHouse(a, b) {
    for (let i = 1; i <= 100; i++) {
        if (i % a == 0 && i % b == 0) {
            console.log("Digital House");
        } else if (i % a == 0) {
            console.log("Digital");
        } else if (i % b == 0) {
            console.log("House");
        }
    }
}

digitalHouse(3, 2);

console.log("\n------------\n")

console.log("Exercício 3\n")

let numeros = [2, 3, 4, 5, 6]

function somarArray(array) {
    let somaElementos = 0;
    for (let i=0; i <= array.length-1; i++) {
        somaElementos += array[i];
    }
    return somaElementos
}

console.log(somarArray(numeros));

console.log("\n------------\n")

console.log("Exercício 4\n")

let array1 = ["o", "l", "a"];
let array2 = ["t","c","h","a","u"];
let array3 = ["p","a","r","a","b","e","n","s"];

function simularArrayJoin(array) {
    let arrayJoin = "";
    for (let i=0; i <= array.length-1; i++) {
        arrayJoin += array[i];
    }
    return arrayJoin;
}

console.log(simularArrayJoin(array1));
console.log(simularArrayJoin(array2));
console.log(simularArrayJoin(array3));
