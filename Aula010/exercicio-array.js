let listaCompras = ["Arroz", "Feijão", "Carne", "Frango", "Macarrão", "Azeite", "Tomate"];

// Método Join - junta os elementos de um array
let listaJunta = listaCompras.join("-");
console.log(listaJunta);

// Método Pop - elimina o ultimo elemento de um array
let eliminandoUltimoElemento = listaCompras.pop();
console.log(eliminandoUltimoElemento);
console.log(listaCompras);

// Método Push - adicionando elementos ao final do array
listaCompras.push("Cebola", "Cenoura");
console.log(listaCompras);

// Método Shift - elimina o primeiro elemento de um array
let eliminandoPrimeiroElemento = listaCompras.shift();
console.log(eliminandoPrimeiroElemento);
console.log(listaCompras);

// Método Unshift - adiciona um ou mais elementos ao início de um array
listaCompras.unshift("Banana");
console.log(listaCompras);