//Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.

// Entrada do método
// run([1, 2, 3, 4],[1, 2, 3, 4])
// run([1, 2, 3, 4],[1, 2, 3, 5])

// Resultado do método
// true
// false

const filtro = (a: Number[], b: Number[]): Boolean => {
  return a.length === b.length && a.every((value, index) => value === b[index]);
};

console.log(filtro([1, 2, 3, 4], [1, 2, 3, 4])); // true
console.log(filtro([1, 2, 3, 4], [1, 2, 3, 5])); // false
