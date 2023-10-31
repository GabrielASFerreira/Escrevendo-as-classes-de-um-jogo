class hero{
    constructor(nome, idade, classe){
        this.nome = nome
        this.idade = idade
        this.classe = classe
    }
    atacar(){
        switch (this.classe) {
            case "mago":
                console.log(`O ${this.classe} atacou usando magia`);
                break;
            case "guerreiro":
                console.log(`O ${this.classe} atacou usando espada`);
                break;
            case "monge":
                console.log(`O ${this.classe} atacou usando artes marciais`);
                break;
            case "ninja":
                console.log(`O ${this.classe} atacou usando shuriken`);
                break;
            default:
                console.log(`O ${this.classe} atacou usando ataque desconhecido`);
                break;
        }
    }
}

let gabriel = new hero("Gabriel", 20, "ninja")

gabriel.atacar()