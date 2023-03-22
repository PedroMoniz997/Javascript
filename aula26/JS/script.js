const box = document.querySelector("#box");

const consoles = ["Play Station", "XBox", "Nintendo", "SEGA"];

let ul = `<ul>`;
consoles.map((el) => {
    ul += `<li>${el}</li>`;
});
ul += `</ul>`

box.innerHTML = ul;