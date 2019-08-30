// inferred types
// string
let myName = 'Max';
// number
let myAge = 27;
// boolean
let hasHobbies = false;
// any
let something;

// explicit types
// string
let myRealName: string = 'Max';
// number
let myRealAge: number = 27;
// boolean
let hasRealHobbies: boolean = false;

// array
let hobbies: string[] = ['Cooking', 'Sports'];

// tuples
let address: [string, number] = ['Winding Way', 9];

// enum
enum Color {
  Red,
  White,
  Blue
}
let myColor: Color = Color.Blue
console.log(myColor + ' is the enum value of 2');

enum Color {
  Orange = 100,
  Yellow,
  Green
}
let myNewColor: Color = Color.Yellow
console.log(myNewColor + ' is the next enum value of 101');

// any
let car: any = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);

// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log('Hello!');
}
sayHello();

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply(2, 5));

// function types
let myMultiply: (a: number, b: number) => number;
myMultiply = multiply;
console.log(myMultiply(2, 5));

// objects
let userData: { name: string, age: number } = {
  name: 'Max',
  age: 27
}
console.log('My name is ' + userData.name);

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],
  output: function (all: boolean): number[] {
    return this.data;
  }
}

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};
let complex1: Complex = {
  data: [100, 3.99, 10],
  output: function (all: boolean): number[] {
    return this.data;
  }
}
let complex2: Complex = {
  data: [100, 3.99, 10],
  output: function (all: boolean): number[] {
    return this.data;
  }
}

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = '27';

// check types
let finalValue = 30;
if (typeof finalValue == 'number') {
  console.log('finalValue is a number');
}

// never
function neverReturns(): never {
  throw new Error('An error!');
}

// nullable types - "strictNullChecks" must be set to true in tsconfig.json
let cannotBeNull = 12;
// cannotBeNull = null;    causes an error
let canBeNull: number | null;
canBeNull = 12;
canBeNull = null;

// type assertion
let code1: any = 123; 
let employeeCode1 = <number>code1; 
console.log(typeof(employeeCode1));

let code2: any = 123; 
let employeeCode2 = code2 as number; 
console.log(typeof(employeeCode2));
