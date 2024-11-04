function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

const boundLogger = logger.bind(obj);
boundLogger(); // Выведет: I output only external context: some value

logger.call(obj); // Выведет: I output only external context: some value

logger.apply(obj); // Выведет: I output only external context: some value
