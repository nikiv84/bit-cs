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
    this.listOfFlights = [];
};
Flight.prototype.getInfo = function () {
    return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", " + this.depart + " - " + this.dest;
};
Flight.prototype.getDepartDest = function () {
    return this.depart + " - " + this.dest;
};