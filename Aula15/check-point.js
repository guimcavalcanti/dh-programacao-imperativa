console.log("--- Questão 01 ---");

var z=0;
for (var i=20; i<50; i+=10){
    z+=i
}

console.log(z);

console.log("\n--- Questão 02 ---");

console.log("nomePessoa");

console.log("\n--- Questão 03 ---");

let x = 5;
let y = x++ + ++x;
console.log("y= " + y);
x = 3;
y = x*(x + 1)*x++;
x = 5;
y = 3;
y *= x+1;
console.log("x= " + x);
console.log("y= " + y);

console.log("\n--- Questão 04 ---");

let valor=5;
let fatorial=1;
for (let i = valor; i > 1; i--) {
    fatorial*=i;
}

console.log("Fatorial = " + fatorial);

console.log("\n--- Questão 05 ---");

function soletrar(texto){
    console.log(texto.replace('-', '').toLocaleUpperCase().split("").join("-"));
}

soletrar("digital-house");
soletrar("ctd");

console.log("\n--- Questão 06 ---");

function soma(a=1,b=3) {
    return a+b;
}

console.log(soma());
console.log(soma(3));
console.log(soma(1,2));

console.log("\n--- Questão 07 ---");

console.log("O Node é um interpretador da linguagem Javascript, de código aberto, que possibilita a execução de códigos da linguagem do lado do servidor.");

console.log("\n--- Questão 08 ---");

console.log("Servir de molde para a criação de objetos.");

console.log("\n--- Questão 09 ---");

console.log("A instrução abaixo do fechamento do if é executada");

console.log("\n--- Questão 10 ---");

let a = 50;
let resto = 50%2;
resposta = resto==0 ? 'Par':'Impar';
console.log(resposta);
console.log("if else");

console.log("\n--- Questão 11 ---");
console.log("Node Package Manager");

console.log("\n--- Questão 12 ---");
console.log("O operador ++ incrementa 1, o operador -- decrementa 1, o operador % calcula o resto, o operador + concatena ou soma");

console.log("\n--- Questão 13 ---");
console.log("+ === ! &&");

console.log("\n--- Questão 14 ---");

for (var i=0; i<50; i+=10) {
    console.log(i);
}
console.log(i);


let p = 0;
if (p =! 0) {
    console.log("Diferente")
}