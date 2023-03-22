const container1 = document.querySelector("#container1");
const container2 = document.querySelector("#container2");
const btn = document.querySelector("#btntransferir");
const allElements = [...document.querySelectorAll(".curso")];

allElements.map((el) => {
  el.addEventListener("click", (e) => {
    const corse = e.target;
    corse.classList.toggle("select");
  });
});

btn.addEventListener("click", () => {
  const transferir = [...document.querySelectorAll(".select")]
  transferir.map((el) => {
    container2.appendChild(el);
  });
  const voltar = [...document.querySelectorAll(".curso:not(.select)")];
  voltar.map((el) => {
    container1.appendChild(el);
  });
});
