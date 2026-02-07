// Função para decidir o ataque com base no tipo usando switch
function definirAtaque(tipo) {
    switch (tipo) {
        case "mago":
            return "magia"
        case "guerreiro":
            return "espada"
        case "monge":
            return "artes marciais"
        case "ninja":
            return "shuriken"
    }
}

class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = definirAtaque(tipo)
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

// Criando heróis
let mago = new Hero("Anderson", 22, "mago")
let ninja = new Hero("Emerson", 25, "ninja")
let guerreiro = new Hero("Alisson", 20, "guerreiro")
let monge = new Hero("Emanuel", 15, "monge")


// Executando ataques
mago.atacar()
ninja.atacar()
guerreiro.atacar()
monge.atacar()

