const positionX = document.querySelector("#positionX");
const positionY = document.querySelector("#positionY");
const width = document.querySelector("#width");
const height = document.querySelector("#height");
const firstBox = document.querySelector("#firstBox");
const secondBox = document.querySelector("#secondBox");

firstBox.addEventListener("click", (evt) => {
    positionX.innerHTML = `PositionX: ${firstBox.getBoundingClientRect().x}`;
    positionY.innerHTML = `PositionY: ${firstBox.getBoundingClientRect().y}`;
    width.innerHTML = `Largura ${firstBox.getBoundingClientRect().width}`;
    height.innerHTML = `Altura ${firstBox.getBoundingClientRect().height}`;
});

secondBox.addEventListener("click", (evt) => {
    positionX.innerHTML = `PositionX: ${secondBox.getBoundingClientRect().x}`;
    positionY.innerHTML = `PositionY: ${secondBox.getBoundingClientRect().y}`;
    width.innerHTML = `Largura ${secondBox.getBoundingClientRect().width}`;
    height.innerHTML = `Altura ${secondBox.getBoundingClientRect().height}`;
});
