/* --- Generics --- */

// const echo = (data: any) => { ---> DANGEROUS

// Better way

const echo = <T>(data: T) => data;

console.log(echo("This is a string")); // This is a string
console.log(echo("This is a string").length); // 16
console.log(echo(24)); // 24
// console.log(echo(24).length); // Error because property 'length' does not exist on number type
console.log(echo<number>(24)); // 24

// Built-in Generic

const testResults: Array<number> = [1.941, 2.33];
testResults.push(-2,78);
// testResults.push("test"); // Error

const printAll = <T>(args: T[]) => args.forEach(el => console.log(el));
printAll<string>(["Apple", "Banana"]);

// Generic Types

// echo2 takes a parameter of type T and returns the same type T
const echo2: <T>(data: T) => T = echo; // It works because echo() - above - returns the parameters it receives
console.log(echo2<string>("Something")); // Something

// Classes Types

class MyMap<T> {
  private map: {[key: string]: T} = {};

  // Retrieves the value of the provided key
  getItem = (key: string) => this.map[key];
  // Creates a new key-value pair
  setItem = (key: string, item: T): void => { this.map[key] = item; }

  // Removes all key-value pairs
  clear = (): void => { this.map = {}; }
  // Outputs key-value pairs
  printMap = (): void => {
    for (let key in this.map) {
      console.log(key, this.map[key]);
    }
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem('apples'));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Jesus");
stringMap.setItem('age', "33");
console.log(stringMap.getItem('age'));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
