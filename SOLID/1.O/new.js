"use strict";
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "type", {
        get: function () {
            return 'dog';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "makeSound", {
        get: function () {
            return 'Woef';
        },
        enumerable: false,
        configurable: true
    });
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Object.defineProperty(Cat.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "type", {
        get: function () {
            return 'cat';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "makeSound", {
        get: function () {
            return 'Miauw';
        },
        enumerable: false,
        configurable: true
    });
    return Cat;
}());
var Parrot = /** @class */ (function () {
    function Parrot() {
    }
    Object.defineProperty(Parrot.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "type", {
        get: function () {
            return 'parrot';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "makeSound", {
        get: function () {
            return 'I am a pirate';
        },
        enumerable: false,
        configurable: true
    });
    return Parrot;
}());
var Penguin = /** @class */ (function () {
    function Penguin() {
    }
    Object.defineProperty(Penguin.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Penguin.prototype, "type", {
        get: function () {
            return 'penguin';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Penguin.prototype, "makeSound", {
        get: function () {
            return 'no idea what sound they make';
        },
        enumerable: false,
        configurable: true
    });
    return Penguin;
}());
var Zoo = /** @class */ (function () {
    function Zoo() {
        this._animals = new Array();
    }
    Zoo.prototype.addAnimal = function (animal) {
        this._animals.push(animal);
    };
    Object.defineProperty(Zoo.prototype, "animals", {
        get: function () {
            return this._animals;
        },
        enumerable: false,
        configurable: true
    });
    return Zoo;
}());
var zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Penguin);
zoo.animals.forEach(function (animal) {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound + "<br>");
});
