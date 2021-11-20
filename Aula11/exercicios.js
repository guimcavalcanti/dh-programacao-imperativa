console.log("--- Exercícios de For ---\n");

console.log("E01: Contar Voltas");
for (volta = 1; volta <= 5; volta++) {
    console.log(`Volta número: ${volta}`);
}


console.log("\nE02: Repetir como um papagaio");
for (i = 1; i <= 5; i++) {
    console.log("Olá, Mundo!");
}

console.log("\nE03: Contando números ímpares");
let qtdImpar = 0;
for (i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log(`O número ${i} é impar.`);
        qtdImpar++;
    }
}
console.log(`Entre 1 e 10 existem ${qtdImpar} números ímpares.`);

console.log("\nE04: Contando números pares");
let qtdPar = 0;
for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(`O número ${i} é par.`);
        qtdPar++;
    }
}
console.log(`Entre 1 e 10 existem ${qtdPar} números pares.`);

console.log("\nE05: Criando tabuada");
for (i = 1; i <= 10; i++) {
    console.log(`Tabuada do número: ${i}`);
    for (j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("\n------------------------\n");
}

console.log("\n----- LOOP WHILE E DO WHILE ----");

let volta2 = 1;
while (volta2 <= 5) {
    console.log(`Volta número ${volta2}`);
    volta2++;
}

console.log("\n--------------------\n");

let volta3 = 5;
do {
    console.log(`Volta número ${volta3}`);
    volta3++;
} while (volta3 <= 5);

console.log("\n--------------------\n");

console.log("Números ímpares de 1 a 100\n");

let numero = 1;
let cont_impar = 0;
while (numero <= 100) {
    if (numero % 2 != 0) {
        console.log(`O número ${numero} é ímpar.`)
        cont_impar++;
    }
    numero++;
}
console.log(`\nNo intervalo de 1 a 100 temos ${cont_impar} número ímpares.\n`);

console.log("\n--------------------\n");

console.log("Números pares de 1 a 100\n");
let numero2 = 1;
let cont_par = 0;
while (numero2 <= 100) {
    if (numero2 % 2 == 0) {
        console.log(`O número ${numero2} é par.`)
        cont_par++;
    }
    numero2++;
}
console.log(`\nNo intervalo de 1 a 100 temos ${cont_impar} número pares.\n`);

console.log("\n--------------------\n");

let numero3 = 100;
console.log("Números ímpares:");
do {
    if (numero3 % 2 != 0){
        console.log(numero3);
    }
    numero3--;
} while (numero3 >= 1 && numero3 <= 100);

numero3 = 100;
console.log("\nNúmeros pares:");
do {
    if (numero3 % 2 == 0){
        console.log(numero3);
    }
    numero3--;
} while (numero3 >= 1 && numero3 <= 100);

console.log("\n--------------------\n");

let qtdAlunos = 5;
let contador = 1;

while (contador <= qtdAlunos) {
    console.log(`Informe a nota do aluno ${contador}:`);
    contador++;
}