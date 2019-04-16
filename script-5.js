"use strict";
/* --- Generic --- */
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
// Generic Type
// echo2 takes a parameter of type T and returns the same type T
var echo2 = echo; // It works because echo() - above - returns the parameters it receives
console.log(echo2("Something")); // Something
