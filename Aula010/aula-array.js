let meuArray = ["Filme", true, 60];

// acessando elemento
console.log(meuArray[0]);

// descobrindo tamanho de array
console.log(meuArray.length);

// .push() - adicionando elementos ao final do array
meuArray.push(10,"Infantil");
console.log(meuArray);

// .pop() - elimina o ultimo elemento de um array
meuArray.push("Aventura");
console.log(meuArray);
let ultimaInfo = meuArray.pop();
console.log(ultimaInfo);
console.log(meuArray);

// .shift() - elimina o primeiro elemento de um array
console.log(meuArray.shift());
console.log(meuArray);

// .unshift() - adiciona um ou mais elementos ao início de um array
meuArray.unshift("Click","Novela");
console.log(meuArray);

// .join() - junta os elementos de um array
let arrayJuntoVirgula = meuArray.join();
console.log(arrayJuntoVirgula);
let arrayJuntoTraco = meuArray.join("-");
console.log(arrayJuntoTraco);

// .indexOf() e .lastIndexOf() - retorna a posição de um elemento
console.log(meuArray.indexOf("Infantil"));
console.log(meuArray.lastIndexOf("Infantil"));

// .includes() - retorna um booleano se um elemento existe ou não no array
console.log(meuArray.includes("Infantil"));
console.log(meuArray.includes(13));