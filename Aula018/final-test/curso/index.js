let curso = {
    nomeCurso: "CTD",
    notaAprovacao: 7,
    faltasMaximas: 5,
    listaAlunos: [],
    novoAluno: function (aluno) {
        this.listaAlunos.push(aluno);
    },
    aprovacaoAluno: function (aluno) {
        let aprovado;
        if (aluno.calcularMedia() >= this.notaAprovacao && aluno.qtdFaltas < this.faltasMaximas) {
            aprovado = true;
        } else if (aluno.qtdFaltas == this.faltasMaximas && aluno.calcularMedia() > (this.notaAprovacao * 1.1)) {
            aprovado = true;
        } else {
            aprovado = false;
        }
        return aprovado;
    },
    listaAprovados: function () {
        let aprovados = [];
        for (let i = 0; i < this.listaAlunos.length; i++) {
            aprovados.push(this.aprovacaoAluno(this.listaAlunos[i]));
        }
        return aprovados;
    }
}

module.exports = curso;