class Catt {
    constructor(name, usesLitter) {
        this._name = name;

        this._usesLitter = usesLitter;

        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get usesLitter() {
        return this._usesLitter;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior () {
        this._behavior++;
    }
}

class Animal {
    constructor(name) {
        this._name = name;

        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get behavior () {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}

class Catatac extends Animal {
    constructor(name, usesLitter) {
        super(name);

        this._usesLitter = usesLitter;
    }

    get usesLitter () {
        return this._usesLitter;
    }
}

const bryceCat = new Catatac('Bryce', false);

console.log(bryceCat._name);

class Dodog extends Animal {
    constructor(name) {
        super(name);
    }
}



class HospitalEmployee {
    constructor(name) {
        this._name = name;

        this._remainingVacationDays = 20;
    }

    get name () {
        return this._name;
    }

    get remainingVacationDays () {
        return this._remainingVacationDays;
    }

    takeVacationDays (daysOff) {
        this._remainingVacationDays -= daysOff;
    }

    static generatePassword () {
        return Math.floor(Math.random() * 10000);
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name, certifications);

        this._certifications = certifications;

    }

    get certifications () {
        return this._certifications;
    }

    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }
}

class Doctor extends HospitalEmployee {
    constructor(name, remainingVacationDays, insurance) {
        super(name, remainingVacationDays, insurance);

        this._name = name;

        this._remainingVacationDays = remainingVacationDays;

        this._insurance = insurance;
    }

    get name() {
        return this._name;
    }

    get remainingVacationDays () {
        return this._remainingVacationDays;
    }

    get insurance () {
        return this._insurance;
    }

    takeVacationDays(daysOff) {
        super.takeVacationDays(daysOff);
    }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

nurseOlynyk.takeVacationDays(5);

console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics');

console.log(nurseOlynyk.certifications);

class vampireSlayer {
    constructor(name) {
        this._name = name;

        this.behaviour = 0;
    }

    static generateName () {
        const names=['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];

        const randomNumber = Math.floor(Math.random()*5);

        return names[randomNumber];
    }
}

console.log(vampireSlayer.generateName());

const sally = new vampireSlayer('Sally');

//sally.generateName(); - this generates a type error.

