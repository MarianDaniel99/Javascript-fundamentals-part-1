//Javascript Fundamentals Part 2

//Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} milion people and its capital is ${capitalCity}`;
}

let countryRomania = describeCountry("Romania",20,"Bucharest");
let countrySpain = describeCountry("Spain",47,"Madrid");
let countryFrance = describeCountry("France",67,"Paris");

console.log(countryRomania);
console.log(countrySpain);
console.log(countryFrance);

//Function Declaration vs Function Expressions
const populationOfWorld = 7900;
function percentageOfWorld1(population) {
   return(population/populationOfWorld) * 100
}

const percentageOfWorld2 = function (population) {
    return(population/populationOfWorld) * 100
}

//Function Declarations variables
let chinaPercentage = percentageOfWorld1(1441);
let romaniaPercentage = percentageOfWorld1(20);
let francePercentage = percentageOfWorld1(67);

console.log(`China represents ${chinaPercentage} of the world population`);
console.log(`Romania represents ${romaniaPercentage} of the world population`);
console.log(`France represents ${francePercentage} of the world population`);

//Function Expression variables
let italyPercentage = percentageOfWorld2(59);
let japanPercentage = percentageOfWorld2(125);
let spainPercentage = percentageOfWorld2(47);

console.log(`Italy represents ${italyPercentage} of the world population`);
console.log(`Japan represents ${japanPercentage} of the world population`);
console.log(`Spain represents ${spainPercentage} of the world population`);

// //Arrow Function
let percentageOfWorld3 = (population) => {
    return (population/populationOfWorld) *100
}

let italyPercentage2 = percentageOfWorld3(59);
let japanPercentage2 = percentageOfWorld3(125);
let spainPercentage2 = percentageOfWorld3(47);

console.log(italyPercentage2+"%");
console.log(japanPercentage2+"%");
console.log(spainPercentage2+"%");
 
//Functions Calling Other Functions
function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, so it's about ${percentage}% of the world population`;
}

const describeItaly = describePopulation("Italy",59);
const describeJapan = describePopulation("Japan",125);
const describeChina = describePopulation("China",1441);

console.log(describeItaly);
console.log(describeJapan);
console.log(describeChina);

//Introduction to Array
let populations = [125,59,20,1441];
console.log(populations.length == 4);

let percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);

//Basic Array Operations (Methods)
let neighbours = ["Bulgaria","Serbia","Ucraina","Ungaria","Moldova"];
neighbours.push("Utopia");
neighbours.pop();

if(!neighbours.includes("Germany")){
    console.log("Probably not a central European country :D");
} else {
    console.log("Germany is included in the array!");
}


let indexToReplace = neighbours.indexOf("Moldova");
if(indexToReplace >= 0) {
    neighbours[indexToReplace] = "Republic of Moldova"
}
console.log(neighbours);

//Iteration: The for Loop
for(let i =1; i<=50; i++){
    console.log(`Voter number ${i} is curently voting`);
}

//Looping Arrays, Breaking and Continuing 
let percentage2 = [];
for(let i=0; i<populations.length;i++){
    percentage2.push(percentageOfWorld1(populations[i]));
}
console.log(percentage2);

const compareArrays = (percentages, percentage2) => {
    if(percentages.length !== percentage2.length){
        return false;
    } else {
        for(let i=0; i<percentages.length; i++){
            if(percentages[i] !== percentage2[i]){
                return false;
            } else {
                return true;
            }
        }
    }
}
if(compareArrays(percentages, percentage2))
console.log("The arrays have the same elements !");

// Looping Backwards and Loops in Loops
const listOfNeighbours = [["Canada","Mexico"],["Spain"],["Poland","Sweden","Ukraine"]];
for(let i=0; i<listOfNeighbours.length;i++){
    let countries = listOfNeighbours[i];
    for(let j=0;j<countries.length;j++){
        console.log("Neighbour:", countries[j]);
    }
}

//The while Loop
let percentage3 = [];
let i = 0;
while(i<populations.length){
    percentage3.push(percentageOfWorld1(populations[i]));
    i++;
}
console.log(percentage3);

const compareArrays2 = (percentages, percentage3) => {
    if(percentages.length !== percentage3.length){
        return false;
    } else {
        let i =0;
        while(i<percentages.length){
            if(percentages[i] !== percentage3[i]){
                return false;
            } 
            i++;
        }
        return true;
    }
}
if(compareArrays2(percentages, percentage3))
console.log("The arrays have the same elements !");

//Objects & Dot vs Bracket Notation

let myCountry = {
    country:'Japan',
    capital: 'Tokyo',
    language: 'japanse',
    population: 125,
    neighbours: [["Korea"],["Russia"],["China"]],
    describe: function describeCountry () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital} `
    },
    checkIsland: function isIsland(){
       this.isIsland = this.neighbours.length === 0 ? true : false;
    }
}
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital} `);
myCountry.population += 2;
myCountry["population"] -= 2;

//Object Methods 
console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.isIsland);