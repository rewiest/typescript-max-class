// classes
class Car {
  acceleration: number = 0;

  constructor(public name: string) {}

  honk(): void {
    console.log('Toooooooooot!');
  }

  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed;
  }
};

const newCar = new Car('BMW');
newCar.honk();
console.log(newCar.acceleration);
newCar.accelerate(10);
console.log(newCar.acceleration);

// inheritence
class BaseObject {
  width: number = 0;
  length: number = 0;
};

class Rectangle extends BaseObject {
  calcSize(): number {
    return this.width * this.length;
  }
};

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());

// getters and setters
class Persons {
  private _firstName: string = '';

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = '';
    }
  }
};

let persons = new Persons();
console.log(persons.firstName);
persons.firstName = 'Ma';
console.log(persons.firstName);
persons.firstName = 'Maximilian';
console.log(persons.firstName);
