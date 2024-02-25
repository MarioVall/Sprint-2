//Act 1


const noms = ["Anna", "Bernat", "Clara"];

noms.forEach((nom) => {
    console.log(nom)
});




//Act 2



const noms2 = ["Anna", "Bernat", "Clara"];

for (let nom1 of noms2){
    console.log(nom1);
}





//Act 3




const numeross = [1, 2, 3, 4, 5, 6];

const parells = numeross.filter((numberr) => numberr % 2 === 0);

console.log(parells);