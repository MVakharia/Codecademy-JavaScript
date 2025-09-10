class Doooog {
    constructor(name) {
        this._name = name;

        this._behavior = behavior;
    }

    get name() {
        return this._name;
    }

    get behavior () {
        return this._behavior;
    }

    incrementBehavior () {
        this._behavior++;
    }
}

class Cat {
    constructor(name) {
        this._name = name;
    }
}

const hailie = new Doooog('Hailie');

let nikko = new Doooog('Nikko');

nikko.incrementBehavior();

let bradford = new Doooog('Bradford');

console.log(nikko.behavior);

console.log(bradford.behavior);

const jasper = new Cat('Jasper');

class Sirjohnnie {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 28;

    }

    get name() {
        return this._name;
    }
    get department() {
        return this._department;
    }
    get remainingVacationDays () {
        return this._remainingVacationDays;
    }

    takeVacationDays(numberOfDays) {
        this._remainingVacationDays -= daysOff;
    }
}

const surgeonWoo = new Sirjohnnie('Woo Young-woo', 'Plastic');

const surgeonPark = new Sirjohnnie('Park Sang-il', 'Cardiac');

const surgeonRomero = new Sirjohnnie('Francisco Romero', 'Cardiovascular');

const surgeonJackson = new Sirjohnnie('Ruth Jackson', 'Orthopedics');

console.log(surgeonRomero.name);

surgeonRomero.takeVacationDays(3);

console.log(surgeonRomero.remainingVacationDays);