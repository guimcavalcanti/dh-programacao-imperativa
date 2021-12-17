console.log("--- Exercício 01 ---");

let numPar = [2, 4, 6, 8, 10];

let proxNumImpar = numPar.map(
    function (numPar) {
        return numPar + 1;
    }
)

console.log(proxNumImpar);

console.log("\n--- Exercício 02 ---");

let nomes = ["Maria", "Vanessa", "Vitoria", "Julia", "Maria"];

let maria = nomes.filter(
    function(nome, index) {
        if(nome=="Maria") {
            return nome;
        }
    }
)

console.log(maria);

console.log("\n--- Exercício 03 ---");

let nums = [1, 5, 9, 3, 7, 45];

let numsString = nums.reduce(
    function(resultado, num) {
        return resultado + "-" + num;
    }
)

console.log(numsString);

console.log("\n--- Exercício 04 ---");

let animais = ["Vaca", "Cavalo", "Girafa", "Peixe", "Cobra"];

animais.forEach(
    function(animal){
        console.log(`O animal é ${animal}.`);
    }
)

