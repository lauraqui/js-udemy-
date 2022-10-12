"use strict";
// //////////////////////////////////////
//FUNCTIONS - declarations

// function logger() {
//   console.log("My name is Laura");
// }

// //calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

//  const appleJuice = fruitProcessor(5,0);
// console.log(fruitProcessor(5,0 ))

// const appleOrangeJuice = fruitProcessor(2,5);
// console.log(appleOrangeJuice);

// const num = Number('23');

// //////////////////////////////////////
//FUNCTION declaration vs. Expressions

//function declaration
// function calcAge1(birthYeah){
//     return 2037 - birthYeah;
// }
// const age1 = calcAge1(1991);

// // function expression
// const calcAge2 = function(birthYeah) {
//     return 2037 - birthYeah;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// //////////////////////////////////////
//ARROW FUNCTION

// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
//     // return retirement;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1999, 'Laura'));

// //////////////////////////////////////
//FUNCTIONS CALLING OTHER FUNCTIONS
// WE USE THIS WAY TO WHRITE THIS FUNCTION TO AVOID THE REPETITION!
// DRY - "Don't repeat yoursel!"=> the good way to whrite the code is reducing repetition always.

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//   return juice;
// }
// console.log(fruitProcessor(2,3))
// ;
////////////////////////////////////////////////////
//REVIEWING FUNCTIONS

// function calAge(birthYeah){
//     return 2037 - birthYeah;
// }

// const yearsUntilRetirement = (birthYeah, firstName) => {
//         const age = calAge(birthYeah);
//         const retirement = 65 - age;

// if(retirement > 0) {
//     console.log(`Laura retires in ${retirement} years`);
//     return retirement;
// } else{
//     console.log(`Laura has alredy retired`);
//     return -1;
// }
// }

//     console.log(yearsUntilRetirement(1999, 'Laura'));
//     console.log(yearsUntilRetirement(1950, 'Mike'));

////////////////////////////////////////////////////
//ARRAYS

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.lenght);
// console.log(friends[friends.lenght-1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']; => cannot change all array

// const firstName = 'Jonas';

// const jonas = [firstName, 'Schedtmann', 2037-1991, 'teacher', friends];

// console.log(jonas);
// console.log(jonas.lenght);

// //EXERCISE
//   function calcAge(birthYeah){
//     return 2037 - birthYeah;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// // calcAge(years); // this won't execute because cannot assign one array like argument. cannot to make operations with arrays
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.lenght - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0], calcAge(years[1]), calcAge(years[years.lenght - 1]))];
// console.log(ages);

////////////////////////////////////////////////////
//BASIC ARRAY OPERATIONS

// push method
// const friends = ['Michael', 'Steven', 'Peter'];
// const newLenght = friends.push('Laura');
// console.log(friends);
// console.log(newLenght);

//unshift method
// friends.unshift('John');
// console.log(friends);

// //pop method
// friends.pop(); //last
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// //shift method
// friends.shift(); //first
// console.log(friends);

// //method to find the elements position into array
// //indexOf
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob')); //this element dont exist so the console will return minus one

// //In ES6 have the INCLUDES method, that's find a element into array returning a boolean value
// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if(friends.includes('Peter')){
//     console.log('You have a friend called Peter');
// }

////////////////////////////////////////////////////
//INTRODUCTION TO OBJECTS
// const LauraArray = [
//     'Laura',
//     'Quixabeira',
//     2022 - 1999,
//     'front-end developer',
//     ['Rafaela', 'Isadora', 'Luisa']
// ];

// const laura ={
//     name: 'Laura',
//     lastName: 'Quixabeira',
//     age:  2022 - 1999,
//     job: 'front-end developer',
//     friends:['Rafaela', 'Isadora', 'Luisa']
// };

////////////////////////////////////////////////////
//DOT VS. BRACKET NOTATION
// recovering datas in the objects
// const laura ={
//     firstName: 'Laura',
//     lastName: 'Quixabeira',
//     age:  2022 - 1999,
//     job: 'front-end developer',
//     friends:['Rafaela', 'Isadora', 'Luisa']
// };
// console.log(laura);
// console.log(laura.lastName);
// console.log(laura['lastName']);

