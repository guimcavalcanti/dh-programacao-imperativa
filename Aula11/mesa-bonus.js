let participanteA = [5, 8, 4, 9, 5];
let participanteB = [8, 7, 8, 6, 8];
let participanteC = [7, 5, 10, 8, 3];

function pontuacaoMedia(array) {
    let qtdNotas = array.length;
    let somaNotas = 0;
    for (let index = 0; index <= qtdNotas-1; index++){
        somaNotas += array[index];
    }
    let media = somaNotas/qtdNotas;
    return media;
}

console.log(pontuacaoMedia(participanteA));
console.log(pontuacaoMedia(participanteB));
console.log(pontuacaoMedia(participanteC));

function pontuacaoMaior(array) {
    let maior = 0;
    for (let index = 0; index <= array.length; index++) {
        if (array[index] > maior) {
            maior = array[index];
        }
    }
    return maior;
}

console.log(pontuacaoMaior(participanteA));
console.log(pontuacaoMaior(participanteB));
console.log(pontuacaoMaior(participanteC));

function competicao(array1, array2, array3) {
    let participantes = [array1, array2, array3];
    let maiorMedia = 0;
    for (let i=0; i <= participantes.length-1; i++){
        if (pontuacaoMedia(participantes[i]) > maiorMedia) {
            maiorMedia = pontuacaoMedia(participantes[i]);
        }
    }
    let maiorNota = 0;
    for (let i=0; i <= participantes.length-1; i++){
        if (pontuacaoMaior(participantes[i]) > maiorNota) {
            maiorNota = pontuacaoMaior(participantes[i]);
        }
    }
    return `O ganhador por maior média foi o com a média de ${maiorMedia}. O ganhador por maior nota foi o com a nota ${maiorNota}.`;
}

console.log(competicao(participanteA, participanteB, participanteC));