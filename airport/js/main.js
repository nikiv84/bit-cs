'use strict';

var passengers = [];
var flights = [];

function createPassenger() {
    var passengerName = document.getElementById("fname").value.trim();
    var passengerLastName = document.getElementById("lname").value.trim();
    var passengerSeat = document.getElementById("seatnum").value;
    var passengerCategory = document.getElementById("category");
    var passengerCategoryOption = passengerCategory[passengerCategory.selectedIndex].value;
    var passengerInfo = document.getElementById("passenger-info");
    var errorElement = document.getElementById("errorpass");
    var selectPassenger = document.getElementById("passengers");
    var selectPassengerOption = document.createElement("option");

    var passengerSeatNum = Number(passengerSeat);

    if (!passengerName || !passengerLastName || typeof passengerSeatNum != "number" || passengerSeatNum < 1 || passengerCategoryOption == "none") {
        errorElement.textContent = "Error! Please try again!";
        return;
    }
    errorElement.textContent = "";

    var firstLastName = (passengerName + " " + passengerLastName).toLocaleLowerCase();

    for (var i = 0; i < passengers.length; i++) {
        var psngr = passengers[i];
        if (firstLastName == (passengers[i].name + " " + passengers[i].lastName).toLocaleLowerCase()) {
            errorElement.textContent = "Error! Passenger with that name already exists!";
            return;
        }
    }
    errorElement.textContent = "";

    var passenger = new Passenger(passengerName, passengerLastName, passengerSeatNum, passengerCategoryOption);

    passengers.push(passenger);
    selectPassengerOption.text = passenger.name + " " + passenger.lastName;
    selectPassenger.add(selectPassengerOption);
    selectPassengerOption.setAttribute('value', (passengers.length - 1));

    var passengerInfoElement = document.createElement("p");
    passengerInfoElement.innerHTML = passenger.getInfo();
    passengerInfo.appendChild(passengerInfoElement);
}

function createFlight() {
    var departure = document.getElementById("departure").value.trim();
    var destination = document.getElementById("destination").value.trim();
    var flightDate = document.getElementById("fdate").value;
    var flightInfo = document.getElementById("flight-info");
    var errorElement = document.getElementById("errorflight");
    var selectFlight = document.getElementById("flights");
    var selectFlightOption = document.createElement("option");

    if (!departure || !destination || !flightDate) {
        errorElement.textContent = "Error! Please fill out all necessary fields!";
        return;
    }
    errorElement.textContent = "";

    var flightDepartDest = departure + " - " + destination;

    for (var i = 0; i < flights.length; i++) {
        var flgt = flights[i];
        if ((flightDepartDest.toLowerCase() == flights[i].getDepartDest().toLowerCase())
            && (new Date(flightDate).toDateString() == flights[i].date.toDateString())) {
            errorElement.textContent = "Error! Fight already created.";
            return;
        }
    }
    errorElement.textContent = "";

    var flight = new Flight(departure, destination, new Date(flightDate));
    flights.push(flight);

    selectFlightOption.text = flight.getInfo();
    selectFlight.add(selectFlightOption);
    selectFlightOption.setAttribute('value', (flights.length - 1));

    var flightInfoElement = document.createElement("p");
    flightInfoElement.innerHTML = flight.getInfo();
    flightInfo.appendChild(flightInfoElement);
}

function addPassenger() {
    console.log("Success!");

}