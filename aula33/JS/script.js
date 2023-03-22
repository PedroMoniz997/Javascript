const typeMilitary = document.querySelector("#typeMilitary");
const typeNormal = document.querySelector("#typeNormal");
const munition = document.querySelector("#munition");
const blindagem = document.querySelector("#blind");
const btnAdd = document.querySelector("#btnAdd");
const porta = document.querySelector("#port");
const cars = document.querySelector("#cars");
const nome = document.querySelector("#name");

let arrayCars = [];

const removecar = (quem) => {
    arrayCars = arrayCars.filter((el) => {
        return el.name != quem;
    });
};

typeMilitary.addEventListener("click", (evt) => {
    nome.value = "";
    porta.value = 0;
    blindagem.value = 0;
    munition.value = 0;
    blindagem.removeAttribute("disabled");
    munition.removeAttribute("disabled");
});

typeNormal.addEventListener("click", (evt) => {
    nome.value = "";
    porta.value = 0;
    blindagem.value = 0;
    munition.value = 0;
    blindagem.setAttribute("disabled", "disabled");
    munition.setAttribute("disabled", "disabled");
});

const gEC = () => {
    cars.innerHTML = "";
    arrayCars.map((car) => {
        const div = document.createElement("div");
        const btn = document.createElement("button");
        btn.innerHTML = "remover";
        btn.addEventListener("click", (evt) => {
            const quemRemover = evt.target.parentNode.dataset.nome;
            removecar(quemRemover);
            gEC();
        });
        div.setAttribute("class", "car");
        div.setAttribute("data-nome", car.name);
        div.innerHTML = `Nome: ${car.name}<br/>`;
        div.innerHTML += `Portas: ${car.ports}<br/>`;
        div.innerHTML += `Blindagem: ${car.blind}<br/>`;
        div.innerHTML += `Munição: ${car.municao}`;
        div.appendChild(btn);
        cars.appendChild(div);
    });
};

btnAdd.addEventListener("click", () => {
    if (typeNormal.checked) {
        const c = new Car(nome.value, porta.value);
        arrayCars.push(c);
    } else {
        const c = new Military(
            nome.value,
            porta.value,
            blind.value,
            munition.value
        );
        arrayCars.push(c);
    }
    gEC();
    nome.value = "";
    porta.value = 0;
    blindagem.value = 0;
    munition.value = 0;
});

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
            this.municao--;
        }
    };
}
