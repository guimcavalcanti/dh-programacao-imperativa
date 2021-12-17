let curso = require('./curso/index');

function Aluno(nome, qtdFaltas, notas) {
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;
    this.faltas = function () {
        return this.qtdFaltas + 1;
    }
    this.calcularMedia = function () {
        let somaNotas = 0;
        let qtdNotas = this.notas.length;
        for (let i = 0; i < qtdNotas; i++) {
            somaNotas += this.notas[i];
        }
        return (somaNotas / qtdNotas).toFixed(1);
    }
}

let aluno1 = new Aluno("Guilherme", 0, [10, 10, 10]);
let aluno2 = new Aluno("Rodolpho", 5, [10, 10, 10]);
let aluno3 = new Aluno("Pedro", 5, [7, 7, 9]);
let aluno4 = new Aluno("Andre", 7, [10, 10, 10]);
let aluno5 = new Aluno("Tiago", 8, [3, 8, 5]);

curso.novoAluno(aluno1);
curso.novoAluno(aluno2);
curso.novoAluno(aluno3);
curso.novoAluno(aluno4);
curso.novoAluno(aluno5);

console.log(curso.listaAprovados());