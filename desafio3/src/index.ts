// Implemente um método que limpe os itens desnecessários de um array que foi passado para a função (false, undefined, strings vazias, zero, null)

const filtrararr = (n: any[]): any[] => {
  return n.filter(Boolean);
};

console.log(filtrararr([1, "", undefined, 0, 4, "ola"])); //[1, 4, 'ola']
