//exercice page 2

//const vacationSpots = ["la mer","la montagne","le camping"]
// console.log(vacationSpots[0])
// console.log(vacationSpots[1])
// console.log(vacationSpots[2])

//exercice page 3

// for (let number=5; number<11; number++) {
//     console.log(number)
// }

//exercice page 4

// for (let number= 3; number >= 0;number--) {
//     console.log(number)
// }

//exercice page 5

// for(let i =0; i<vacationSpots.length;i++) {
//     console.log(`J'aimerai visiter ${vacationSpots[i]}`)
// }

//exercice page 6

const bobFollowers = ["Jean","Luna","Lou","Léo"];
const tinaFollowers = ["Lou","Marc","Léo"];
const mutualFollwers = [];

for(let b = 0; b<bobFollowers.length;b++) {
    for(let t = 0; t<tinaFollowers.length;t++) {
        if(bobFollowers[b] === tinaFollowers[t]) {
        mutualFollwers.push(tinaFollowers[t])
        }
    }
} 
console.log(mutualFollwers)