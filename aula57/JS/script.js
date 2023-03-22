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
};

btnLeft.addEventListener("click", (evt) => {
    clearInterval(Animation);
    Animation = setInterval(moving, 40, -1);
});

btnRight.addEventListener("click", (evt) => {
    clearInterval(Animation);
    Animation = setInterval(moving, 40, 1);
});

btnStop.addEventListener("click", (evt) => {
    clearInterval(Animation);
});

window.onload = init();
