const object = document.querySelector("#object");
const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");
const btnStop = document.querySelector("#btnStop");

const init = () => {
    object.style.position = "relative";
    object.style.left = "0px";
    object.style.width = "100px";
    width = window.innerWidth - parseInt(object.style.width);
};

let Animation = null;
let width = null;

const moving = (diretion) => {
    if (diretion > 0) {
        if (parseInt(object.style.left) < width) {
            object.style.left =
                parseInt(object.style.left) + (10 * diretion) + "px";
                Animation = setTimeout(moving, 40, diretion);
        } else {
            clearTimeout(Animation)
        }
    } else if (diretion < 0) {
        if (parseInt(object.style.left) >= 0) {
            object.style.left =
                parseInt(object.style.left) + (10 * diretion) + "px";
                Animation = setTimeout(moving, 40, diretion);
        } else {
            clearTimeout(Animation)
        }
    }
};

btnLeft.addEventListener("click", (evt) => {
    clearTimeout(Animation);
    moving(-1);
});

btnRight.addEventListener("click", (evt) => {
    clearTimeout(Animation);
    moving(1);
});

btnStop.addEventListener("click", (evt) => {
    clearTimeout(Animation);
});

window.addEventListener("load", init());
window.addEventListener("resize", () => {
    width = window.innerWidth - parseInt(object.style.width);
});
