class DispositivoElettronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false; 
    }
    ligar() {
       if(this.ligado) {
        console.log(this.nome+ 'já ligado');
        return;
       }

       this.ligado = true;
    }
    desligar() {
        if(!this.ligado) {
            console.log(this.nome+ 'já desligado');
            return;
           }
           
           this.ligado =  false;

    }
}

class Tablets extends  DispositivoElettronico {
    constructor(nome, cor, modelo) {
        super(nome);
        //adicionando  os topicos extra 
        this.cor = cor;
        this.modelo = modelo;
    }
}

const tb = new Tablets('Samsung', 'Rose', 'Tab S9 FE');
tb.ligar();
console.log(tb);