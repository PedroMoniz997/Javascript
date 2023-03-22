class car {
    constructor(type, stageT) {
        this.turbo = new Turbo(stageT);
        if (type == 0) {
            this.velMax = 120;
            this.name = "Normal";
        } else if (type == 1) {
            this.velMax = 160;
            this.name = "Esportive";
        } else if (type == 2) {
            this.velMax = 200;
            this.name = "UltraSportive";
        }
        this.velMax += this.turbo.pot;
    }
    info() {
        console.log(`Nome:${this.name}`);
        console.log(`VelMax:${this.velMax}`);
        console.log(`Turbo:${this.turbo.pot}`);
    }
}

class Turbo {
    constructor(e) {
        if (e == 0) {
            this.pot = 0;
        } else if (e == 1) {
            this.pot = 50;
        } else if (e == 2) {
            this.pot = 75;
        } else if (e == 3) {
            this.pot = 100;
        }
    }
}

class EspecialCar extends car {
    constructor(stageT) {
        super(4, stageT);
        this.velMax = 300 + this.turbo.pot;
        this.name = "Carro Especial";
    }
    info() {
        super.info();
    }
}

const c1 = new car(1, 0);
const c2 = new car(1, 1);
const c3 = new EspecialCar(3);

c1.info();
c2.info();

c3.info();
