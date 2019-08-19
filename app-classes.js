"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// classes
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.type = '';
        this.age = 27;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('Old Guy');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
;
var person = new Person('Max', 'max');
console.log(person);
console.log(person.name, person.username);
person.printAge();
// inheritence
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    // name = 'Max';       // name is overwritten in the super() below instead of here
    function Max(username) {
        var _this = _super.call(this, 'Max', username) || this;
        _this.age = 31;
        return _this;
    }
    return Max;
}(Person));
;
var max = new Max('max');
console.log(max);
// getters and setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
;
var plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green Plant';
console.log(plant.species);
// static properties and methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// abstract classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
        this.budget = 0;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);
