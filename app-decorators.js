"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// class decorators
function logged(constructorFn) {
    console.log(constructorFn);
}
var DecoratedPerson = /** @class */ (function () {
    function DecoratedPerson() {
        console.log('Hi!');
    }
    DecoratedPerson = __decorate([
        logged
    ], DecoratedPerson);
    return DecoratedPerson;
}());
// a useful class decorator
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var DecoratedPlant = /** @class */ (function () {
    function DecoratedPlant() {
        this.name = 'Green Plant';
    }
    DecoratedPlant = __decorate([
        printable
    ], DecoratedPlant);
    return DecoratedPlant;
}());
var decoratedPlant = new DecoratedPlant();
decoratedPlant.print();
// method and property decorators
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var MasterProject = /** @class */ (function () {
    function MasterProject(name) {
        this.projectName = name;
    }
    MasterProject.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(false)
    ], MasterProject.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], MasterProject.prototype, "calcBudget", null);
    return MasterProject;
}());
var masterProject = new MasterProject('Super Project');
masterProject.calcBudget();
masterProject.calcBudget = function () {
    console.log(2000);
};
masterProject.calcBudget();
console.log(masterProject);
// parameter decorators
function printedInfo(target, methodName, paramIndex) {
    console.log('Target: ', target);
    console.log('Method Name:', methodName);
    console.log('Param Index', paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printedInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course('Super Course');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
