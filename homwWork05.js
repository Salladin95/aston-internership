let promiseTwo = new Promise((resolve, reject) => {
    resolve("a");
});

promiseTwo
    .then((res) => {
        return res + "b";
    })
    .then((res) => {
        return res + "с";
    })
    .finally((res) => {
        return res + "!!!!!!!";
    })
    .catch((res) => {
        return res + "d";
    })
    .then((res) => {
        console.log(res);
    });

// -> abc

function doSmth() {
    return Promise.resolve("123");
}

doSmth()
    .then(function (a) {
        console.log("1", a); // Выводит: 1 123
        return a;
    })
    .then(function (b) {
        console.log("2", b); // Выводит: 2 123
        return Promise.reject("321");
    })
    .catch(function (err) {
        console.log("3", err); // Выводит: 3 321
    })
    .then(function (c) {
        console.log("4", c); // Выводит: 4 undefined, так как `.catch` не возвращает значение
        return c;
    });

const arr = [10, 12, 15, 21];

arr.forEach((_, i) => {
    setTimeout(() => console.log(i), 3000 * (i + 1)); // Задержка увеличивается на 3 секунды для каждого индекса
});
