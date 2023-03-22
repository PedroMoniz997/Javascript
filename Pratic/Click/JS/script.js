const main = document.querySelector("#main");

let b = [];

class bolas {
    constructor (positionx,positiony, Palco, arrayBolas) {
        this.tamanho = 20;
        this.positionx = positionx;
        this.positiony = positiony;
        this.palco = Palco;
        this.arrayBolas = arrayBolas;
        this.id = Date.now();
        this.DesignBals();
        this.me = document.getElementById(this.id);
    }

    DesignBals = () => {
        const div = document.createElement("div"); 
        div.setAttribute("id", this.id);
        div.setAttribute("class", "click");
        div.setAttribute("style", `left: ${this.positionx}px; top: ${this.positiony}px;`);
        this.palco.appendChild(div);
    }
}

window.addEventListener("mousemove", (evt) => {
    positionx = evt.clientX;
    positiony = evt.clientY;
    main.addEventListener("click", (evt) => {
        new bolas(positionx,positiony, main, b)
    })
});
