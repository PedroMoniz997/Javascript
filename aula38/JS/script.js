class principal {
    constructor() {
        if (this.constructor == principal) {
            throw new TypeError("Esta classe não pode ser instanciada apenas pode ser usada para instanciar outras classes");
        }
    }
}

const car = new principal();