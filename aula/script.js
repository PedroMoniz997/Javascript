const obj = {
    nome: "pedro",
    preço: "inestimado",
    unidade: "1 em todo mundo"
}
const arry = [
    "Celular",
    "Fone de ouvidos",
    "Microfone",
    "Mouse"
]

// for (let valor in obj) {
//     console.log(obj[valor]);
// }

for (let valor of arry) {
    console.log(valor);
}