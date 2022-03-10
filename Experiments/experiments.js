//--------------------------------------------------------------------------------------------------------------
console.log("----------------------------------------------------");
console.log("this is exercise 1");
const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

//--------------------------------------------------------------------------------------------------------------
// console.log('----------------------------------------------------');
// console.log('this is exercise 2');
//example of infinite (while) loop
// var i = true
// while(true) {
//    i++
//    console.log(i)
// }

//--------------------------------------------------------------------------------------------------------------
console.log("----------------------------------------------------");
console.log("this is exercise 3");
let friends = 0;
for (let i = 0; i < 10; i++) {
  friends++;
}
console.log(friends);

//--------------------------------------------------------------------------------------------------------------
console.log("----------------------------------------------------");
console.log("this is exercise 4");
//prinst 51 times 'a'
const character = "a";
const timesToRepeat = 50;
let answer = "";

for (let i = 0; i <= timesToRepeat; i++) {
  answer += character;
}

console.log(answer);

//--------------------------------------------------------------------------------------------------------------
console.log("----------------------------------------------------");
console.log("this is exercise 5");
const A = "A";
let F;

function doStuff(B) {
  console.log(B); //works, B parameter is still in scope
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  //console.log(D); //does not work, D was declared in that it statement block
  console.log(H); // works, H was declared outside the if statement
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A); // works, is deckared in global scope ---> A A A
  const G = "G";
}
console.log(E); // works, E is decalred outside while loop --> 3
//console.log(G); // does not work, declared inside while loop and the loop is over

doStuff("B");
//console.log(B); // does not work, B parameter expires afer the function is over
//console.log(C); //does not work, C was declared inside function and function is over
console.log(F); // works, F was declared in global scope

//outcome AAA 3 'reference error on G'
//if there is a referenceError, it will not console log the othet things!!!

//--------------------------------------------------------------------------------------------------------------
console.log("----------------------------------------------------");
console.log("this is exercise 6");
const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong",
];

// method 1 for loop
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i].toUpperCase());
}

// method 2 foreach loop
cities.forEach(function (city, index) {
  console.log(city);
});

//--------------------------------------------------------------------------------------------------------------
console.log("----------------------------------------------------");
console.log("this is exercise 7");
