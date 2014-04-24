///<reference path="../knockout-2.2.1.js"/>
///<reference path="../jquery-1.7.1.js"/>
///<reference path="../qunit.js"/>
///<reference path="../Custom/HexCalcs.js"/>

var hexCalcVm;
var initialMeasure = 1;

module("HexCalc Tests", {
    setup: function() {
        hexCalcVm = new HexCalcApp.HexCalcViewModel(initialMeasure);
    }
});

test("Decimal Places Are Fixed At 4", function() {
    var number = Math.PI;
    var fixedNumber = hexCalcVm.fixNumber(number, 4);
    ok(fixedNumber, 4, "PI has been reduced to 4 decimal places");
});

test("Hex Calc View Model Is Not Undefined", function() {
    ok(hexCalcVm !== 'undefined', "View Model Is Not Undefined");
});

test("Initial Measure Is Derived Side Length", function () {
    equal(hexCalcVm.derivedSideLength(), initialMeasure, "Derived Side Length");
});

test("Apothem From Initial Measure", function() {
    equal(hexCalcVm.calcApothem(), 0.8660, "Calculated Apothem");
});

test("Perimeter From Initial Measure", function() {
    equal(hexCalcVm.calcPerimeter(), 6, "Calculated Perimeter");
});

test("Area From Initial Measure", function() {
    equal(hexCalcVm.calcArea(), 2.5981, "Calculated Area");
});

test("Vertex to Vertex From Initial Measure", function() {
    equal(hexCalcVm.calcVtoV(), 2, "Calculated Vertex to Vertex");
});

test("Center to Vertex From Initial Measure", function() {
    equal(hexCalcVm.calcCtoV(), 1, "Calculated Center to Vertex");
});

test("Side Legth From Initial Measure", function() {
    equal(hexCalcVm.calcSide(), 1, "Calculated Side Length");
});

test("Flat to Flat From Initial Measure", function() {
    equal(hexCalcVm.calcFtoF(), 1.7321, "Calculated Flat to Flat");
});

test("What is the current calc type?", function() {
    equal(hexCalcVm.currentCalcType(), "TEST", "Current Calc Type");
});