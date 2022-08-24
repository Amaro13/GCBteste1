// Implemente um método que possa converter um array de arrays em um objeto com chave e valor

// Entrada do método
// run([["c",2],["d",4]])

// Resultado do método
// { c: 2, d: 4 }

const objeto = (n: [string, number][]): Object => {
  return Object.fromEntries(n);
};

console.log(
  objeto([
    ["c", 2],
    ["d", 4],
  ])
);
