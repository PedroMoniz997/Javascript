const btnAlert = document.querySelector("#btnAlert");
const btnConfirm = document.querySelector("#btnConfirm");
const btnPrompt = document.querySelector("#btnPrompt");

btnAlert.addEventListener("click", (evt) => {
    alert("Você clicou em Alert");
});

btnConfirm.addEventListener("click", (evt) => {
    confirm("Você clicou em Confirm");
});

btnPrompt.addEventListener("click", (evt) => {
    prompt("Você clicou em Confirm","Digite seu nome");
});
