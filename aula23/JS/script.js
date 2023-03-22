const soma = document.querySelector("#soma");
const div = document.querySelector("#div");
const mult = document.querySelector("#mult");
const sub = document.querySelector("#sub");
const result = document.querySelector("#result");

const op = [
    () => {
        const val = [
            document.querySelector("#value1").value,
            document.querySelector("#value2").value,
        ];
        result.value = Number(val[0]) + Number(val[1]);
    },
    () => {
        const val = [
            document.querySelector("#value1").value,
            document.querySelector("#value2").value,
        ];
        result.value = Number(val[0]) / Number(val[1]);
    },
    () => {
        const val = [
            document.querySelector("#value1").value,
            document.querySelector("#value2").value,
        ];
        result.value = Number(val[0]) * Number(val[1]);
    },
    () => {
        const val = [
            document.querySelector("#value1").value,
            document.querySelector("#value2").value,
        ];
        result.value = Number(val[0]) - Number(val[1]);
    },
];

soma.addEventListener("click", op[0]);
div.addEventListener("click", op[1]);
mult.addEventListener("click", op[2]);
sub.addEventListener("click", op[3]);