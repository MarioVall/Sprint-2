//Exercise 1

let array1 = ["moto", "coche", "avion", "tren"];

let array2 = ["rojo", "azul", "marron", "rosa"];

let array3 = [...array1, ...array2];

console.log(array3);



//Exercise 2


function suma(...nums) {
    return nums.reduce((a, b) => a + b, 0);
  }

  let resultado = suma(1, 5, 6, 2, 9, 6);

  console.log(resultado);