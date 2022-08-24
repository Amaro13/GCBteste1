//Implemente um método que possa criar um array baseado nos valores que foram passados para ele.
const repetir = (n: number, s: string): string[] => {
  let arr: string[] = [];

  for (let i = 0; i < n; i++) {
    arr = arr.concat(s);
  }

  return arr;
};

console.log(repetir(2, "i")); //[ 'i', 'i' ]
console.log(repetir(3, "i")); //[ 'i', 'i', 'i' ]
console.log(repetir(5, "i")); //[ 'i', 'i', 'i', 'i', 'i' ]
console.log(repetir(8, "i")); //['i', 'i', 'i','i', 'i', 'i','i', 'i']
