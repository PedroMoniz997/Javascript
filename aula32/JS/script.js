class Car {
    //Cclass Father / Base
    constructor(nome, portas) {
        this.name = nome;
        this.ports = portas;
        this.on = false;
        this.vel = 0;
        this.color = undefined;
    }
    open = () => {
        this.on = true;
    };
    off = () => {
        this.on = false;
    };
    setColor = (cor) => {
        this.color = cor;
    };
}

class Military extends Car {
    //Class Soon
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas);
        this.blind = `${blindagem}%`;
        this.municao = municao;
        this.setColor("Preto");
    }
    atirar = function () {
        if (this.municao > 0) {
            this.municao --;
        }
    };
}

const car = new Car("Moniz", 4);
const car2 = new Military("Hunter", 4, 100, 500);

car.open();
car2.open();
car.setColor("Preto");
car2.atirar();
car2.atirar();
car2.atirar();
car2.atirar();

console.log(`Nome: ${car.name}`);
console.log(`Portas: ${car.ports}`);
console.log(`Cor: ${car.color}`);
console.log(`Ligado: ${car.on ? "Sim" : "Não"}`);
console.log(`Velocidade: ${car.vel}`);
console.log("-----------------------");

console.log(`Nome: ${car2.name}`);
console.log(`Portas: ${car2.ports}`);
console.log(`Cor: ${car2.color}`);
console.log(`Ligado: ${car2.on ? "Sim" : "Não"}`);
console.log(`Munição: ${car2.municao}`);
console.log(`Blindagem: ${car2.blind}`);
console.log("-----------------------");
