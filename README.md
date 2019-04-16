# typescript-toolset

TypeScript is a wrapper language that can only be run in the development mode, not in production.

## Installation

`sudo npm i -g typescript`

## Commands

One shot:
- `tsc file.js`: compiles the TS file into JS

Complete project:
- `tsc --init`: creates a config file to compile every TS files into JS ones
- `tsc`: compiles every TS files found into JS ones

Specific case:
- `tsc script-3.ts --outFile script-3.js`: compiles the file that contains namespaces (see section Namespace)

## Config

In tsconfig.json:
- The option `"noEmitOnError": true` will prevent .ts files to be compiled in .js if there's any error.
- The option `"sourceMap": true` will allow us to debug TypeScript code in the browser's developer tools.

See complete options: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

## Compiler

See complete options: https://www.typescriptlang.org/docs/handbook/compiler-options.html

## ES6 compatibility

See following chart: http://kangax.github.io/compat-table/es6/

## Examples

```js
// Array
let hobbies: any[] = ["Cooking", "Reading"];
hobbies = [100];
```

```js
// Tuples
let address: [number, string]  [4, "Street"];
```

```js
// enum
enum Color {
  Gray, // 0
  Green, // 1
  Blue, // 2
  Red, = 100, // 100
  Yellow, // 101
  Orange = 2, // 2
  Purple // 3
};
let myColor: Color = Color.Green;
console.log(myColor); // === 1
```

```js
// No return
function sayHello(): void {
  console.log("Hello!");
}
```

```js
// Number
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
```

```js
// Union types
let myRealAge: number | string | null = 99;
myRealAge = "99"
```

```js
// Function types
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply; // see above
console.log(myMultiply(5, 2)); // 10
```

```js
// Object types
let userData: { name: string, age: number} = {
  name: "Santiago",
  age: 69
};
```

```js
// Custom types / Type aliases for complex objects
type Complex = {data: number[], output: (all: boolean) => number[]};
let complex: Complex = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[] {
    return this.data;
  };
}
```

## Class

### Abstract

Abstract classes cannot be instantiated but can only be inherited by another class.

### Constructor

Declaring "right parameter: type" in the constructor is a shortcut for creating a property in the class and assigning a value to it:

```js
constructor(public name: string) {}
console.log(person.name); // result
```

is equal to

```js
public name: string;
constructor(name: string) {
  this.name = name;
}
console.log(person.name); // same result
```

### Inheritance

```js
class Santiago extends Person {
  name = "Santiago"; // overwrites the name property of the Person class
}
console.log(new Santiago()); // Santiago { name: "Santiago" }
```

### Readonly

```js
public readonly name: string; // Accessible but not mutable
```

### Static properties and methods

```js
class Math {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}
console.log(Math.PI); // Accessible without instantiating the Math class
console.log(Math.calcCircumference(6)); // Accessible without instantiating the Math class
```

### Singleton

```js
class Server {
  private static instance: Server;

  private constructor(public name: string) {}

  static getInstance() {
    if (!Server.instance) Server.instance = new Server("One server");
    return Server.instance;
  }
}
let server = Server.getInstance(); // get instance
console.log(server.name); // log name
server.name = "new name"; // overwrites it
```

## Namespace

Namespaces prevents poluting the global scope.

```js
namespace Circumference {
   const PI = 3.14;
   export const calculateCircumference = (diameter: number): number => diameter * PI; 
}
console.log(Circumference.calculateCircumference(3));
```

We can import several namespaces into one file:

```js
/// <reference path="math/circumference.ts" />
/// <reference path="math/surface.ts" />

console.log(Circumference.calculateCircumference(3));
```

And compile the file this way: `tsc filename.ts --outFile filename.js`
