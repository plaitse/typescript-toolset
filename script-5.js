"use strict";
/* --- Generics --- */
// const echo = (data: any) => { ---> DANGEROUS
// Better way
var echo = function (data) { return data; };
console.log(echo("This is a string")); // This is a string
console.log(echo("This is a string").length); // 16
console.log(echo(24)); // 24
// console.log(echo(24).length); // Error because property 'length' does not exist on number type
console.log(echo(24)); // 24
// Built-in Generic
var testResults = [1.941, 2.33];
testResults.push(-2, 78);
// testResults.push("test"); // Error
var printAll = function (args) { return args.forEach(function (el) { return console.log(el); }); };
printAll(["Apple", "Banana"]);
// Generic Types
// echo2 takes a parameter of type T and returns the same type T
var echo2 = echo; // It works because echo() - above - returns the parameters it receives
console.log(echo2("Something")); // Something
// Classes Types
var MyMap = /** @class */ (function () {
    function MyMap() {
        var _this = this;
        this.map = {};
        // Retrieves the value of the provided key
        this.getItem = function (key) { return _this.map[key]; };
        // Creates a new key-value pair
        this.setItem = function (key, item) { _this.map[key] = item; };
        // Removes all key-value pairs
        this.clear = function () { _this.map = {}; };
        // Outputs key-value pairs
        this.printMap = function () {
            for (var key in _this.map) {
                console.log(key, _this.map[key]);
            }
        };
    }
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem('apples'));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Jesus");
stringMap.setItem('age', "33");
console.log(stringMap.getItem('age'));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
