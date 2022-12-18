"use strict";
console.log('=====Generator Function=====');
function* createFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let fibonacciGenerator = createFibonacciGenerator();
console.log(fibonacciGenerator); // Object [Generator] {}
console.log(fibonacciGenerator.next()); // { value: 0, done: false }
console.log(fibonacciGenerator.next()); // { value: 1, done: false }
console.log(fibonacciGenerator.next()); // { value: 1, done: false }
console.log(fibonacciGenerator.next()); // { value: 2, done: false }
console.log(fibonacciGenerator.next()); // { value: 3, done: false }
console.log(fibonacciGenerator.next()); // { value: 5, done: false }
console.log(fibonacciGenerator.next()); // { value: 8, done: false }
console.log(fibonacciGenerator.next()); // { value: 13, done: false }
function* createNumbers() {
    let n = 0;
    while (1) {
        yield n++;
    }
}
// let numbers = createNumbers();
// console.log(numbers.next()); // { value: 0, done: false }
// console.log(numbers.next()); // { value: 1, done: false }
// console.log(numbers.next()); // { value: 2, done: false }
console.log('=====Iterator=====');
let numbers = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n;
        }
    },
};
for (let a of numbers) {
    console.log(a);
}
let allNumbers = [...numbers];
console.log(allNumbers);
let [one, two, ...rest] = numbers;
console.log(one);
console.log(two);
console.log(rest);
console.log('=====Call Signature=====');
let log = (message, userId = 'Not signed in') => {
    let time = new Date().toISOString();
    console.log(time, message, userId);
};
log('hi');
console.log('=====Contextual Typing=====');
function times(f, n) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}
times((n) => console.log(n), 4);
console.log('=====Overloaded Function=====');
let reserve = (from, toOrDestination, destination) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
        console.log('편도');
        console.log('from', from);
        console.log('toOrDestination', toOrDestination);
        console.log('destination', destination);
    }
    else if (typeof toOrDestination === 'string') {
        console.log('왕복');
        console.log('from', from);
        console.log('toOrDestination', toOrDestination);
        console.log('destination', destination);
    }
};
reserve(new Date(), new Date(), '발리');
reserve(new Date(), '쿨리');
console.log('=====다형성=====');
let filter = (array, f) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (f(item)) {
            result.push(item);
        }
    }
    return result;
};
console.log(filter([1, 2, 3, 4], (_) => _ < 3));
console.log(filter(['a', 'b'], (_) => _ != 'b'));
