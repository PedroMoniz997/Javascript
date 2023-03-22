const Nave = (energe) => {
    this.energe = `${energe}%`;
    this.fires = 100;
};

const nave = new Nave(100);

Nave.prototype.Life = 5;
Nave.prototype.fire = () => {
    if (this.fires > 0) {
        this.fires--;
    }
};

nave.fire();
nave.fire();
nave.fire();
nave.fire();
nave.fire();

console.log(Nave);
console.log(nave);
console.log(nave.fires);
