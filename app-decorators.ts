// class decorators
function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class DecoratedPerson {
  constructor() {
    console.log('Hi!');
  }
}

// a useful class decorator
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  }
}

@printable
class DecoratedPlant {
  name = 'Green Plant';
}

const decoratedPlant = new DecoratedPlant();
(<any>decoratedPlant).print(); 

// method and property decorators
function editable(value: boolean) {
  return function(target: any, propName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
  }
}

function overwritable(value: boolean): void | any {
  return function(target: any, propName: string) {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  }
}

class MasterProject {
  @overwritable(false)
  projectName: string;
  constructor(name: string) {
    this.projectName = name;
  }
  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

const masterProject = new MasterProject('Super Project');
masterProject.calcBudget();
masterProject.calcBudget = function() {
  console.log(2000);
};
masterProject.calcBudget();
console.log(masterProject);

// parameter decorators
function printedInfo(target: any, methodName: string, paramIndex: number) {
  console.log('Target: ', target);
  console.log('Method Name:', methodName);
  console.log('Param Index', paramIndex);
} 

class Course {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  printStudentNumbers(mode: string, @printedInfo printAll: boolean) {
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}

const course = new Course('Super Course');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
