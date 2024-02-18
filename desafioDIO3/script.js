class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

        if(this.tipo == "mago"){
            this.ataque = "magia";
        } else if(this.tipo == "guerreiro"){
            this.ataque = "espada";
        } else if(this.tipo == "monge"){
            this.ataque = "artes marciais";
        } else if(this.tipo == "ninja"){
            this.ataque = "shuriken"
        }
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}.`)
    }
}

ataque1 = new heroi("Dumbledore", 115, "mago");
ataque1.atacar();

ataque2 = new heroi("Michelangelo", 15, "ninja");
ataque2.atacar();