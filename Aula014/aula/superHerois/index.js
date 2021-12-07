const superHerois = [
    
    {
        nome: "Wonder Woman",
        poder: "Golpear com chicote",
        cumprimentar: function() {
            return "Ola, sou" + this.nome;
        }
    },

    {
        nome: "Iron Man",
        poder: "Disparar Raio",
        cumprimentar: function() {
            return "Ola, sou" + this.nome;
        }
    }
]

module.exports = superHerois;