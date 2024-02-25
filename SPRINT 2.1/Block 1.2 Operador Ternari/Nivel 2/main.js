// Ecercise 4


const number = 10;


const total = number > 0 ? console.log('Positive') : (number < 0 ? console.log('Negative') : console.log('Zero'));




const findMax = (a, b, c) =>{

    const max = a > b ? (a > c ? a : c) : (b > c ? b : c);
    return max;
}

const test = findMax(4, 9, 100);


console.log(test);


