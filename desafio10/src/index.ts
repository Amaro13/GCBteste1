// Implemente um método que encontre os valores comuns entre dois arrays.

// Entrada do método
// run([6, 8], [8, 9])

// Resultado do método
// [8]

const filtro = (a: Number[], b: Number[]): Number[] => {
  return a.filter((element) => b.includes(element));
};

console.log(filtro([6, 8], [8, 9])); //[8]
console.log(filtro([6, 9], [8, 9])); //[9]
console.log(filtro([6, 8], [6, 9])); //[6]
