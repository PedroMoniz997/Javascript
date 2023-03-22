const object = document.querySelector("#object");
const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");

const init = () => {
    object.style.position = "relative";
    object.style.left = "0px";
};

btnLeft.addEventListener("click", (evt) => {
    let position = parseInt(object.style.left);
    position -= 10;
    object.style.left = `${position}px`;
});

btnRight.addEventListener("click", (evt) => {
    let position = parseInt(object.style.left);
    position += 10;
    object.style.left = `${position}px`;
});

window.onload = init();
