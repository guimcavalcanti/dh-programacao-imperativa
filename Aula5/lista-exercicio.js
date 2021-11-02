//Micro Desafio01

function teste1(x,y) {
    return y-x;
}

console.log(teste1(2,10));

//Micro Desafio02

function teste2(x,y) {
    return x*2;
}

console.log(teste2(2,10));

// Funções Simples
// Exercício01

function conversorPolegada(centimetro) {
    return centimetro * 2.54;
}

console.log(conversorPolegada(10));

// Exercício02

function conversorURL(palavra) {
    return "http://www." + palavra + ".com.br";
    //return `http://www.${palavra}.com.br`;
}

console.log(conversorURL("google"));

// Exercício03

function exclamar(palavra2) {
    return palavra2 + "!";
}

console.log(exclamar("Bom dia"));

// Exercício04

function idadeCachorro(idade) {
    return idade*7;
}

console.log(idadeCachorro(3));

// Exercício05

function horaTrabalho(salario) {
    return salario/160;
}

console.log(horaTrabalho(4000));

// Exercício06

let calculadoraIMC = function(altura, peso) {
    const alturaMetro = altura/100;
    return (peso/(alturaMetro**2)).toFixed(2);
}

console.log(calculadoraIMC(176,80.1))

// Exercício07

function conversorMaiuscula(string) {
    return string.toUpperCase();
}

console.log(conversorMaiuscula("o rato roeu a roupa do rei de roma"));

// Exercício08

function tipoDado(dado) {
    return typeof dado;
}

console.log(tipoDado(true))

// Exercício09

function circunferenciaCirculo(raio) {
    return 2 * Math.PI * raio
}

console.log(circunferenciaCirculo(10))