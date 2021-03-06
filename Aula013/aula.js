let pais = {
    nome: "Brasil",
    capital: "Brasilia",

    nacionalidade: function() {
        return "Nasci no " + this.nome;
    }
}

console.log(pais);
console.log(pais.nome);
console.log(pais.capital);
console.log(pais["nome"]);
console.log(pais["capital"]);
console.log(pais["cap"]);
console.log(pais.nacionalidade());

// Função Construtora

let carro1 = {
    marca: "Fiat",
    modelo: "Uno"
}

console.log(carro1);

function Carro(marcaP, modeloP) {
    this.marca = marcaP;
    this.modelo = modeloP;
}

let carro2 = new Carro("Renault", "Clio");
let carro3 = new Carro("Ford", "Fiesta");

console.log(carro2);
console.log(carro3);


// JSON

let pessoa = {
    nome: 'Guilherme',
    idade: 30,
    altura: 1.83
}

let pessoaJson = JSON.stringify(pessoa);

console.log(pessoaJson);

let pessoaObjeto = JSON.parse(pessoaJson);

console.log(pessoaObjeto);

let listaCompras = ["pão","presunto","queijo"];

let listaJson = JSON.stringify(listaCompras);

console.log(listaJson);

let listaObjeto = JSON.parse(listaJson);

console.log(listaObjeto);
