class carro {
    constructor(name, type, velmax) {
        this.nome = name;
        if (type == 1) {
            this.tipo = "Esportivo";
            this.vmax = `${velmax}k/h`;
        } else if (type == 2) {
            this.tipo = "Utilitário";
            this.vmax = `${velmax}k/h`;
        } else if (type == 3) {
            this.tipo = "Passeio";
            this.vmax = `${velmax}k/h`;
        } else {
            this.tipo = "Militar";
            this.vmax = `${velmax}k/h`;
        }
    }
    getName() {
        return this.name;
    }
    getTipo() {
        return this.tipo;
    }
    getVmax() {
        return this.vmax;
    }
    getInfo() {
        return [this.nome, this.tipo, this.vmax];
    }
    setNome(nome) {
        this.nome = nome;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    setVmax(vmax) {
        this.vmax = vmax;
    }
    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`V.Max: ${this.vmax}`);
        console.log("----------------------");
    }
}

let c1 = new carro("Rapidão", 1, 300);
let c2 = new carro("Super Luxo", 2, 100);
let c3 = new carro("Bombadão", 4, 180);
let c4 = new carro("Carrego tudo", 3, 160);
let pedro = new carro("Edu", 1, 500);


