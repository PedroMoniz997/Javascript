const object = document.querySelector("#object");
const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");
const btnStop = document.querySelector("#btnStop");

const init = () => {
    object.style.position = "relative";
    object.style.left = "0px";
};

Animation = null;

const moving = (diretion) => {
    object.style.left = parseInt(object.style.left) + 10 * diretion + "px";
    Animation = setTimeout(moving, 40, diretion);
};

btnLeft.addEventListener("click", (evt) => {
    clearTimeout(Animation);
    moving(-1)
});

btnRight.addEventListener("click", (evt) => {
    clearTimeout(Animation);
    moving(1)
});

btnStop.addEventListener("click", (evt) => {
    clearTimeout(Animation);
});

window.onload = init();
