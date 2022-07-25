"use strict";
exports.__esModule = true;
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
var milesToMars = (kilometersToMars * milesPerKilometer);
var hoursToMars = (milesToMars / speedMph);
var daysToMars = (hoursToMars / 24);
// Code an output statement here (use a template literal):
// console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway) {
    var milesAway = (kilometersAway * milesPerKilometer);
    var hours = (milesAway / speedMph);
    return hours / 24;
}
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToMars)} days to get to Mars.`);
// console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to Moon.`);
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        var _this = this;
        this.milesPerKilometer = 0.621;
        this.getDaysToLocation = function (kilometersAway) {
            var milesAway = (kilometersAway * _this.milesPerKilometer);
            var hours = (milesAway / _this.speedMph);
            return hours / 24;
        };
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
var McWiggles = new Spacecraft("McWiggles", 17500);
// console.log(`${McWiggles.name} would take ${McWiggles.getDaysToLocation(kilometersToMars)} days to get to Mars.`)
// console.log(`${McWiggles.name} would take ${McWiggles.getDaysToLocation(kilometersToTheMoon)} days to get to Moon.`)
McWiggles.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
McWiggles.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
