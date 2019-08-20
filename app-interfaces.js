"use strict";
function greetPerson(aPerson) {
    console.log('Hello, ' + aPerson.firstName);
}
function changeName(aPerson) {
    aPerson.firstName = 'Anna';
}
var aPerson = {
    firstName: 'Max',
    hobbies: ['Cooking', 'Sports'],
    greet: function (lastName) {
        console.log('Hi, I am ' + this.firstName + ' ' + lastName);
    }
};
// greetPerson({ firstName: 'Max', age: 27 });  // not allowed as does not have greet method
changeName(aPerson);
greetPerson(aPerson);
aPerson.greet('Anything');
// interfaces with classes
var anotherPerson = /** @class */ (function () {
    function anotherPerson() {
        this.firstName = '';
        this.lastName = '';
    }
    anotherPerson.prototype.greet = function (lastName) {
        console.log('Hi, I am ' + this.firstName + ' ' + lastName);
    };
    ;
    return anotherPerson;
}());
var myPerson = new anotherPerson;
myPerson.firstName = 'Maximilian';
myPerson.lastName = 'Anything';
greetPerson(myPerson);
myPerson.greet(myPerson.lastName);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var localPerson = {
    location: 'FL',
    firstName: 'Max',
    greet: function (lastName) {
        console.log('Hello!');
    }
};
console.log(localPerson.firstName + ' lives in ' + localPerson.location);
