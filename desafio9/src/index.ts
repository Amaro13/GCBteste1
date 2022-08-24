// Implemente um método que divida um array por uma quantidade passada por parâmetro.

// Entrada do método
// run([1, 2, 3, 4, 5], 2)

// Resultado do método
// [[1, 2], [3, 4], [5]]

const filtro = (arr: Number[], a: number): Number[][] => {
  let newArray: Number[][] = [];
  let tempArray: Number[] = [];
  for (let i = 0; i < arr.length; i += a) {
    for (let b = 0; b < a; b += 1) {
      if (arr[i + b] != undefined) {
        tempArray.push(arr[i + b]);
      }
    }
    newArray.push(tempArray);
    tempArray = [];
  }
  return newArray;
};

console.log(filtro([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(filtro([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
console.log(filtro([1, 2, 3, 4, 5, 6], 2)); // [[1, 2], [3, 4], [5, 6]]
console.log(filtro([1, 2, 3, 4, 5, 6], 3)); // [[1, 2, 3], [4, 5, 6]]
