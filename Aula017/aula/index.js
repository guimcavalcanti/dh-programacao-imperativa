// Método Map

console.log("--- Método Map ---");
let numeros = [2, 3, 4];

let dobro = numeros.map(
    function (numero) {
        return numero * 2;
    }
)

console.log(dobro);

// Método Filter

console.log("\n--- Método Filter ---");
let numeros2 = [12, 55, 18, 9, 35];

let maiorIdade = numeros2.filter(
    function (idade) {
        return idade >= 18;
    }
)

console.log(maiorIdade);

// Método Reduce

console.log("\n--- Método Reduce ---");

let numeroPares = [2, 4, 6, 8, 10];

let soma = numeroPares.reduce(
    function (soma, num) {
        return soma + num;
    }
)

console.log(soma);

// Método ForEach

console.log("\n--- Método ForEach ---");

let cidades = ["Garanhuns", "Campina Grande", "Cuauhtemoc", "Londres", "Berlin", "São Paulo"];

cidades.forEach(
    function (cidade) {
        console.log(cidade);
    }
)

// Método Slice

console.log("\n--- Método Slice ---");

let numeros3 = [3, 4, 5, 6, 7];

let subArray = numeros3.slice(0, 3);
let subArray2 = numeros3.slice(2, -1);
let subArray3 = numeros3.slice(-2);

console.log(subArray);
console.log(subArray2);
console.log(subArray3);

// Método Splice

console.log("\n--- Método Splice ---");

let numeros4 = [3, 4, 5, 6, 7];

numeros4.splice(0, 0, 2);
console.log(numeros4);

numeros4.splice(2, 3);
console.log(numeros4);

// Método Sort

console.log("\n--- Método Sort ---");

let marcas = ["xiaomi", "apple", "samsung", "blackberry", "windows"];

let marcasSort = marcas.sort();

console.log(marcasSort);

let numeros5 = [98, 23, 64, 12, 123, 9, 1];

let numeros5Sort = numeros5.sort(
    function (a, b) {
        return a - b; // menor para o maior. // b-a maior para o menor
    }
)

console.log(numeros5Sort);

// Método Flat

console.log("\n--- Método Flat ---");

let numeros6 = [1, 2, 3, [4],
    [
        [5, 6, [7]]
    ]
];

let numeros6Flat1 = numeros6.flat();
let numeros6Flat2 = numeros6.flat(2);
let numeros6Flat3 = numeros6.flat(3);

console.log(numeros6Flat1);
console.log(numeros6Flat2);
console.log(numeros6Flat3);

// Método Includes

console.log("\n--- Método Includes ---");

let numeros7 = [32, 43, 54, 65, 76, 87];

let existe = numeros7.includes(65);

console.log(existe);

let naoExisteAPartirIndice2 = numeros7.includes(32, 2);

console.log(naoExisteAPartirIndice2);

let naoExiste = numeros7.includes(145);

console.log(naoExiste);

// Método Find

console.log("\n--- Método Find ---");

let moedas = [
    { nome: 'Coiner', simbolo: 'COI'},
    { nome: 'Bitcoin', simbolo: 'BIT'},
    { nome: 'Ethereum', simbolo: 'ETH'},
    { nome: 'Cardano', simbolo: 'ADA'},
    { nome: 'Bitcoin', simbolo: 'BTC'}
];

let bitcoin = moedas.find(
    function(moeda) {
        return moeda.nome == 'Bitcoin';
    }
)

console.log(bitcoin);