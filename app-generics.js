"use strict";
// simple generic
function echo(data) {
    return data;
}
console.log(echo('Max'.length));
console.log(echo(27));
console.log(echo({ name: 'Max', age: 27 }));
// better generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Max'.length));
console.log(betterEcho(27));
console.log(betterEcho({ name: 'Max', age: 27 }));
// built-in generics
var trialResults = [1.94, 2.33];
trialResults.push(-2.99);
console.log(trialResults);
// arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(['Apple', 'Banana']);
// generic types
var echo2 = betterEcho;
console.log(echo2('Something'));
// generic classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
