//Exercise 1



const numbers = [3, 4, 2, 4];
const newArr = numbers.map(square)

function square(num) {
  return num * num;
}

console.log(newArr);





//Exercise 2



const numbers1 = [1, 2, 3, 4];

const numPar = numbers1.filter(numero => numero % 2 === 0);

console.log(numPar);






//Exercise 3


const numbers2 = [1, 10, 8, 11];

const mayorDiez = numbers2.find(numero => numero > 10);

console.log(mayorDiez);




//Exercise 4


const numeros = [13, 7, 8, 21];

const sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(sumaTotal);