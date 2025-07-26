let halley = {
    //The key is '_name' and the value is 'Halley'.
    _name: 'Halley',

    //The key is '_behaviour' and the value is '0'.
    _behavior: 0,

    //Accessor
    get name() {
        return this._name;
    },

    //Accessor
    get behavior() {
        return this._behavior;
    },

    //Method
    incrementBehavior() {
        this._behavior++;
    }
}

console.log(halley._name);

//the accessor is not a function, so we don't add a pair of brackets () to 'name'.
console.log(halley.name);

console.log(halley.behavior);

class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }
    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior ++;
    }
}



