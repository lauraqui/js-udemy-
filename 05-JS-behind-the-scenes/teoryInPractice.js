"strict mode";

// ==> SCOPING IN PRACTICE <==

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       //Creating NEW variable with same name as outer scope`s variable
//       const firstName = `Steven`;

//       //Reassingning outer scope`s variable
//       output = "NEW OUTPUT!";

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     //    console.log(add(2, 3));
//   }
//   printAge();

//   return age;
// }
// const firstName = `Jonas`;
// calcAge(1991);

// // ==> HOISTING AND TDZ IN PRACTICE <==

// // VARIABLES
// console.log(me);
// console.log(job);
// console.log(year);

// var me = "Jonas";
// let job = "teacher";
// const year = 1991;

// // FUNCTIONS

// console.log(addDec);
// console.log(addExpr);
// console.log(addArrow);

// function addDec(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };
// var addArrow = (a, b) => a + b;

// // EXAMPLE
// console.log(undefined);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All products deleted");
// }

// ==> THE THIS KEYWORD IN PRACTICE <==
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
