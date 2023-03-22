/*
const c2 = document.querySelector("#c2");

c2.addEventListener("click", (e) => {
	const destack = e.target;
	destack.classList = "destack";
});
*/

const cursos = [...document.querySelectorAll(".curso")];

cursos.map((el) => {
  el.addEventListener("click", (e) => {
    const destack = e.target;
    destack.classList = "destack";
    console.log(el.innerHTML + " foi clicado");
  });
});

