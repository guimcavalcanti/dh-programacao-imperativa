console.log("--- ARROW FUNCTIONS ---\n");

console.log("--- EX 01 ---");

let bemVindo = () => 'Olá, Mundo!';
console.log(bemVindo() + "\n");

console.log("--- EX 02 ---");
let soma = (a, b) => a + b;
console.log(soma(35,3) + "\n");

console.log("--- EX 03 ---");
let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ":" + data.getMinutes();
}
console.log(horaAtual() + "\n");

console.log("--- ATVD 01 ---");
let print = (mensagem) => mensagem + "\n";
console.log(print("Cadê vocês?!"));

console.log("--- ATVD 02 ---");
let somar = (n1, n2) => n1 + n2 + "\n";
console.log(somar(99, 1));