//Implemente um método que retorne um array, sem valores duplicados.

// Entrada do método
// run([1, 2, 3, 3, 2, 4, 5, 4, 7, 3])

// Resultado do método
// [1, 2, 3, 4, 5, 7]

const filtro = (array: Number[]): Number[] => {
  return array.filter((value, index) => array.indexOf(value) === index);
};

console.log(filtro([1, 2, 3, 3, 2, 4, 5, 4, 7, 3])); // [1, 2, 3, 4, 5, 7]
