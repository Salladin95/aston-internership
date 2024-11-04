class Queue {
    constructor() {
        this.items = [];
    }

    // Добавить элемент в очередь
    enqueue(element) {
        this.items.push(element);
    }

    // Удалить элемент из очереди
    dequeue() {
        return this.items.shift();
    }

    // Посмотреть первый элемент в очереди
    front() {
        return this.items[0];
    }

    // Проверить, пуста ли очередь
    isEmpty() {
        return this.items.length === 0;
    }

    // Получить размер очереди
    size() {
        return this.items.length;
    }
}

const queue = new Queue();
queue.enqueue("Customer 1");
queue.enqueue("Customer 2");
queue.enqueue("Customer 3");

while (!queue.isEmpty()) {
    console.log(`${queue.dequeue()} is being served`);
}
// Вывод:
// Customer 1 is being served
// Customer 2 is being served
// Customer 3 is being served
