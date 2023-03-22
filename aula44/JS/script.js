const eyes = [...document.querySelectorAll(".eye")];

let positionx = 0;
let positiony = 0;

window.addEventListener("mousemove", (evt) => {
    positionx = -evt.clientX;
    positiony = -evt.clientY;

    const rotation = (Math.atan2(positiony, positionx) * 180) / Math.PI;

    eyes.map((eye) => {
        eye.style.transform = "rotate(" + rotation + "deg)";
    });
});
