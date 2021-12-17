console.log("--- Callback ---\n");

console.log("--- EX 01 ---");

let nomeCompleto = (nome, sobrenome) => nome + " " + sobrenome;

let nomeAbreviado = (nome, sobrenome) => nome[0] + sobrenome[0];

let bomDia = (nome, sobrenome, callback) => `Olá, ${callback(nome, sobrenome)}! Bom dia!`;

console.log(bomDia("Guilherme", "Martins", nomeCompleto) + "\n");

console.log(bomDia("Guilherme", "Martins", nomeAbreviado) + "\n");

/* console.log("--- EX 02 ---");
let espera = () => console.log("Esperei!\n");
setTimeout(espera, 1); */

console.log("--- ATVD 01 ---");

let acaoCarro = callback => callback();

let andar = () => "O carro está andando.";
let parar = () => "O carro parou.";

console.log(acaoCarro(andar));
console.log(acaoCarro(parar));