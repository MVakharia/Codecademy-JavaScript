class School {
    constructor (name = "", level = "", numberOfStudents = 0) {
        this._name = name;

        this._level = level;

        this._numberOfStudents = numberOfStudents;
    }

    get name () {
        return this._name;
    }

    get level () {
        return this._level;
    }

    get numberOfStudents () {
        return this._numberOfStudents;
    }

    set numberOfStudents (newNumberOfStudents) {
        if(typeof newNumberOfStudents !== "number") {
            console.log("Invalid input: numberOfStudents must be set to a number.");
        }
        else {
            this._numberOfStudents = newNumberOfStudents;
        }
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} at the ${this.level} school level.`);
    }

    static pickSubstituteTeacher (substituteTeachers = [""]) {
        let rand = Math.floor(Math.random() * substituteTeachers.length);

        return substituteTeachers[rand];
    }
}

class PrimarySchool extends School {
    constructor(name = "", numberOfStudents = 0, pickupPolicy = "") {
        super(name, 'primary', numberOfStudents);

        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy () {
        return this._pickupPolicy;
    }
}

class MiddleSchool extends School {
    constructor(name = "", numberOfStudents = 0) {
        super(name, 'middle', numberOfStudents);
    }
}

class HighSchool extends School {
    constructor(name = "", numberOfStudents = 0, sportsTeams = [""]) {
        super(name, 'high', numberOfStudents);

        this._sportsTeams = sportsTeams;
    }

    get sportsTeams () {
        console.log(this._sportsTeams);

        return this._sportsTeams;
    }
}

//The super contains the properties that will be inherited that won't be initialised within the constructor.

let lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

console.log(lorraineHansbury.name);

console.log(lorraineHansbury.numberOfStudents);

console.log(lorraineHansbury.pickupPolicy);

School.pickSubstituteTeacher
(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden',
    'Jason Terry', 'Manu Ginobli']);

let alSmith = new HighSchool
('Al E. Smith',
    415,
    ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.quickFacts();

console.log(alSmith.sportsTeams);