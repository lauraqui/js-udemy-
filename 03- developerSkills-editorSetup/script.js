"use strict";

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of
//  temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be
// a sensor error."

// 1) Understanding the problem
// - What is temperature amplitude?
// Answer: Temperature amplitude is a difference between highest and lowest temp.Answer
// - How to compute the max and min temperatures ?
// What is the sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// -Subtract min from max (amplitude) and return it

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min; // that is the temperature amplitude
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

//  1) Understanding the problem
//  - With 2 arrays, shoukd we implement functionality twice?
//  Answer: NO! Just merge two arrays
//  2) Breaking up into sub-problems
//  - How to merge two arrays?

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
// console.log(temps);
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3,5,1],[9,0,5]);
// console.log(amplitudeNew);

//////////////////////////////////////////
// DEBUGGING FIXING ERRORS
// => Software bug: Defect or Problem in a coputer program.BAsically, any unexpected or unintended behavior of
// a computer program is a software bug. So, debugging is a process of finding, fixing and preventing bugs.

// INDENTIFY => Becoming aware that there is a bug .
// FIND => Isolating where exactly the bug is happening in code.
// FIX => Correct the bug.
// PREVENT => Preventing it from happening again.

//////////////////////////////////////////
//DEBUGGING WITH THE CONSOLE AND BREAKPOINTS

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",

// // C)FIX
// value: prompt("Degrees Celsius:"),
//     value: 10,
//   };


// // B) FIND
// console.table(measurement);

// console.log(measurement.value);
// console.warn(measurement.value);
// console.error(measurement.value);

//   const kelvin = measurement.value + 2073;
//   return kelvin;
// };

// A) IDENTIFY
// console.log(measureKelvin());

//Using a debugger 
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
// console.log(temps);
//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

    
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3,5,1],[9,0,5]);
// console.log(amplitudeBug);



