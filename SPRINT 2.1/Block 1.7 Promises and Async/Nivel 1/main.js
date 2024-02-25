//Exercise 1



const promesaSaludo = new Promise((solution) => {
    setTimeout(() => {
        solution("Hola, mon.");
    }, 2000);
});








//Exercise 2



promesaSaludo.then((resultado) => {
    console.log(resultado);
});





//Exercise 3



const promesaSaludos = (input) => {
    return new Promise((aceptado, rechazado) => {
        setTimeout(() => {
            if (input === "Hola"){
                aceptado("Hola, mon.");
            } else {
                rechazado("Hubo un error en el input.");
            }
        }, 2000);
    });
};





//Exercise 4




async function promesaSaludo2() {
    let saludo = await promesaSaludo;
    console.log(saludo);
};

promesaSaludo2();