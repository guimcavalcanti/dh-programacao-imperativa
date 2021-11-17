let materialLimpeza = ["Desinfetante", "Sabão em Barra", "Sabão em Pó", "Detergente", "Cloro", "Multiuso", "Óleo de Peroba"];

// Tamanho do Array
console.log(materialLimpeza.length);

// Identificando Índice
console.log(materialLimpeza.indexOf("Multiuso"));
console.log(materialLimpeza.indexOf("Bucha"));
console.log(materialLimpeza.lastIndexOf("Multiuso"));

// Acessando Elementos
console.log(materialLimpeza[0]); // Retorna "Desinfetante"
console.log(materialLimpeza[3]); // Retorna "Detergente"
console.log(materialLimpeza[materialLimpeza.length - 1]); // Retorna "Óleo de Peroba"

// Modificando Elementos
// Adicionando no final
materialLimpeza.push("Bucha", "Vassoura");
console.log(materialLimpeza);

// Removendo o último elemento
materialLimpeza.pop();
console.log(materialLimpeza);

// Removendo o primeiro elemento
materialLimpeza.shift();
console.log(materialLimpeza);

// Adicionando no início
materialLimpeza.unshift("Esponja de Aço", "Rodo");
console.log(materialLimpeza);

// Removendo um elemento pelo índice
materialLimpeza.splice(6, 1); // Remove "Multiuso"
console.log(materialLimpeza);

// Removendo sequencia de elementos
materialLimpeza.splice(1, 3);
console.log(materialLimpeza);

// Comparar elementos de um array com os elementos de outro
let materialLimpezaComprado = ["Cloro", "Bucha"];
let material = materialLimpezaComprado[0]
let check_material = materialLimpeza.indexOf(material);
if (check_material != -1) {
    console.log(`O ${material} está presente no array inicial!`)
}

// Segunda parte de exercícios
console.log("---- 2ª Parte de Exercícios -----")

// O que esses códigos retornam?
let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length]); // Retorna undefined

let grupoDeAmigosA = [["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna", "Patán"]];
console.log(grupoDeAmigosA[1][0]); // Retorna "Spiderman"

let str = "uma string qualquer";
let grupoDeAmigos = [[45, 89, 0], ["Digital", "House", true], ["string", "123", "false", 54, true, str]];
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]); // Retorna "uma string qualquer"

// Array Invertido
let array = ["Oi", "Olá", "Hello", "Hola"];

function imprimirInverso(array) {
    let elemento1 = array[3];
    let elemento2 = array[2];
    let elemento3 = array[1];
    let elemento4 = array[0];
    return elemento1 + " " + elemento2 + " " + elemento3 + " " + elemento4
}
console.log(imprimirInverso(array));

function inverter(array) {
    let elemento1 = array[3];
    let elemento2 = array[2];
    let elemento3 = array[1];
    let elemento4 = array[0];
    let arrayInvertido = [elemento1, elemento2, elemento3, elemento4];
    return arrayInvertido;
}
console.log(inverter(array));

// Somar Array

let arrayNum = [1,4,82];

function somarArray(array) {
    let soma = array[0] + array[1] + array[2];
    return soma;
}
console.log(somarArray(arrayNum));

// Simulação Array Join

let arrayLetra = ["O","l","á","!"];

function simularArrayJoin(array) {
    let arrayJoin = array[0] + array[1] + array[2] + array[3];
    return arrayJoin;
}

console.log(simularArrayJoin(arrayLetra));

// Coleção de Filmes

let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];
console.log(filmes[4]);

function arrayMaiusculo(array) {
    let ele1 = array[0].toUpperCase();
    let ele2 = array[1].toUpperCase();
    let ele3 = array[2].toUpperCase();
    let ele4 = array[3].toUpperCase();
    let ele5 = array[4].toUpperCase();
    let arrayMaiusculo = [ele1, ele2, ele3, ele4, ele5];
    return arrayMaiusculo;
}

console.log(arrayMaiusculo(filmes));

let filmes2 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]

let filmes3 = filmes.concat(filmes2);
console.log(filmes3);

let gameRemovido = filmes3.pop();
console.log(gameRemovido);
console.log(filmes3);

// Comparando Notas

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparaNotas(array1, indiceNota1, array2, indiceNota2) {
    let nota1 = array1[indiceNota1];
    let nota2 = array2[indiceNota2];
    let compara = nota1 == nota2;
    if(compara==true) {
        return "As notas são iguais."
    } else {
        return "As notas são diferentes."
    }
}

console.log(comparaNotas(asiaScores,0,euroScores,0));
