"use strict";
// let
var variable = 'test';
console.log(variable);
variable = 'another value';
console.log(variable);
// const
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99;   can't change as it's a constant
// block scope
function reset() {
    var variable = null;
    console.log(variable);
}
;
reset();
console.log(variable);
// arrow functions
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) {
    return number1 * number2;
};
console.log(multiplyNumbers(10, 3));
var greet = function () { return console.log('Hello!'); };
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend('Manu');
// default parameters
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log('Done!', start);
};
countdown();
// spread operator
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max.apply(Math, numbers));
// rest operator
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
;
console.log(makeArray(1, 2, 6));
// rest operator with tuples
function printInfo() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
;
printInfo('Max', 27);
// destructuring arrays
var myHobbies = ['Cooking', 'Sports'];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
// destructuring objects
var userInfo = { userName: 'Max', age: 27 };
var userName = userInfo.userName, age = userInfo.age;
console.log(userName, age);
var userAlias = { userName: 'Max', age: 27 };
var myAlias = userAlias.userName, myAliasAge = userAlias.age;
console.log(myAlias, myAliasAge);
// template literals
var aName = 'Max';
var greeting = "This is a heading!\nI'm " + aName + ".\nThis is cool!";
console.log(greeting);
