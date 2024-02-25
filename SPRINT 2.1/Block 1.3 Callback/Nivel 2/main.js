//Exercise 3


const waitGreet = (name, callback) =>{

    setTimeout(() => {
        callback(name);
    }, 2000);
};


waitGreet("Dani", name => {
    console.log(`Hola, ${name}!`);
});



//Exercise 4


const products = ["water", "wine", "soda"]

const processElements = (products, callback) => {

    for (let element of products) {
        callback(element);
    }

};

processElements(products, (element) => {

    console.log(element);
});