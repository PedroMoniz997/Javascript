const box = document.querySelector("#box");

let map = new Map();

map.set("curso", "Javascript");
map.set(10, "React");
map.set(1, 100);
map.set("idade", 18);

if (map.has("channel")) {
    box.innerHTML = "A chave esta na coleção";
} else {
    box.innerHTML = "A chave não esta na coleção";
}

map.forEach((el) => {
    console.log(el);
});

// box.innerHTML += map.get("curso");