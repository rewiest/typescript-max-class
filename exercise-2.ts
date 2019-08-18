// arrow functions
let double = (value: number): number => value * 2;
console.log(double(10));

// default parameter values
let greeter = (name: string = 'Max'): void => console.log("Hello, " + name);
greeter();
greeter("Anna");

// spread operator
let numbersArray = [-3, 33, 38, 5];
console.log(Math.min(...numbersArray));

// 
let newArray = [55, 20];
newArray.push(...numbersArray);
console.log(newArray);

// rest operator with arrays
let testResults = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults
console.log(result1, result2, result3);

// rest operator with objects
let scientist = {firstName: "Will", experience: 12};
let { firstName, experience } = scientist; 
console.log(firstName, experience);