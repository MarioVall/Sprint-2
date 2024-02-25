// Exercise 3


const object1 = {

    property: "red"
};

const object2 = {...object1};


object2.property = "blue";


console.log(object1);
console.log(object2);




//Exercise 4



const numeros = [1, 2, 3, 4, 5, 6];


const [firstItem, secondItem, ...restItems] = numeros;

console.log(firstItem);
console.log(secondItem);
console.log(restItems);