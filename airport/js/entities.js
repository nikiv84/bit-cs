'use strict';

function Passenger (name, lastName, seat, category) {
    this.name = name;
    this.lastName = lastName;
    this.seat = seat;
    this.category = category;
};
Passenger.prototype.getInfo = function () {
    return this.name + " " + this.lastName + ",<br><span class='passinfo'>seat num: " + this.seat + ", category: " + this.category + "</span>"; 
};