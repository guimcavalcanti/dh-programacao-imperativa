// CONDICIONAIS
console.log("---- CONDICIONAIS ----");

let idade = 32;
let acesso = '';
if (idade < 16) {
    acesso = 'Acesso Proibido!';
    console.log(acesso);
} else if (idade >= 16 && idade <= 18) {
    acesso = 'Acesso liberado se acompanhado por maior de idade';
    console.log(acesso);
} else {
    acesso = 'Acesso Liberado!';
    console.log(acesso);
}

// IF TERNARIO
console.log("---- IF TERNARIO ----");

let check = 4 > 10 ? 'O 4 é maior!' : 'O 10 é maior!';
console.log(check)

let dia = 'segunda';
let resultado = dia == 'domingo' ? 'Vou para a praia!' : 'Fico em casa!';
console.log(resultado);

// SWITCH
console.log("---- SWITCH ----");

let idade2 = 22;

switch (idade2) {
    case 10:
        console.log('Tem 10 anos!');
        break;
    case 5:
        console.log('Tem 5 anos!');
        break;
    default:
        console.log('Não tem nem 10 e nem 5 anos!');
        break;
}

let dia2 = 'sexta';

switch(dia2) {
    case 'segunda':
        console.log('Vou trabalhar!');
        break;
    case 'terça':
        console.log('Vou ao médico!');
        break;
    case 'domingo':
        console.log('Vou para a praia!');
        break;
    default:
        console.log('Reveja sua agenda!')
}
