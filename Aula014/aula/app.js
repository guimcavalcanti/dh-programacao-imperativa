//Importando módulo nativo
console.log("--- Importando módulo nativo ---");
const fs = require('fs'); 
let dados = fs.readFileSync('./dados.txt', 'utf-8');
console.log(dados);

//Importando módulo instalado
console.log("\n--- Importando módulo instalado ---");
let moment = require('moment');
let data = moment().format('DD-MMM-YY');
console.log(data);

//Importando módulo criado
console.log("\n--- Importando módulo criado ---");

let soma2 = require('./soma/index');
console.log(soma2(53,1)+"\n");

let superHerois = require('./superHerois/index');
console.log(superHerois[1]);

// Leitura e Escrita de Arquivos
console.log("\n--- Leitura e Escrita de Arquivos---");
fs.writeFileSync('bem-vindo.txt', 'Olá, pessoal!');
fs.appendFileSync('bem-vindo.txt', '\nTudo bem, pessoas?');

let bemVindo = fs.readFileSync('./bem-vindo.txt', 'utf-8');
console.log(bemVindo);

// Módulo para receber input pelo terminal
console.log("\n--- Módulo para receber input pelo terminal ---");
var readlineSync = require('readline-sync');

let nome = readlineSync.question('Qual o seu nome? ');
console.log(`Olá, ${nome}!`);

let comidaFavorita =readlineSync.question('Qual sua comida favorita? ');
console.log(`A lá, a comida preferida de ${nome} é ${comidaFavorita}!`);