// 'use strict';

let passengers = [];
let flights = [];
const nTesla = new Airport("Nikola Tesla");
let seats = [];

const createPassenger = () => {
    const passengerForm = document.getElementById("passenger");
    let passengerName = document.getElementById("fname").value.trim();
    let passengerLastName = document.getElementById("lname").value.trim();
    let passengerSeat = document.getElementById("seatnum").value;
    const passengerCategory = document.getElementById("category");
    let passengerCategoryOption = passengerCategory[passengerCategory.selectedIndex].value;
    const passengerInfo = document.getElementById("passenger-info");
    const errorElement = document.getElementById("errorpass");
    const selectPassenger = document.getElementById("passengers");
    const selectPassengerOption = document.createElement("option");
    let passengerSeatNum = Number(passengerSeat);
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

    for (let i = 0; i < seats.length; i++) {
        if (passengerSeatNum == seats[i]) {
            errorElement.textContent = "Error! Seat already taken!";
            return;
        }
    }
    errorElement.textContent = "";

    if (typeof passengerSeatNum != "number" || passengerSeatNum < 1 || !passengerSeatNum || passengerSeatNum > 100) {
        passengerSeatNum = Math.round(99 * Math.random() + 1);
    }


    for (let i = 0; i < seats.length; i++) {
        if (passengerSeatNum == seats[i]) {
            passengerSeatNum = Math.round(99 * Math.random() + 1);
            i = -1;
        }
    }
    let firstLastName = (passengerName + " " + passengerLastName).toLowerCase();

    for (let i = 0; i < passengers.length; i++) {
        let psngr = passengers[i];
        if (firstLastName == (passengers[i].name + " " + passengers[i].lastName).toLowerCase()) {
            errorElement.textContent = "Error! Passenger with that name already exists!";
            return;
        }
    }
    errorElement.textContent = "";

    const passenger = new Passenger(passengerName, passengerLastName, passengerSeatNum, passengerCategoryOption);

    passengers.push(passenger);
    seats.push(passengerSeatNum);

    selectPassengerOption.text = passenger.name + " " + passenger.lastName;
    selectPassenger.add(selectPassengerOption);
    selectPassengerOption.setAttribute('value', (passengers.length - 1));

    const passengerInfoElement = document.createElement("p");
    passengerInfoElement.innerHTML = "Passenger created:<br>" + passenger.getInfo();
    passengerInfo.appendChild(passengerInfoElement);
    passengerForm.reset();

}

const createFlight = () => {
    const flightForm = document.getElementById("flight");
    let departure = document.getElementById("departure").value.trim();
    let destination = document.getElementById("destination").value.trim();
    let flightDate = document.getElementById("fdate").value;
    const flightInfo = document.getElementById("flight-info");
    const errorElement = document.getElementById("errorflight");
    const selectFlight = document.getElementById("flights");
    const selectFlightList = document.getElementById("flightlist");
    const selectFlightOption = document.createElement("option");
    const selectFlightListOption = document.createElement("option");
    const btnAddFlight = document.getElementById("btn-addflight");
    const btnListFlights = document.getElementById("btn-listflights");
    flightInfo.innerHTML = "";

    if (!departure || !destination || !flightDate) {
        errorElement.textContent = "Error! Please fill out all necessary fields!";
        return;
    }
    errorElement.textContent = "";

    let flightDepartDest = departure + " - " + destination;

    for (let i = 0; i < flights.length; i++) {
        let flgt = flights[i];
        if ((flightDepartDest.toLowerCase() == flights[i].getDepartDest().toLowerCase())
            && (new Date(flightDate).toDateString() == flights[i].date.toDateString())) {
            errorElement.textContent = "Error! Fight already created.";
            return;
        }
    }
    errorElement.textContent = "";

    const flight = new Flight(departure, destination, new Date(flightDate));
    flights.push(flight);

    selectFlightOption.text = flight.getInfo();
    selectFlightListOption.text = flight.getInfo();
    selectFlight.add(selectFlightOption);
    selectFlightList.add(selectFlightListOption);
    selectFlightOption.setAttribute('value', (flights.length - 1));
    selectFlightListOption.setAttribute('value', (flights.length - 1));

    const flightInfoElement = document.createElement("p");
    flightInfoElement.innerHTML = "Flight created:<br>" + flight.getInfo();
    flightInfo.appendChild(flightInfoElement);
    btnAddFlight.removeAttribute("disabled");
    btnListFlights.removeAttribute("disabled");

    flightForm.reset();
};

const addPassenger = () => {
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

const addFlight = () => {
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

const airportInfo = () => {
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