const container1 = document.querySelector("#container1");
const btnC = [...document.querySelectorAll(".curso")];

console.log(container1.hasChildNodes());
console.log(btnC[0].hasChildNodes());

console.log(btnC[0].children.length > 0 ? "Este elemento possui elementos filhos" : "Este elemento não possui elementos filhos");

console.log(btnC[0].parentNode.parentNode.parentNode.firstElementChild);

// console.log(container1.lastElementChild);
