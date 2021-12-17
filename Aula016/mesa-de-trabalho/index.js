var readlineSync = require('readline-sync');

let multDois = readlineSync.question('Qual palavra voce deseja que seja mostrada caso o numero seja multiplo dos dois numeros? ');
let multPrimeiro = readlineSync.question('Qual palavra voce deseja que seja mostrada caso o numero seja multiplo do primeiro numero? ');
let multSegundo = readlineSync.question('Qual palavra voce deseja que seja mostrada caso o numero seja multiplo do segundo numero? ');

let fizzBuzz = (num1, num2) => {
    let i = 1;
    while (i <= 100) {
        if (i % num1 == 0 && i % num2 == 0) {
            console.log(multDois);
        } else if (i % num1 == 0) {
            console.log(multPrimeiro);
        } else if (i % num2 == 0) {
            console.log(multSegundo);
        } else {
            console.log(i);
        }
        i++;
    }
}

fizzBuzz(2, 5);