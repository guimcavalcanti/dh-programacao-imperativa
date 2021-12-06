// Teste do Math.random

Math.random(); // não faz nada
console.log(Math.random()); // imprime um número aleatório

// Função Cumprimentar

function cumprimentar(nome) {
    console.log(`Olá, ${nome}! Seja bem vindo!`);
    console.log("Olá, " + nome + "! Seja bem vindo!")
}

cumprimentar("Guilherme");

// Função Que Retorna Valor

function multiplicarPorDoisESomarCinco(x) {
    return 2 * x + 5;
}

console.log(multiplicarPorDoisESomarCinco(1));
console.log(multiplicarPorDoisESomarCinco(5));

