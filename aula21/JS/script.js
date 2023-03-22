const pArray = document.querySelector("#array");
const rBtn = document.querySelector("#reduce-btn");
const resulted = document.querySelector("#resulted");

const arrayElements = [1, 2, 3, 4, 5];
let ant = [];
let atu = [];

pArray.innerHTML = "[" + arrayElements + "]";

rBtn.addEventListener("click", (event) => {
  resulted.innerHTML = arrayElements.reduce((anterior, atual, indAtual) => {
    ant.push(anterior);
    atu.push(atual);
    return atual + anterior;
  });
  resulted.innerHTML += "<br/>V.Anterior: " + ant + "<br/>V.Atual: " + atu;
});
