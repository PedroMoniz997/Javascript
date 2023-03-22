const container1 = document.querySelector("#container1");
const element = [...document.querySelectorAll(".c1")];

container1.addEventListener("click", (e) => {
  console.log("clicou");
});

element.map((el) => {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
