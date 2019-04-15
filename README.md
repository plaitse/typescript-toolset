# typescript-toolset

TypeScript is a wrapper language that can only be run in the development mode, not in production.

## Installation

`sudo npm i -g typescript`

## Commands

One shot:
- `tsc file.js`: compiles the TS file into JS

Complete project:
- `tsc --init`: creates a config file to compile every TS files into JS ones
- `tsc`: compile every TS files found into JS ones

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
// Complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[] {
    return this.data;
  };
}
```