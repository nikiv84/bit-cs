export default class City {
    constructor(id, name, lat, lon, temp, humid) {
        this._id = id;
        this._name = name;
        this._lat = lat;
        this._lon = lon;
        this._temp = temp;
        this._humid = humid;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get lat() {
        return this._lat;
    }

    get lon() {
        return this._lon;
    }

    get temp() {
        return this._temp;
    }

    get humid() {
        return this._humid;
    }
}