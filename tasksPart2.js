//Javascript fundamentals Part 2

//Functions
function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} milion people and its capital is ${capitalCity}`)
}

let countryRomania = describeCountry("Romania",20,"Bucharest");
let countrySpain = describeCountry("Spain",47,"Madrid");
let countryFrance = describeCountry("France",67,"Paris");

//Function Declaration vs Function Expressions
const populationOfWorld = 7900;
function percentageOfWorld1(country, population) {
    let percentageOfWorld = (population/populationOfWorld) *100
    console.log(`${country} has ${population} million people, so it's about ${percentageOfWorld}% of the world population`)
}

let percentageOfWorldChina = percentageOfWorld1("China",1441);
let percentageOfWorldRomania = percentageOfWorld1("Romania",20);
let percentageOfWorldFrance = percentageOfWorld1("France",67);


let percentageOfWorld2 = function percentageOfWorld1(country, population) {
    let percentageOfWorld = (population/populationOfWorld) *100
    console.log(`${country} has ${population} million people, so it's about ${percentageOfWorld}% of the world population`)
}

let percentageOfWorldItaly = percentageOfWorld2("Italy",59);
let percentageOfWorldJapan = percentageOfWorld2("Japan",125);
let percentageOfWorldSpain = percentageOfWorld2("Spain",47);

//Arrow Function
let percentageOfWorld3 = (country, population) => {
    let percentageOfWorld = (population/populationOfWorld) *100
    console.log(`${country} has ${population} million people, so it's about ${percentageOfWorld}% of the world population`)
}

let percentageOfWorldItalyArrow = percentageOfWorld3("Italy",59);
let percentageOfWorldJapanArrow = percentageOfWorld3("Japan",125);
let percentageOfWorldSpainArrow = percentageOfWorld3("Spain",47);
