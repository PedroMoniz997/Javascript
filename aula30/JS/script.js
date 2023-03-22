function People(name, old) {
    this.nome = name,
    this.idade = old,
    this.getNome = () => {
        return this.nome;
    },
    this.getIdade = () => {
        return `${this.idade}Anos`;
    },
    this.setNome = (name) => {
        this.nome = name;
    },
    this.setIdade = (old) => {
        this.idade = old;
    },
    this.info = () => {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log("----------------------");
    }
}

let people = [];

let resulted = document.querySelector("#resulted");
const btnAdd = document.querySelector("#btnAdd");
btnAdd.addEventListener("click", (evt) => {
    const nome = document.querySelector("#name");
    const idade = document.querySelector("#old");
    const p = new People(nome.value, idade.value);
    people.push(p);
    nome.value = "";
    idade.value = "";
    nome.focus();
    resulted.innerHTML = "";
    people.map((p) => {
        const div = document.createElement("div");
        div.setAttribute("class", "pessoa");
        div.innerHTML = `Nome: ${p.getNome()} <br/> Idade: ${p.getIdade()} <br/>`;
        div.innerHTML +="----------------------";
        resulted.appendChild(div);
    });
});
