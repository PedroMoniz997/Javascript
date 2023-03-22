const object = document.querySelector("#object");
const btnStart = document.querySelector("#btnStart");
const btnStop = document.querySelector("#btnStop");

const init = () => {
    object.style.position = "relative";
    object.style.left = "0px";
    object.style.width = "100px";
    object.style.height = "40px";
    widthOBJ = parseInt(object.style.width);
    width = window.innerWidth - widthOBJ;
};

let dir = 1;
let Animation = null;
let width = null;
let widthOBJ = 0;

const moving = (diretion) => {
    if (diretion > 0) {
        if (parseInt(object.style.left) <= width) {
            object.style.left =
                parseInt(object.style.left) - 4 + 10 * diretion + "px";
            Animation = setTimeout(moving, 11, diretion);
        } else {
            clearTimeout(Animation);
            dir = -1;
            moving(-1);
        }
    } else if (diretion < 0) {
        if (parseInt(object.style.left) >= 0) {
            object.style.left =
                parseInt(object.style.left) + 10 * diretion + "px";
            Animation = setTimeout(moving, 20, diretion);
        } else {
            clearTimeout(Animation);
            dir = 1;
            moving(1);
        }
    }
};

btnStart.addEventListener("click", (evt) => {
    clearTimeout(Animation);
    moving(dir);
});

btnStop.addEventListener("click", (evt) => {
    clearTimeout(Animation);
});

window.addEventListener("load", init());
window.addEventListener("resize", () => {
    width = window.innerWidth - parseInt(object.style.width);
});

window.addEventListener("keydown", (evt) => {
    if (evt.code === "ArrowUp") {
        object.style.width = parseInt(object.style.width) + 10 + "px";
        object.style.height = parseInt(object.style.height) + 10 + "px";
    }
    if (evt.code === "ArrowDown") {
        object.style.width = parseInt(object.style.width) - 10 + "px";
        object.style.height = parseInt(object.style.height) - 10 + "px";
    }
    widthOBJ = parseInt(object.style.width);
    width = window.innerWidth - widthOBJ;
});
