// Implemente um método que retorne um array filtrado, sem os itens passados por parâmetro.

// Entrada do método
// run([5, 4, 3, 2, 5], [5, 3])

// Resultado do método
// [4, 2]

const filtro = (n: number[], m: number[]): number[] => {
  return n.filter((item) => !m.includes(item));
};

console.log(filtro([5, 4, 3, 2, 5], [5, 3])); // [4, 2]
