const object = document.querySelector("#objects");

const computador = {
    nome: "ASUS",
    CPU: "i12",
    RAM: "32GB",
};

const pc = Object.assign({}, computador);

pc.CPU;

const arrayPC = [
    {
        nome: "ASUS",
        CPU: "i12",
        RAM: "64GB",
    },
    {
        nome: "HP",
        CPU: "i9",
        RAM: "16GB",
    },
    {
        nome: "DELL",
        CPU: "i3",
        RAM: "8GB",
    },
    {
        nome: "TOSHIBA",
        CPU: "i10",
        RAM: "32GB",
    },
];

object.innerHTML = JSON.stringify(arrayPC);
