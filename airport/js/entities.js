'use strict';

function Passenger(name, lastName, seat, category) {
    this.name = name;
    this.lastName = lastName;
    this.seat = seat;
    this.category = category;
};
Passenger.prototype.getInfo = function () {
    return this.name + " " + this.lastName + ",<br><span class='passinfo'>seat num: " + this.seat + ", category: " + this.category + "</span>";
};
function Flight(depart, dest, date) {
    this.depart = depart;
    this.dest = dest;
    this.date = date;
    this.listOfPassengers = [];
};
Flight.prototype.getInfo = function () {
    return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", " + this.depart + " - " + this.dest;
};
Flight.prototype.getDepartDest = function () {
    return this.depart + " - " + this.dest;
};
function Airport(name) {
    this.name = name;
    this.listOfFlights = [];
    this.numOfFlights = this.listOfFlights.length;
    this.numOfPassengers = this.passCount;
};
Airport.prototype.passCount = function() {
    var count = 0;
    for (var i = 0; i < this.listOfFlights.length; i++) {
        var thisFlight = this.listOfFlights[i];
        count += thisFlight.listOfPassengers.length;
    }
    return count;
}