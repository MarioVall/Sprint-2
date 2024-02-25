
// Excersisie 1

function processar(number,callback){

    callback(number);
}






//Exercise 2


function calculadora(num1, num2, callback){

    callback(num1, num2);
}


function sumaCallback(a, b){
    
    console.log(`La suma de los numero es: ${a + b}`)
}

calculadora(7, 8, sumaCallback);