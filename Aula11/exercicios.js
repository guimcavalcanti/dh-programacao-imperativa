console.log("--- Exercícios de For ---\n");

console.log("E01: Contar Voltas");
for (volta=1; volta<=5; volta++) {
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
    console.log("\n------------------------\n")
}