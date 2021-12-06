let filmes = ["star wars", "totoro", "rocky", "pulp fiction", "a vida é bela"];

console.log("---- Convertendo em Maiúsculas com For e While ----\n")

function converterMaiusculasFor(array) {
    for (let contador = 0; contador <= array.length - 1; contador++) {
        array[contador] = array[contador].toUpperCase();
    }
    return array;
}

function converterMaiusculasWhile(array) {
    let contador = 0;
    while (contador <= array.length - 1) {
        array[contador] = array[contador].toUpperCase();
        contador++;
    }
    return array;
}

console.log(converterMaiusculasFor(filmes));
console.log(converterMaiusculasWhile(filmes));

console.log("\n------------\n")

console.log("---- Adicionando Elementos com For e While ----\n")

let filmes2 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]
filmes2.pop();

function passagemDeElementosFor(array1, array2) {
    let tamanhoArray2 = array2.length;
    for (let contador = 1; contador <= tamanhoArray2; contador++) {
        array1.push(array2.pop().toUpperCase());
    }
    return array1;
}

console.log(passagemDeElementosFor(filmes, filmes2));

function passagemDeElementosWhile(array1, array2) {
    let tamanhoArray2 = array2.length;
    let contador = 1;
    while (contador <= tamanhoArray2) {
        array1.push(array2.pop().toUpperCase());
    }
    return array1;
}

console.log(passagemDeElementosWhile(filmes, filmes2));

console.log("\n------------\n")

console.log("---- Comparando Elementos com For e While ----\n")

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararClassificacoesFor(array1, array2) {
    let comparacoesArray1Array2 = [];
    for (let index = 0; index <= array1.length-1; index++) {
        comparacoesArray1Array2[index] = array1[index] === array2[index];
    }
    return comparacoesArray1Array2;
}

console.log(compararClassificacoesFor(asiaScores, euroScores))

function compararClassificacoesWhile(array1, array2) {
    let comparacoesArray1Array2 = [];
    let index = 0;
    while (index <= array1.length-1) {
        comparacoesArray1Array2[index] = array1[index] === array2[index];
        index++;
    }
    return comparacoesArray1Array2;
}

console.log(compararClassificacoesWhile(asiaScores, euroScores))