const box = document.querySelector("#box");

let set = new Set(["set", "testing set", "test"]);

set.add("seting");
set.add("set");
set.add("test");
set.add("set");

set.forEach((el) => {
    box.innerHTML += el + "<br/>";
});

console.log(set);
