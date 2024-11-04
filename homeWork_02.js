const counter = {
    count: 0,
    increment() {
        return ++this.count;
    },
    decrement() {
        return --this.count;
    }
};

function CounterConstructor() {
    this.count = 0;
    this.increment = function () {
        return ++this.count;
    };
    this.decrement = function () {
        return --this.count;
    };
}

const counter2 = new CounterConstructor();

class CounterClass {
    constructor() {
        this.count = 0;
    }

    increment() {
        return ++this.count;
    }

    decrement() {
        return --this.count;
    }
}

const counter3 = new CounterClass();
const counter4 = Object.create(counter)

const counterCopy1 = {...counter}
const counterCopy2 = Object.assign({}, counter)
const counterCopy3 = structuredClone(counter)
const counterCopy4 = JSON.parse(JSON.stringify(counter));

function makeCounter() {
    let count = 0;
    return () => ({ increment: () => ++count, decrement: () => --count })
}

const makeCounter2 = function() {
    let count = 0;
    return () =>  ({ increment: () => ++count, decrement: () => --count })
};

const makeCounter3 = () => {
    let count = 0;
    return () =>  ({ increment: () => ++count, decrement: () => --count })
};

function reverseStr(str) {
    return str.split("").reverse().join("");
}

const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 == null || obj2 == null) return false;
    const keys1 = Object.keys(obj1), keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;
};
