const array = [15, 25, 35, 45, 55, 65, 75, 85, 95, 105];
const arrayS = ["Pedro", "Moniz", "Pepe"];
const maior = array.filter((valor) => {
    if (valor > 18)
        return valor;
});
const string = arrayS.filter((valor) => {
    if (valor.length > 4)
        return valor;
});

console.log(array);
console.log(maior);

console.log(arrayS);
console.log(string);

// (valor,indece,array)