//Implemente um método que remova os aninhamentos de um array de arrays para um array unico.

// Entrada do método
// run([1, 2, [3], [4, 5]])

// Resultado do método
// [1, 2, 3, 4, 5]

const filtro = (a: any): Number[] => {
  return a.flat();
};

console.log(filtro([1, 2, [3], [4, 5]])); // [1, 2, 3, 4, 5]
