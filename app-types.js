"use strict";
// inferred types
// string
var myName = 'Max';
// number
var myAge = 27;
// boolean
var hasHobbies = false;
// any
var something;
// explicit types
// string
var myRealName = 'Max';
// number
var myRealAge = 27;
// boolean
var hasRealHobbies = false;
// array
var hobbies = ['Cooking', 'Sports'];
// tuples
var address = ['Winding Way', 9];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["White"] = 1] = "White";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor + ' is the enum value of 2');
(function (Color) {
    Color[Color["Orange"] = 100] = "Orange";
    Color[Color["Yellow"] = 101] = "Yellow";
    Color[Color["Green"] = 102] = "Green";
})(Color || (Color = {}));
var myNewColor = Color.Yellow;
console.log(myNewColor + ' is the next enum value of 101');
// any
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log('Hello!');
}
sayHello();
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 5));
// function types
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(2, 5));
// objects
var userData = {
    name: 'Max',
    age: 27
};
console.log('My name is ' + userData.name);
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex1 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = '27';
// check types
var finalValue = 30;
if (typeof finalValue == 'number') {
    console.log('finalValue is a number');
}
// never
function neverReturns() {
    throw new Error('An error!');
}
// nullable types - "strictNullChecks" must be set to true in tsconfig.json
var cannotBeNull = 12;
// cannotBeNull = null;    causes an error
var canBeNull;
canBeNull = 12;
canBeNull = null;
// type assertion
var code1 = 123;
var employeeCode1 = code1;
console.log(typeof (employeeCode1));
var code2 = 123;
var employeeCode2 = code2;
console.log(typeof (employeeCode2));
