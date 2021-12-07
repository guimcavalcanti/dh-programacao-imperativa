const utils = require('./utils');
console.log(utils);

console.log(utils.soma(1,10));
console.log(utils.subtrai(1,10));
console.log(utils.multiplica(1,10));

const readlineSync = require('./node_modules/readline-sync');

let nome = readlineSync.question('Qual seu login? ');
console.log(`Seja bem-vindo, ${nome}!`);