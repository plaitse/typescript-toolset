/* --- Classes --- */

// 1st example

class Car {
  private acceleration: number = 0;

  constructor(
    private name: string,
  ) {}

  public getAcceleration = (): number => this.acceleration;

  public honk = (): void => console.log('Tooooot!');
  public accelerate = (speed: number): void => { this.acceleration += speed; }
}

const car = new Car("BMW");
car.honk();
car.accelerate(10);
console.log(car.getAcceleration());

// 2nd example

abstract class BaseObject {
  constructor(
    protected width: number = 0,
    protected length: number = 0
  ) {}
}

class Rectangle extends BaseObject {
  constructor(
    public width: number,
    public length: number
  ) {
    super(width, length);
  }

  public calcSize = (): number => this.width * this.length;
}

const rectangle = new Rectangle(5, 3);
console.log(rectangle.calcSize());
