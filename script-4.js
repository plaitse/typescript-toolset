"use strict";
/* --- Interfaces --- */
var Person = /** @class */ (function () {
    function Person(firstName) {
        var _this = this;
        this.firstName = firstName;
        this.age = 12;
        this.height = 180; // New property
        this.getAge = function () { return _this.age; };
        this.greet = function (lastName) { return console.log("Hello I'm " + _this.firstName + " " + lastName); };
    }
    return Person;
}());
var person = new Person("Jojo");
person.greet("Jiji");
console.log(person.getAge());
