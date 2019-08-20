// interfaces with objects
interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
  greet(lastName: string): void;
}

function greetPerson(aPerson: NamedPerson) {
  console.log('Hello, ' + aPerson.firstName);
}

function changeName(aPerson: NamedPerson) {
  aPerson.firstName = 'Anna';
}

const aPerson: NamedPerson = {
  firstName: 'Max',
  hobbies: ['Cooking', 'Sports'],
  greet(lastName: string) {
    console.log('Hi, I am ' + this.firstName + ' ' + lastName);
  }
};

// greetPerson({ firstName: 'Max', age: 27 });  // not allowed as does not have greet method
changeName(aPerson);
greetPerson(aPerson);
aPerson.greet('Anything');

// interfaces with classes
class anotherPerson implements NamedPerson {
  firstName: string = '';
  lastName: string = '';
  greet(lastName: string) {
    console.log('Hi, I am ' + this.firstName + ' ' + lastName);
  };
}

const myPerson = new anotherPerson;
myPerson.firstName = 'Maximilian';
myPerson.lastName = 'Anything'
greetPerson(myPerson);
myPerson.greet(myPerson.lastName);

// interfaces with function types
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction : DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
  return (value1 + value2) * 2;
}

console.log(myDoubleFunction(10, 20));

// interface inheritence
interface PersonLocation extends NamedPerson {
  location: string;
}

const localPerson: PersonLocation = {
  location: 'FL',
  firstName: 'Max',
  greet(lastName: string) {
    console.log('Hello!');
  }
}

console.log(localPerson.firstName + ' lives in ' + localPerson.location);
