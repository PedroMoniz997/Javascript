const pArray = document.querySelector("#array");
const vBtn = document.querySelector("#verificar-btn");
const resulted = document.querySelector("#resulted");

const arrayElements = [10, 17, 12, 15, 13];
pArray.innerHTML = "[" + arrayElements + "]";

vBtn.addEventListener("click", (event) => {
  const ret = arrayElements.some((el, ind) => {
    if (el < 18) {
      resulted.innerHTML = "Array não conforme na posição " + ind;
    }
    return el >= 18;
  });
  if (ret) {
    resulted.innerHTML = "Array conforme";
  }
});
