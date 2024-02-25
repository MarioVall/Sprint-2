//Exercise 5


const numbers = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9];


const operations = (numbers) => numbers.filter(num => num >= 10).map(num => num*2).reduce((acu, num) => acu + num, 0);

console.log(operations(numbers));