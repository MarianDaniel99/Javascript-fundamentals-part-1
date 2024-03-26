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