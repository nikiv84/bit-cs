'use strict';

var passengers = [];
var flights = [];
var nTesla = new Airport("Nikola Tesla");
var seats = [];

function createPassenger() {
    var passengerForm = document.getElementById("passenger");
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
    passengerInfo.innerHTML = "";

    if (seats.length >= 100) {
        errorElement.textContent = "Flight full! Sorry.";
        return;
    }
    errorElement.textContent = "";

    if (!passengerName || !passengerLastName || passengerCategoryOption == "none") {
        errorElement.textContent = "Error! Please try again!";
        return;
    }
    errorElement.textContent = "";

    for (var i = 0; i < seats.length; i++) {
        if (passengerSeatNum == seats[i]) {
            errorElement.textContent = "Error! Seat already taken!";
            return;
        }
    }
    errorElement.textContent = "";

    if (typeof passengerSeatNum != "number" || passengerSeatNum < 1 || !passengerSeatNum || passengerSeatNum > 100) {
        passengerSeatNum = Math.round(99 * Math.random() + 1);
    }


    for (var i = 0; i < seats.length; i++) {
        if (passengerSeatNum == seats[i]) {
            passengerSeatNum = Math.round(99 * Math.random() + 1);
            i = -1;
        }
    }
    var firstLastName = (passengerName + " " + passengerLastName).toLowerCase();

    for (var i = 0; i < passengers.length; i++) {
        var psngr = passengers[i];
        if (firstLastName == (passengers[i].name + " " + passengers[i].lastName).toLowerCase()) {
            errorElement.textContent = "Error! Passenger with that name already exists!";
            return;
        }
    }
    errorElement.textContent = "";

    var passenger = new Passenger(passengerName, passengerLastName, passengerSeatNum, passengerCategoryOption);

    passengers.push(passenger);
    seats.push(passengerSeatNum);

    selectPassengerOption.text = passenger.name + " " + passenger.lastName;
    selectPassenger.add(selectPassengerOption);
    selectPassengerOption.setAttribute('value', (passengers.length - 1));

    var passengerInfoElement = document.createElement("p");
    passengerInfoElement.innerHTML = "Passenger created:<br>" + passenger.getInfo();
    passengerInfo.appendChild(passengerInfoElement);
    passengerForm.reset();

}

function createFlight() {
    var flightForm = document.getElementById("flight");
    var departure = document.getElementById("departure").value.trim();
    var destination = document.getElementById("destination").value.trim();
    var flightDate = document.getElementById("fdate").value;
    var flightInfo = document.getElementById("flight-info");
    var errorElement = document.getElementById("errorflight");
    var selectFlight = document.getElementById("flights");
    var selectFlightList = document.getElementById("flightlist");
    var selectFlightOption = document.createElement("option");
    var selectFlightListOption = document.createElement("option");
    var btnAddFlight = document.getElementById("btn-addflight");
    var btnListFlights = document.getElementById("btn-listflights");
    flightInfo.innerHTML = "";

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
    selectFlightListOption.text = flight.getInfo();
    selectFlight.add(selectFlightOption);
    selectFlightList.add(selectFlightListOption);
    selectFlightOption.setAttribute('value', (flights.length - 1));
    selectFlightListOption.setAttribute('value', (flights.length - 1));

    var flightInfoElement = document.createElement("p");
    flightInfoElement.innerHTML = "Flight created:<br>" + flight.getInfo();
    flightInfo.appendChild(flightInfoElement);
    btnAddFlight.removeAttribute("disabled");
    btnListFlights.removeAttribute("disabled");

    flightForm.reset();
};

function addPassenger() {
    var passengerSelect = document.getElementById("passengers");
    var passengerOption = passengerSelect[passengerSelect.selectedIndex].value;
    var flightSelect = document.getElementById("flights");
    var flightOption = flightSelect[flightSelect.selectedIndex].value;
    var errorElement = document.getElementById("error-passflight");
    var passFlightInfo = document.getElementById("passflight-info");
    var addPassForm = document.getElementById("addpass");
    var passFlightInfoElement = document.createElement("p");

    passFlightInfo.innerHTML = "";

    errorElement.textContent = "";

    if (passengerOption == "none" || flightOption == "none") {
        errorElement.textContent = "Please select both person and flight."
        return;
    }
    errorElement.textContent = "";

    for (var i = 0; i < flights[flightOption].listOfPassengers.length; i++) {
        var psngr = flights[flightOption].listOfPassengers[i];
        if (psngr == passengers[passengerOption]) {
            errorElement.textContent = "Person already added to this flight."
            return;
        }
    }
    errorElement.textContent = "";

    flights[flightOption].listOfPassengers.push(passengers[passengerOption]);
    passFlightInfoElement.innerHTML =
        "One person added to flight: " + flights[flightOption].getInfo();
    passFlightInfo.appendChild(passFlightInfoElement);
    addPassForm.reset();
}

function addFlight() {
    var selectFlight = document.getElementById("flightlist");
    var selectFlightOption = selectFlight[selectFlight.selectedIndex].value;
    var errorElement = document.getElementById("error-addflight");
    var addFlightInfo = document.getElementById("addflight-info");
    var addFlightInfoElement = document.createElement("p");
    var addFlightForm = document.getElementById("addflight");

    addFlightInfo.textContent = "";

    if (selectFlightOption == "none") {

        errorElement.textContent = "Please select flight to be added."
        return;
    }
    errorElement.textContent = "";

    if (flights[selectFlightOption].listOfPassengers.length < 1) {
        errorElement.textContent = "Please add passengers to flight first."
        return;
    }
    errorElement.textContent = "";

    for (var i = 0; i < nTesla.listOfFlights.length; i++) {
        var flgt = nTesla.listOfFlights[i];
        if (flgt == nTesla.listOfFlights[selectFlightOption]) {
            errorElement.textContent = "Flight already added."
            return;
        }
    }
    errorElement.textContent = "";

    nTesla.listOfFlights.push(flights[selectFlightOption]);
    addFlightInfoElement.innerHTML =
        "One flight added: " + flights[selectFlightOption].getInfo();
    addFlightInfo.appendChild(addFlightInfoElement);
    addFlightForm.reset();
}

function airportInfo() {
    var flightTable = document.getElementById("flighttable");
    var airportInfoElement = document.getElementById("airportinfo");

    var output = "<thead><tr><th class='text-left' colspan='3'>Airport: " + nTesla.name +
        ", number of passengers: " + nTesla.numOfPassengers() + "</th></tr></thead>";

    output += "<tbody class='table-hover'>";

    for (var i = 0; i < nTesla.listOfFlights.length; i++) {
        output += "<tr>";
        output += "<th class='text-left flight-info' colspan='3'>" + nTesla.listOfFlights[i].getInfo() + "</th>";
        output += "</tr>";

        for (var j = 0; j < nTesla.listOfFlights[i].listOfPassengers.length; j++) {
            var psngr = nTesla.listOfFlights[i].listOfPassengers[j];
            output += "<tr>"
            output += "<td class='text- left'>" + psngr.name + " " + psngr.lastName + "</td>";
            output += "<td class='text- left'>" + psngr.category + "</td>";
            output += "<td class='text- left'>" + psngr.seat + "</td>";
            output += "</tr>";
        }
    }
    output += "</tbody>";
    flightTable.innerHTML = output;
    if (nTesla.listOfFlights.length >= 1) {
        airportInfoElement.classList.remove("hideme");
    }
}