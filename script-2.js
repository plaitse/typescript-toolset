"use strict";
/* --- Class --- */
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
// 1st example
var Car = /** @class */ (function () {
    function Car(name) {
        var _this = this;
        this.name = name;
        this.acceleration = 0;
        this.getAcceleration = function () { return _this.acceleration; };
        this.honk = function () { return console.log('Tooooot!'); };
        this.accelerate = function (speed) { _this.acceleration += speed; };
    }
    return Car;
}());
var car = new Car("BMW");
car.honk();
car.accelerate(10);
console.log(car.getAcceleration());
// 2nd example
var BaseObject = /** @class */ (function () {
    function BaseObject(width, length) {
        if (width === void 0) { width = 0; }
        if (length === void 0) { length = 0; }
        this.width = width;
        this.length = length;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        var _this = _super.call(this, width, length) || this;
        _this.width = width;
        _this.length = length;
        _this.calcSize = function () { return _this.width * _this.length; };
        return _this;
    }
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle(5, 3);
console.log(rectangle.calcSize());
