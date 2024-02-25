//Exercise 5

const promesaSaludo = new Promise((solution) => {
    setTimeout(() => {
        solution("Hola, mon.");
    }, 2000);
});


async function promesaSaludo2() {

    try {
        let saludo = await promesaSaludo;
        console.log(saludo);
    } catch (error) {
        console.error(`Error aocurred`(error));
    }
}

promesaSaludo2();