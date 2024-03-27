// JavaScript Fundamentals Part 1
//Values and variables 
let country = "Romania";
let continent = "Europe";
let population = 20;
console.log(country,continent,population);

//Data Types
let isIsland = false;
//let language;
let language = "romana";
console.log(typeof(country));
console.log(typeof(continent));
console.log(typeof(population));
console.log(typeof(language));

// Basic operators
console.log(population/2);
population ++;
console.log(population);
let populationFinlad = 6;
console.log(population>populationFinlad)

let averagePopulation = 33;
console.log(population<averagePopulation);
let description = 'Romania is in Europe, and its 20 million people speak romana';


//Equality Operators: == vs ===
// let numNeighbours = Number(prompt("How many neighbour countries does your contry have?"));
// if(numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) 
// {
//     console.log("More than 1 border!");
// } else {
//     console.log("Noborders")
// }

//Logical Operators
if(isIsland === false && population < 50 && language === "english") {
    console.log("You should live in Romania");
} else {
    console.log("Romania does not meet your criteria!");
}

//Temporarily change some variables in order to make the condition true
//I've assigned a value to language variable, in order to make the condition true.
if(isIsland === false && population < 50 && language === "romana") {
    console.log("You should live in Romania");
} else {
    console.log("Romania does not meet your criteria!");
}

//Strings and Template Literals
description = `${country} is in Europe, and its ${population} milion people speak ${language}`
console.log(description)

//Type Conversion and Coercion
console.log(5 + 6 + '4' + 9 - 4 - 2);
'9'-'5'  // 4
'19'-'13'+'17' // 617
'19' - '13' + 17 // 23
'123' < 57; //false
5 + 6 + '4' + 9 - 4 - 2;  //1143

if(population > 33) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`"${country}'s population is ${averagePopulation-population} milions below average"`)
}

//The switch statement 
switch (language) {
    case 'Chinese or mandarin' : if ( language === 'Chinese or mandarin') {
        console.log("MOST number of native speakers!")
    }
    break;
    case 'Spanish': if(language === 'Spanish'){
        console.log("2nd place in number of native speakers")
    }
    break;
    case 'English': if(language === 'English'){
        console.log("3rd place")
    }
    break;
    case 'Hindi': if(language === 'Hindi'){
        console.log("Number 4")
    }
    break;
    case 'Arabic': if(language === 'Arabic'){
        console.log("5th most spoken language")
    }
    break;
    default: console.log("Great language too :D")
}