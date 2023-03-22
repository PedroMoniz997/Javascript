const positionX = document.querySelector("#positionX");
const positionY = document.querySelector("#positionY");
const width = document.querySelector("#width");
const height = document.querySelector("#height");
const firstBox = document.querySelector("#firstBox");
const secondBox = document.querySelector("#secondBox");

firstBox.accessKey = "b";
secondBox.accessKey = "a";

function info(el) {
    positionX.innerHTML = `PositionX: ${el.getBoundingClientRect().x}`;
    positionY.innerHTML = `PositionY: ${el.getBoundingClientRect().y}`;
    width.innerHTML = `Largura ${el.getBoundingClientRect().width}`;
    height.innerHTML = `Altura ${el.getBoundingClientRect().height}`;
}

firstBox.addEventListener("click", (evt) => {
    info(evt.target);
});

secondBox.addEventListener("click", (evt) => {
    info(evt.target);
});