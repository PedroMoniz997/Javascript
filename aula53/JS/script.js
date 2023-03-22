let nome = new String("Pedro Moniz Mayamba");
let nome2 = new String("Pedro Moniz Mayamb");

console.log(nome.charAt(2));

console.log(nome.charCodeAt(2));

console.log(nome.indexOf("P"));

console.log(nome.localeCompare(nome2));

console.log(nome.replace("Pedr", "Tod"));

console.log(nome.search("d"));

console.log(nome.slice(0, 2));

const arry = nome.split(" ");

console.log(arry)

console.log(nome.substring(0,5))

console.log(nome.substr(6,5))

console.log(nome.toUpperCase())

console.log(nome.toLowerCase(0,5))

console.log(nome.valueOf())

console.log(nome.startsWith("Pedro"))

console.log(nome.includes("Pedro"))

console.log(nome.repeat(3))

console.log(nome.codePointAt(0))
console.log(nome.codePointAt(1))
console.log(nome.codePointAt(2))
console.log(nome.codePointAt(3))
console.log(nome.codePointAt(4))

console.log(String.fromCodePoint(80,101,100))