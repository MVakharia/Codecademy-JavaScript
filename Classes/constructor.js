class Surgeon {
    constructor(name, department) {
        this.name = name;

        this.department = department;
    }
}

class Doog {
    constructor(name) {
        this.name = name;

        this.behavior = 0;
    }
}
const hallie = new Doog('Hallie');

console.log(hallie.name);

let surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');

let surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
