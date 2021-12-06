// Calculadora

function adicionar(numA, numB) {
    return numA + numB;
}

function subtracao(numA, numB) {
    return numA - numB;
}

function multiplicacao(numA, numB) {
    return numA * numB;
}

function divisao(numA, numB) {
    return numA / numB;
}

function quadradoDoNumero(numA) {
    return multiplicacao(numA, numA);
}

function mediaDeTresNumeros(numA, numB, numC) {
    let soma1 = adicionar(numA, numB);
    let soma2 = adicionar(soma1, numC);
    let divisao1 = divisao(soma2,3);
    return divisao1;
}

function calculaPorcentagem(numA, numB) {
    let numTotal = numA;
    let porcentagem = divisao(numB,100);
    return multiplicacao(numTotal, porcentagem);
}

function geradorDePorcentagem(numA, numB) {
    let rep = divisao(numA, numB);
    let porcentagem = multiplicacao(rep,100);
    return porcentagem;
}

console.log("---------Teste das Operações da Calculadora---------");
console.log(adicionar(20,10));
console.log(subtracao(20,10));
console.log(multiplicacao(20,10));
console.log(divisao(20,10));
console.log(divisao(20,0));
console.log(divisao(0,0));
console.log(divisao(0,10));
console.log(quadradoDoNumero(5));
console.log(mediaDeTresNumeros(5,10,15));
console.log(calculaPorcentagem(500,50));
console.log(geradorDePorcentagem(23,450))


