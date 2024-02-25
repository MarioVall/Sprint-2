//Exercise 4


const numeros = [4, 7, 22, 56, 8];

const printNumbers = (numeros) =>{
    for(let numero of numeros){
        (() => {
            console.log(numero);
        })();
    }
};

printNumbers(numeros);