const number = document.querySelector("#number");

let promise = new Promise((resolve, reject) => {
    let resulted = true;
    let time = 3000;
    setTimeout(() => {
        if (resulted) {
            resolve("Deu tudo certo.");
        } else {
            reject("Deu tudo errado.");
        }
    }, time);
});

promise.then((retorno) => {
    number.innerHTML = retorno;
    number.classList.remove("erro");
    number.classList.add("ok")
});
promise.catch((retorno) => {
    number.innerHTML = retorno;
    number.classList.remove("ok");
    number.classList.add("erro");
});

number.innerHTML = "Processando...";
