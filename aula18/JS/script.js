const pArray = document.querySelector("#array");
const sTxt = document.querySelector("#search-txt");
const sBtn = document.querySelector("#search-btn");
const resulted = document.querySelector("#resulted");

const arrayElements = ["Html", "Css", "Java Script", "Type Script", "React"];

pArray.innerHTML = "[" + arrayElements + "]";

sBtn.addEventListener("click", (event) => {
  arrayElements.find((el, ind) => {
    resulted.innerHTML = "Valor não encontrado";
    if (el.toUpperCase() === sTxt.value.toUpperCase()) {
      resulted.innerHTML =
        "O valor pesquisado é " + el + " e esta na posição " + ind;
      return el;
    }
  });
});
