const palco = document.querySelector("#palco");

let larguraP = palco.offsetWidth;
let alturaP = palco.offsetHeight;

class obj {
    constructor(palco) {
        this.positionx = Math.floor(Math.random() * (larguraP - 50));
        this.positiony = Math.floor(Math.random() * (alturaP - 50));
        this.R = Math.floor(Math.random() * 255);
        this.G = Math.floor(Math.random() * 255);
        this.B = Math.floor(Math.random() * 255);
        this.valx = Math.floor(Math.random() * 2) + 0.5;
        this.valy = Math.floor(Math.random() * 2) + 0.5;
        this.diretionx = (Math.random() * 10) > 5 ? 1 : -1;
        this.diretiony = (Math.random() * 10) > 5 ? 1 : -1;
        this.palco = palco;
        this.id = Date.now();
        this.Design();
        this.control = setInterval(this.controler, 1);
        this.me = document.getElementById(this.id);
    }

    Design = () => {
        const div = document.createElement("div");
        div.setAttribute("id", this.id);
        div.setAttribute("class", "object");
        div.setAttribute(
            "style",
            `left: ${this.positionx}px; top: ${this.positiony}px; width: 50px; height: 50px; background: rgb(${this.R},${this.G},${this.B},0.568);`
        );
        this.palco.appendChild(div);
    }

    colosaoBordas = () => {
        if(this.positionx + 50 >= larguraP){
            this.diretionx = -1;
        } else if(this.positionx <= 0){
            this.diretionx = 1;
        }
        if(this.positiony + 50 >= alturaP){
            this.diretiony = -1;
            this.R = Math.floor(Math.random() * 255);
            this.G = Math.floor(Math.random() * 255);
            this.B = Math.floor(Math.random() * 255);
        } else if(this.positiony <= 0){
            this.diretiony = 1;
            this.R = Math.floor(Math.random() * 255);
            this.G = Math.floor(Math.random() * 255);
            this.B = Math.floor(Math.random() * 255);
        }
        larguraP = palco.offsetWidth;
        alturaP = palco.offsetHeight;
    }

    controler = () => {
        this.colosaoBordas();
        this.valx = Math.floor(Math.random() * 2) + 0.5;
        this.valy = Math.floor(Math.random() * 2) + 0.5;
        this.positionx += this.diretionx * this.valx;
        this.positiony += this.diretiony * this.valy;
        this.me.setAttribute(
            "style",
            `left: ${this.positionx}px; top: ${this.positiony}px; width: 50px; height: 50px; background: rgb(${this.R},${this.G},${this.B},0.568);`
        );
    }


}

new obj(palco);
