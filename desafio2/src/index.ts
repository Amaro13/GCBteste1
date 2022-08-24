//Implemente um método que inverta um array, sem utilizar métodos nativos (.map(), .forEach() ...).

// Existe um método no typescript que pode ser usado para inverter um array chamado reverse()
//Com método
const inverter1 = (n: number[]): number[] => {
  return n.reverse();
};

console.log(inverter1([1, 2, 3, 4])); //[4, 3, 2, 1]
console.log(inverter1([5, 6, 7, 8])); //[8, 7, 6, 5]
console.log(inverter1([8, 7, 6, 5])); //[5, 6, 7, 8]
console.log(inverter1([4, 3, 2, 1])); //[1, 2, 3, 4]

//Sem método conforme requisito do desafio
const inverter2 = (n: number[]): number[] => {
  let arr: number[] = [];

  for (let i = n.length - 1; i >= 0; i--) {
    arr.push(n[i]);
  }
  return arr;
};

console.log(inverter2([1, 2, 3, 4])); //[4, 3, 2, 1]
console.log(inverter2([5, 6, 7, 8])); //[8, 7, 6, 5]
console.log(inverter2([8, 7, 6, 5])); //[5, 6, 7, 8]
console.log(inverter2([4, 3, 2, 1])); //[1, 2, 3, 4]
