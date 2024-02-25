//Exercise 4


let obj = {name:"Ona", age: 25, city:"Barcelona"};


for (const property in obj){
    console.log(`${property} : ${obj[property]}`)
}





//Exercise 5


const nums = [1, 2, 3, 4, 5, 6];


for(let num of nums){

    console.log(num);

    if(num === 5){
        break;
    }
};