'use strict';

function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
};

function Person(name, surname, date) {
    this.name = name;
    this.surname = surname;
    this.date = date;
};

Person.prototype.getData = function () {
    return this.name + " " + this.surname + ", dob: " + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ".";
}
Person.prototype.getAge = function () {
    return new Date().getFullYear() - this.date.getFullYear();
}


function Player(person, betAmnt, country) {
    this.person = person;
    this.betAmnt = betAmnt;
    this.country = country;
    this.winAmount = this.betAmnt * this.country.odds;
};

Player.prototype.getData = function () {
    return this.country.name + ", " + this.winAmount + " eur, " + this.person.name + " " + this.person.surname + ", " + this.person.getAge() + " years";
};

function Address(country, city, postCode, street, number) {
    this.country = country;
    this.city = city;
    this.postCode = postCode;
    this.street = street;
    this.number = number;
};

Address.prototype.getData = function () {
    return this.street + " " + this.number + ", " + this.postCode + " " + this.city + ", " + this.country.name;
}

function BettingPlace(address) {
    this.address = address;
    this.listOfPlayers = [];
};

BettingPlace.prototype.addPlayer = function (player) {
    this.listOfPlayers.push(player);
};

BettingPlace.prototype.allBets = function () {
    var sumAllBets = 0;
    for (var i = 0; i < this.listOfPlayers.length; i++) {
        sumAllBets += this.listOfPlayers[i].winAmount;
    }
    return sumAllBets;
}
BettingPlace.prototype.getData = function () {
    return this.address.street + ", " + this.address.postCode + " " + this.address.city + ", sum of all bets: " + this.allBets + " eur";
};

function BettingHouse(competition, numOfPlayers) {
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.numOfPlayers = numOfPlayers;
};

var Continent = Object.freeze({
    EU: "Europe",
    AS: "Asia",
    AF: "Africa",
    SA: "South America",
    NA: "North America",
    AU: "Australia"
});



(function () {
    function createPlayer(name, surname, dob, betAmnt, country, continent, odds, city, zip, street, number){
        var newPerson = new Person(name, surname, new Date(dob));
        var newCountry = new Country(country, odds,continent);
        var newAddress = new Address(newCountry, city, zip, street, number);
        return new Player(newPerson, betAmnt, newCountry);
    };

    var player1 = createPlayer("Ivan", "Nikolic", "Nov 15 1984", 100, "Serbia", Continent.EU, 500, "Pozarevac", 12000, "Uzicka", 12);
    console.log(player1.getData());
})();

