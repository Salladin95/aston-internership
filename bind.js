Function.prototype.myBind = function(context, ...args) {
    const fn = this;
    return function(...innerArgs) {
        return fn.apply(context, args.concat(innerArgs));
    };
};

// Пример использования
function logger(message) {
    console.log(`${message}: ${this.item}`);
}

const obj = { item: "some value" };
const boundLogger = logger.myBind(obj, "I output only external context");
boundLogger(); // Вывод: I output only external context: some value
