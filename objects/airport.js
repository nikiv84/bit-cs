'use strict';

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
};

Person.prototype.getData = function () {
    return this.name + " " + this.surname;
};

function Seat(number, category) {
    this.number = number || Math.round(90 * Math.random() + 10);
    this.category = category || 'e';
};

Passenger.prototype.getData = function () {
    if (this.seat.category.toUpperCase() == "B") {
        this.fullCategoryName = "business";
    } else if (this.seat.category.toUpperCase() == "E") {
        this.fullCategoryName = "economy";
    }
    return this.seat.number + ", " + this.fullCategoryName + ", " + this.person.getData();
};

function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
    this.fullCategoryName = '';
};

Flight.prototype.addPassenger = function (passenger) {
    for (var i = 0; i < this.listOfPassengers.length; i++) {
        var seat = this.listOfPassengers[i].seat.number;
        if (passenger.seat.number == seat) {
            throw new Error("Seat already taken");
        }
    }
    if (this.listOfPassengers.length > 100) {
        throw new Error("Flight overload.");
    }
    if (passenger.seat.category == "b") {
        this.businessPassengers++;
    }
    this.listOfPassengers.push(passenger);

};

Flight.prototype.getData = function () {
    var arr = this.relation.split(" - ");
    var output = '';
    var i = arr[0].length - 1;
    var k = arr[1].length - 1;
    var vowls = ["a", "e", "i", "o", "u"];
    for (var j = 0; j < vowls.length; j++) {
        if (arr[0].charAt(i).toLowerCase() === vowls[j]) {
            i--;
        }
        if (arr[1].charAt(k).toLowerCase() === vowls[j]) {
            k--;
        }
    }
    output = arr[0].charAt(0) + arr[0].charAt(i).toUpperCase() + " - " + arr[1].charAt(0) + arr[1].charAt(k).toUpperCase();

    return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ' ' + output + ', '
        + "business passengers: " + this.businessPassengers;
};


function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.listOfPassengers = [];
    this.businessPassengers = 0;
};

Airport.prototype.addFlight = function (flight) {
    this.listOfFlights.push(flight);
    this.totalNumOfPassengers += flight.listOfPassengers.length;
    this.totalNumOfBusinessPassengers += flight.businessPassengers;
};

Airport.prototype.getData = function () {
    var output = '';
    output += "Airport: " + this.name + ", total passengers: " + this.totalNumOfPassengers +
        ", number of business passengers: " + this.totalNumOfBusinessPassengers + "\n";
    for (var i = 0; i < this.listOfFlights.length; i++) {
        var flight = this.listOfFlights[i];
        output += "\t" + flight.getData() + "\n";
        for (var j = 0; j < flight.listOfPassengers.length; j++) {
            var passenger = flight.listOfPassengers[j];
            output += "\t\t" + passenger.getData() + "\n";
        }
    }
    return output;
};

function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
    this.totalNumOfPassengers = 0;
    this.totalNumOfBusinessPassengers = 0;
};


(function () {
    function createFlight(relation, date) {
        return new Flight(relation, new Date(date));
    }
    function createPassenger(name, surname, seatnum, seatcat) {
        var person = new Person(name, surname);
        var seat = new Seat(seatnum, seatcat);
        return new Passenger(person, seat);
    }
    var nTesla = new Airport();
    var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
    var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

    var passenger1 = createPassenger("John", "Snow", 1, "b");
    var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
    var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
    var passenger4 = createPassenger("Tyrion", "Lannister");
    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);

    nTesla.addFlight(flight1);
    nTesla.addFlight(flight2);

    console.log(nTesla.getData());

})();