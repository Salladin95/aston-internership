class Stack {
    constructor() {
        this.items = [];
    }

    // Добавить элемент в стек
    push(element) {
        this.items.push(element);
    }

    // Удалить элемент из стека
    pop() {
        return this.items.pop();
    }

    // Посмотреть последний элемент в стеке
    peek() {
        return this.items[this.items.length - 1];
    }

    // Проверить, пуст ли стек
    isEmpty() {
        return this.items.length === 0;
    }

    // Получить размер стека
    size() {
        return this.items.length;
    }
}

// Пример использования
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack.peek()); // 1
