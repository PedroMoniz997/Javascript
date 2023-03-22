const calc = document.querySelector("#container-principal");
const teclasNUM = [...document.querySelectorAll(".num")];
const teclasOP = [...document.querySelectorAll(".Op")];
const paragrafo = document.querySelector("#paragrafo");
const aba = document.querySelector("#container-aba");
const tvirgula = document.querySelector(".virgula");
const display = document.querySelector("#display");
const resultado = document.querySelector(".res");
const tCopy = document.querySelector("#Tcopy");
const tclear = document.querySelector("#Tc");

let sinal = false;
let decimal = false;

// Virgula
tvirgula.addEventListener("click", (evt) => {
    if (display.innerHTML == 0) {
        display.innerHTML = "";
    }
    if (decimal == false) {
        decimal = true;
        display.innerHTML += evt.target.innerHTML;
    }
});

// Mapeador dos numeros
teclasNUM.map((el) => {
    el.addEventListener("click", (evt) => {
        if (display.innerHTML == 0) {
            display.innerHTML = "";
        }
        display.innerHTML += evt.target.innerHTML;
        sinal = false;
    });
});

// Mapeador dos sinais
teclasOP.map((el) => {
    el.addEventListener("click", (evt) => {
        if (display.innerHTML == 0) {
            display.innerHTML = "";
        }
        if (!sinal) {
            sinal = true;
            if (evt.target.innerHTML == "x") {
                display.innerHTML += "*";
            } else {
                display.innerHTML += evt.target.innerHTML;
            }
        }
        decimal = false;
    });
});

// BTN Clear
tclear.addEventListener("click", (evt) => {
    display.innerHTML = 0;
    decimal = false;
    sinal = false;
});

// Resultado
resultado.addEventListener("click", (evt) => {
    decimal = false;
    sinal = false;
    const res = eval(display.innerHTML);
    display.innerHTML = res;
});

// BTN Copy
tCopy.addEventListener("click", (evt) => {
    navigator.clipboard.writeText(display.innerHTML);
    alert("Copiado para o Clipboard...");
});

// Aba Gaveta
aba.addEventListener("click", (evt) => {
    paragrafo.classList.toggle("none");
    calc.classList.toggle("exibir");
});
