const people = {
    nome: "",
    idade: 0,
    getNome: function () {
        return this.nome;
    },
    getIdade: function () {
        return this.idade;
    },
    setNome: function (nome) {
        return (this.nome = nome);
    },
    setIdade: function (idade) {
        return (this.idade = `${idade}Anos`);
    },
};

const resultado = document.querySelector("#resulted");
const nome = document.querySelector("#name");
const idade = document.querySelector("#old");
const btnAdd = document.querySelector("#btnAdd");

btnAdd.addEventListener("click", (evt) => {
    if (nome.value && idade.value) {
        const div = document.createElement("div");
        div.setAttribute("class", "pessoa");
        const p = people;
        div.innerHTML = `Nome: ${p.setNome(
            nome.value
        )} <br/> Idade: ${p.setIdade(idade.value)}`;
        resultado.appendChild(div);
        nome.value = "";
        idade.value = "";
    } else {
        alert("Campo de nome ou idade vazia");
    }
});
