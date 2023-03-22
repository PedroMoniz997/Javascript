let curses = ["Dev.Web", "Dev.Back-End", "Dev.Mobile","Dev.Game"]
let array = ["Pedro", "Moniz", "Mayamba", curses];
let box = document.querySelector("#box");

array.push("Cristiano", "Pedro", "Capitão");
array.pop();
array.pop();
array.pop();

array.unshift("Cristiano", "Pedro", "Capitão");
array.shift();
array.shift();
array.shift();

array.map((el) => {
    let p = document.createElement("p");
    p.innerHTML = el;
    box.appendChild(p);
});

console.log(array[3][0]);