// const nameKey = 'Name';
// console.log(laura['first' + nameKey]);
// console.log(laura['last' + nameKey]);

// // console.log(laura.'first'+ nameKey); does not execute!

// const interestedIn = prompt('What do you want to know about Laura? Choose between firstName, lastName, age, job,a newFriends')

// if(laura[interestedIn]){
//     console.log(laura[interestedIn])
// }else{
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
// };

// laura.location = 'Brazil'
// laura['twitter'] = '@lquixabeiraa'
// console.log(laura);
// //Challenge name
// "Laura has 3 friends, and her best friend called Rafaela"

// console.log(`${laura.firstName} has ${laura.friends.lenght} , and her best friend called ${laura.friends[0]}`);

////////////////////////////////////////////////////
//OBJECT METHODS
// const laura ={
//     firstName: 'Laura',
//     lastName: 'Quixabeira',
//     birthYeah:  1999,
//     job: 'front-end developer',
//     friends:['Rafaela', 'Isadora', 'Luisa'],
//     hasDrivesLicense: true,

// // calcAge: function(){
// //     return 2022 - this.birthYeah;
// // }

// calcAge: function(){
//     console.log(this);
//     return 2022 - this.birthYeah;
// },

// getAswered: function(){
//     console.log(this);
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDrivesLicense ? 'a' : 'not'} drivers license`

// }
// }
// console.log(laura.calcAge());
// // console.log(laura['calcAge'](1999));

// console.log(laura.getAswered());

////////////////////////////////////////////////////
//ITERATION: THE FOR LOOP

// console.log('Lifting weights repetition 1')
// console.log('Lifting weights repetition 2')
// console.log('Lifting weights repetition 3')
// console.log('Lifting weights repetition 4')
// console.log('Lifting weights repetition 5')
// console.log('Lifting weights repetition 6')
// console.log('Lifting weights repetition 7')
// console.log('Lifting weights repetition 8')
// console.log('Lifting weights repetition 9')
// console.log('Lifting weights repetition 10')

//for loop keeps running while condition is TRUE
// for(let rep = 1; rep <=10; rep ++){
//     console.log(`Lifting weights repetition ${rep}`);
// }

////////////////////////////////////////////////////
//LOOPING ARRAYS, BREAKING AND CONTINUING

// const laura = [
//   "Laura",
//   "Quixabeira",
//   2022 - 1999,
//   "front-end developer",
//   ["Rafaela", "Isadora", "Luisa"],
//   true,
//   "São Paulo",
// ];

// const types = [];

// for (let i = 0; i < laura.length; i++) {
//   //READING FOR LAURA ARRAY
//   console.log(laura[i], typeof laura[i]);

//   //FILLING TYPES ARRAY
//   // types[i] = typeof laura[i];
//   types.push(typeof laura[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// //CONTINUE AND BREAK

// console.log('========= ONLY STRINGS ========');
// for (let i = 0; i < laura.length; i++) {

//     if(typeof laura[i] !== 'string') continue;

//   console.log(laura[i], typeof laura[i]);
// }

// console.log('========= BREAK WITH NUMBER ========');
// for (let i = 0; i < laura.length; i++) {

//     if(typeof laura[i] === 'number') break;

//   console.log(laura[i], typeof laura[i]);
// }

////////////////////////////////////////////////////
//LOOPING BACKWARDS ANS LOOPS IN LOOPS
// const laura = [
//   "Laura",
//   "Quixabeira",
//   2022 - 1999,
//   "front-end developer",
//   ["Rafaela", "Isadora", "Luisa"],
// ];

// for (let i = laura.lenght - 1; i >= 0; i--) {
//   console.log(laura[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`================== Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//   }
// }

////////////////////////////////////////////////////
//THE WHILE LOOP

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while(rep <= 10){
//     console.log(`WHILE: Lifting weights repetition ${rep}`);
//     rep ++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while(dice!==6){
//     console.log(`You rolled a ${dice}`);
//     dice= Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }
