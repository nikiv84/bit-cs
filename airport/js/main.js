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
    var errorElement = document.getElementById("error");

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

    var passengerInfoElement = document.createElement("p");
    passengerInfoElement.innerHTML = passenger.getInfo();
    passengerInfo.appendChild(passengerInfoElement);
}