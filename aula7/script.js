const arrow = (...valores) => {
  const soma = (valor) => {
    let res = 0;
    for (v of valor)
      res += v;
      return res;
  };
  return soma(valores);
};

console.log(arrow(1, 2, 3, 4, 5));
