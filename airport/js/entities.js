class Passenger {
    constructor(name, lastName, seat, category) {
        this.name = name;
        this.lastName = lastName;
        this.seat = seat;
        this.category = category;
    }
    getInfo() {
        return `${this.name} ${this.lastName},<br><span class='passinfo'>seat num: ${this.seat}, category: ${this.category}</span>`;
    }
};
class Flight {
    constructor(depart, dest, date) {
        this.depart = depart;
        this.dest = dest;
        this.date = date;
        this.listOfPassengers = [];
    }
    getInfo() {
        return `${this.date.getDate()}.${(this.date.getMonth() + 1)}.${this.date.getFullYear()},  ${this.depart} - ${this.dest}`;
    }

    getDepartDest() {
        return `${this.depart} - ${this.dest}`;
    }
}

class Airport {
    constructor(name) {
        this.name = name;
        this.listOfFlights = [];
        this.numOfFlights = this.listOfFlights.length;
        this.numOfPassengers = this.passCount;
    }
    passCount() {
        let count = 0;
        for (let i = 0; i < this.listOfFlights.length; i++) {
            let thisFlight = this.listOfFlights[i];
            count += thisFlight.listOfPassengers.length;
        }
        return count;
    }
}