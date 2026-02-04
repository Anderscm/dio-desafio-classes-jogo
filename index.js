// Escrevendo as classes de um Jogo

// Criando a classe
class Hero{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        
        if(tipo === "mago"){
            this.ataque = "magia"
            
        }else if(tipo === "guerreiro"){
            this.ataque = "espada"
           
        }else if(tipo === "monge"){
            this.ataque = "artes marciais"
           
        }else{
            this.ataque = "shuriken"
            
        }
    }
    // método
    atacar(){
        console.log( `O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

// Objeto
let mago = new Hero("Anderson", 22, "mago")
let ninja = new Hero("Emerson", 25, "ninja")
let guerreiro = new Hero("Alisson", 20, "guerreiro")
let monge = new Hero("Emanuel", 15, "monge")
mago.atacar()
ninja.atacar()
guerreiro.atacar()
monge.atacar()