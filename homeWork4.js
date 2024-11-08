const basePerson = {
    logInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
};

const Person = Object.create(basePerson);
Person.name = "John";
Person.age = 30;

const Persone2 = Object.create(Person);
Person.name = "Jane";
Person.age = 22;

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.logInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    logInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class PersonThree extends Person {
    constructor(name, age) {
        super(name, age);
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

// Пример использования
const person = new PersonThree("Alice", 28);
person.logInfo(); // Выведет: Name: Alice, Age: 28
console.log(person.name); // Выведет: Alice
person.name = "Bob";
console.log(person.name); // Выведет: Bob

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;

//result = [4, 9]

function firstSum(arr, total) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === total) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}
// Big O is O(n²)

firstSum(arr, total)

