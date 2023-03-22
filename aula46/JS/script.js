const url = document.querySelector("#url");
const btnGo = document.querySelector("#btnGo");

btnGo.addEventListener("click", (evt) => {
    window.location = url.value;
});
