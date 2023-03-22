function soma(...valores) {
    let nA = valores.length;
    let soma = 0;
    for (let i of valores) {
        soma += i;
    }
    return soma;
}

console.log(soma(2,2,10,30,20));