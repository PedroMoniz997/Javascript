/*
let a, b, c, d;

[a, b, c, d] = ["Pedro","Moniz","Mayamba","Pedrinho"];

({ a, b, c, d } = {
    a: "Pedro",
    b: "Moniz",
    c: "Mayamba",
    d: "Pedrinho",
});

let array = [10, 20, 30, 40];
let [a, b, c, d] = array;
let [a, b = 0, c = 0, d = 0] = [10];

console.log(c);
console.log(d);
*/

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);
