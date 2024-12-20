class  Pessoa {
    constructor(nome, sobrenome) {
       this.nome = nome;
       this.sobrenome = sobrenome;
  
    }
    falar() {
        console.log(`${this.nome} Ola gente boa-noite.`)
    }
}

function Pessoa_2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa_2.prototype.falar = function() {
    console.log(`${this.nome} Ola gente boa-noite.`)
}

const p1 = new Pessoa('Gustavo', 'Fava');
const p2 = new Pessoa('Jane', 'Aquino');


console.log(p1);
console.log(p2);
//falar
p1.falar();
p2.falar();


