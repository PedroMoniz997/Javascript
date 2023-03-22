// function* perguntas() {
//   const nome = yield "Qual o seu nome";
//   const esporte = yield "Qual o seu esporte favorito";
//   return "Seu nome é " + nome + " seu esporte favorito é " + esporte;
// }

// const itp = perguntas();

// console.log(itp.next().valeu);
// console.log(itp.next("Pedro").value);
// console.log(itp.next("AndBol").value);

function* contador() {
  let cont = 0;
  while (true) {
    yield cont++;
    if (cont > 10) {
      break;
    }
  }
}

const loop = contador();
for (let c of loop) {
  console.log(c);
}
