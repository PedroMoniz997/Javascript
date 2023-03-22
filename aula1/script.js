const player1 = {
    nome: "Moniz",
    energia: 100,
    vida: 3,
    chacra: 100
}
const player2 = {
    nome: "Antonio",
    energia: 50,
    vida: 2,
    força: 60
}
const player3 = {
    ...player1,
    ...player2
}

var n1 = [10, 20, 30, 40]
var n2 = [50, 60, 70]
var n3 = [n1, n2]

//console.log("n1:" + n1)
//console.log("n2:" + n2)
//console.log("n3:" + n3)
console.log(player3)