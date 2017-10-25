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
};

Person.prototype.getAge = function () {
    return new Date().getFullYear() - this.date.getFullYear();
};

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
};

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
};

BettingPlace.prototype.getData = function () {
    return this.address.street + ", " + this.address.postCode + " " + this.address.city + ", sum of all bets: " + this.allBets() + " eur";
};

function BettingHouse(competition) {
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.totalNumOfPlayers = 0;
};

BettingHouse.prototype.addBettingPlace = function (bettingPlace) {
    this.listOfBettingPlaces.push(bettingPlace);
    this.totalNumOfPlayers += bettingPlace.listOfPlayers.length;
    this.countRS = 0;
};

BettingHouse.prototype.getData = function () {
    var output = '';
    output += this.competition + ", " + this.listOfBettingPlaces.length + " betting places, " + this.totalNumOfPlayers + " bets:"
    for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
        var betPlace = this.listOfBettingPlaces[i];
        output += "\n\t" + betPlace.getData();
        for (var j = 0; j < this.listOfBettingPlaces[i].listOfPlayers.length; j++) {
            var player = this.listOfBettingPlaces[i].listOfPlayers[j];
            output += "\n\t\t" + player.getData();
            if (player.country.name.toLowerCase() === "serbia") {
                this.countRS++;
            }
        }
    }
    output += "\nThere are " + this.countRS + " bets on Serbia.";
    return output;
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

    function createPerson(name, surname, dob) {
        return new Person(name, surname, new Date(dob));
    };

    function createCountry(countryName, odds, continent) {
        return new Country(countryName, odds, continent);
    };

    function createAddress(countryName, city, zip, street, num) {
        return new Address(countryName, city, zip, street, num);
    };

    function createPlayer(person, betAmnt, country) {
        return new Player(person, betAmnt, country);
    };

    function createBettingPlace(address) {
        return new BettingPlace(address);
    };

    function createBettingHouse(competition) {
        return new BettingHouse(competition);
    }


    var countryRS = createCountry("Serbia", 100, Continent.EU);
    var address01 = createAddress(countryRS, "Beograd", 11000, "Nemanjina", 4);
    var address02 = createAddress(countryRS, "Beograd", 11000, "Kneza Milosa", 15);
    var player01 = createPlayer(createPerson("Ivan", "Nikolic", "Nov 15 1984"), 250, countryRS);
    var player02 = createPlayer(createPerson("Marija", "Nikolic", "Jan 14 1991"), 70, countryRS);
    var player03 = createPlayer(createPerson("Pera", "Peric", "Mar 04 1975"), 120, countryRS);
    var player04 = createPlayer(createPerson("Mihajlo", "Stojkovic", "Oct 31 1985"), 375, countryRS);
    var betPlace01 = createBettingPlace(address01);
    var betPlace02 = createBettingPlace(address02);
    betPlace01.addPlayer(player01);
    betPlace01.addPlayer(player02);
    betPlace02.addPlayer(player03);
    betPlace02.addPlayer(player04);
    var betHouse = createBettingHouse("Football World Cup Winner");
    betHouse.addBettingPlace(betPlace01);
    betHouse.addBettingPlace(betPlace02);

    console.log(betHouse.getData());
})();

