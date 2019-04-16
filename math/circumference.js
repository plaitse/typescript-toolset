"use strict";
var Circumference;
(function (Circumference) {
    var PI = 3.14;
    Circumference.calculateCircumference = function (diameter) { return diameter * PI; };
})(Circumference || (Circumference = {}));
