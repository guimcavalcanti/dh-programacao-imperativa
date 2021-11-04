// Operadores Lógicos
console.log("--- Operadores Lógicos ---")
const desigualdade = 1 != 2;
console.log(desigualdade);

const igualdade = "nome" == "nome";
console.log(igualdade);

const igualdade2 = "nome" == "Nome";
console.log(igualdade2);

const igualdade3 = "nome".toLowerCase() == "NOME".toLowerCase();
console.log(igualdade3);

const maior = 5 > 3;
console.log(maior);

const maiorIgual = 6 >= 3;
console.log(maiorIgual);

const menor = 0 < 1;
console.log(menor);

const menorIgual = 1 <= 3;
console.log(menorIgual);

const verdadeiro = true;
console.log(verdadeiro);

// negação
console.log("--- Negação ---")
console.log(!verdadeiro);

// E (&&)
console.log("--- E (&&) ---")
let a = "hoje vou dar aula";
let b = "hoje vai chover";

let resultado = true && true;
console.log(resultado);

let resultado2 = true && false;
console.log(resultado2);

let resultado3 = false && false;
console.log(resultado3);

// OU (||)
console.log("--- OU (||) ---");
let resultado4 = true || true;
console.log(resultado4);

let resultado5 = true || false;
console.log(resultado5);

let resultado6 = false || false;
console.log(resultado6);