"use strict";
// arrow functions
var double = function (value) { return value * 2; };
console.log(double(10));
// default parameter values
var greeter = function (name) {
    if (name === void 0) { name = 'Max'; }
    return console.log("Hello, " + name);
};
greeter();
greeter("Anna");
// spread operator
var numbersArray = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbersArray));
// 
var newArray = [55, 20];
newArray.push.apply(newArray, numbersArray);
console.log(newArray);
// rest operator with arrays
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// rest operator with objects
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
