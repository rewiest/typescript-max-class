// let
let variable = 'test';
console.log(variable);
variable = 'another value';
console.log(variable);

// const
const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99;   can't change as it's a constant

// block scope
function reset() {
  let variable = null;
  console.log(variable);
};
reset();
console.log(variable);

// arrow functions
const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number): number => {
  return number1 * number2;
};
console.log(multiplyNumbers(10, 3));

const greet = (): void => console.log('Hello!');
greet();

const greetFriend = (friend: string) => console.log(friend);
greetFriend('Manu');

// default parameters
const countdown = (start: number = 10): void => {
  while (start > 0) {
    start--;
  }
  console.log('Done!', start);
};
countdown();

// spread operator
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers));

// rest operator
function makeArray(...args: number[]) {
  return args;
};
console.log(makeArray(1, 2, 6));

// rest operator with tuples
function printInfo(...info: [string, number]) {
  console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
};
printInfo('Max', 27);

// destructuring arrays
const myHobbies = ['Cooking', 'Sports'];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

// destructuring objects
const userInfo = {userName: 'Max', age: 27};
const{ userName, age } = userInfo;
console.log(userName, age);

const userAlias = {userName: 'Max', age: 27};
const{ userName: myAlias, age: myAliasAge } = userAlias;
console.log(myAlias, myAliasAge);

// template literals
const aName = 'Max';
const greeting = `This is a heading!
I'm ${aName}.
This is cool!`;
console.log(greeting);
