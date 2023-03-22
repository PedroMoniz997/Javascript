const displayNumObj = document.querySelector("#display-num-objects");
const numObjAdd = document.querySelector("#number-objects-add");
const btnAdd = document.querySelector("#btn-add");
const btnRemoveAll = document.querySelector("#btn-remove-all");
const palco = document.querySelector("#palco");

let larguraP = palco.offsetWidth;
let alturaP = palco.offsetHeight;
let bolas = [];
let numBolas = 0;

class Bolas {
    constructor(arrayBolas, Palco) {
        this.tamanho = Math.floor(Math.random() * 15) + 10;
        this.R = Math.floor(Math.random() * 255);
        this.G = Math.floor(Math.random() * 255);
        this.B = Math.floor(Math.random() * 255);
        this.positionx = Math.floor(Math.random() * (larguraP - this.tamanho));
        this.positiony = Math.floor(Math.random() * (alturaP - this.tamanho));
        this.valx = Math.floor(Math.random() * 2) + 0.5;
        this.valy = Math.floor(Math.random() * 2) + 0.5;
        this.diretionx = (Math.random()*10) > 5 ? 1 : -1;
        this.diretiony = (Math.random()*10) > 5 ? 1 : -1;
        this.palco = Palco;
        this.arrayBolas = arrayBolas;
        this.id = Date.now()+"_"+Math.floor(Math.random()*1000000000000000000);
        this.DesinBals();
        this.control = setInterval(this.controler,10);
        this.me = document.getElementById(this.id);
        numBolas++;
        displayNumObj.innerHTML = numBolas;
    }
    myPosition = () => {
        return this.arrayBolas.indexOf(this);
    }

    removeBal = () => {
        clearInterval(this.control);
        bolas = bolas.filter((b) => {
            if(b.id != this.id) {
                return b;
            }
        });
        this.me.remove()
        numBolas = 0;
        displayNumObj.innerHTML = numBolas;
    }

    DesinBals = () => {
        const div = document.createElement("div"); 
        div.setAttribute("id", this.id);
        div.setAttribute("class", "bal");
        div.setAttribute("style", `left: ${this.positionx}px; top: ${this.positiony}px; width: ${this.tamanho}px; height: ${this.tamanho}px; background: rgb(${this.R},${this.G},${this.B});`);
        this.palco.appendChild(div);
    }

    colosaoBordas = () => {
        if(this.positionx + this.tamanho >= larguraP){
            this.diretionx = -1;
        } else if(this.positionx <= 0){
            this.diretionx = 1;
        }
        if(this.positiony + this.tamanho >= alturaP){
            this.diretiony = -1;
        } else if(this.positiony <= 0){
            this.diretiony = 1;
        }
    }

    controler = () => {
        this.colosaoBordas();
        this.valx = Math.floor(Math.random() * 2) + 0.5;
        this.valy = Math.floor(Math.random() * 2) + 0.5;
        this.positionx += this.diretionx * this.valx;
        this.positiony += this.diretiony * this.valy;
        this.me.setAttribute("style", `left: ${this.positionx}px; top: ${this.positiony}px; width: ${this.tamanho}px; height: ${this.tamanho}px; background: rgb(${this.R},${this.G},${this.B});`);
        if((this.positionx > this.larguraP)||(this.positiony > this.alturaP)) {
            this.removeBal();
        }
    }
}

window.addEventListener("resize", (evt) => {
    larguraP = palco.offsetWidth;
    alturaP = palco.offsetHeight;
});

btnAdd.addEventListener("click", (evt) => {
    const qnt = numObjAdd.value;
    for (let i = 0; i < qnt; i++) {
        bolas.push(new Bolas(bolas, palco));
    }
});

btnRemoveAll.addEventListener("click", (evt) => {
    bolas.map((el) => {
        el.removeBal();
    });
});
