const contactList = document.querySelector("#contactList");
const btnSave = document.querySelector("#btnSave");
let contacts = [];

const R = (evt) => {
    contacts = contacts.filter((el) => {
        return el.nome != evt;
    });
};

let contato = {
    getAllContatos: function () {
        return contacts;
    },
    getContato: function (index) {
        return contacts[index];
    },
    addContato: function (newC, localDOM) {
        const cont = {
            name: newC.name,
            phone: newC.phone,
            email: newC.email,
        };

        contacts.push(cont);

        localDOM.innerHTML = "";

        contacts.map((el) => {
            const div = document.createElement("div");
            div.setAttribute("class", "contact");
            div.setAttribute("data-nome", el.name);
            const btn = document.createElement("button");
            btn.innerHTML = "Remove";
            btn.addEventListener("click", (evt) => {
                const remove = evt.target.parentNode.dataset.nome;
                R(remove);
            });
            const pName = document.createElement("p");
            pName.innerHTML = el.name;
            const pPhone = document.createElement("p");
            pPhone.innerHTML = el.phone;
            const pEMail = document.createElement("p");
            pEMail.innerHTML = el.email;
            div.appendChild(pName);
            div.appendChild(pPhone);
            div.appendChild(pEMail);
            div.appendChild(btn);
            localDOM.appendChild(div);
        });
    },
};

btnSave.addEventListener("click", (evt) => {
    const cont = {
        name: document.querySelector("#pName").value,
        phone: document.querySelector("#pTelephone").value,
        email: document.querySelector("#pEMail").value,
    };
    contato.addContato(cont, contactList);
});
