/* --- Interfaces --- */

interface NamedPerson {
  firstName: string; // Mandatory
  age?: number; // Optional
  [propName: string]: any; // Unknown optional property name
  greet(lastName: string): void; // Mandatory
}

// Interface inheritance
interface AgedPerson extends NamedPerson {
  age: number;
}

class Person implements AgedPerson {
  public age: number = 12;
  public height: number = 180; // New property
  
  constructor(public firstName: string) {}
  
  public getAge = (): number => this.age;

  public greet = (lastName: string): void => console.log(`Hello I'm ${this.firstName} ${lastName}`);
}

const person = new Person("Jojo");
person.greet("Jiji");
console.log(person.getAge());
