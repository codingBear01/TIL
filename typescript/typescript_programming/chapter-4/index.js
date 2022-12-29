"use strict";
// console.log('=====Generator Function=====');
Object.defineProperty(exports, "__esModule", { value: true });
// function* createFibonacciGenerator() {
//     let a = 0;
//     let b = 1;
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }
// let fibonacciGenerator = createFibonacciGenerator();
// console.log(fibonacciGenerator); // Object [Generator] {}
// console.log(fibonacciGenerator.next()); // { value: 0, done: false }
// console.log(fibonacciGenerator.next()); // { value: 1, done: false }
// console.log(fibonacciGenerator.next()); // { value: 1, done: false }
// console.log(fibonacciGenerator.next()); // { value: 2, done: false }
// console.log(fibonacciGenerator.next()); // { value: 3, done: false }
// console.log(fibonacciGenerator.next()); // { value: 5, done: false }
// console.log(fibonacciGenerator.next()); // { value: 8, done: false }
// console.log(fibonacciGenerator.next()); // { value: 13, done: false }
// function* createNumbers(): IterableIterator<number> {
//     let n = 0;
//     while (1) {
//         yield n++;
//     }
// }
// // let numbers = createNumbers();
// // console.log(numbers.next()); // { value: 0, done: false }
// // console.log(numbers.next()); // { value: 1, done: false }
// // console.log(numbers.next()); // { value: 2, done: false }
// console.log('=====Iterator=====');
// let numbers = {
//     *[Symbol.iterator](): IterableIterator<number> {
//         for (let n = 1; n <= 10; n++) {
//             yield n;
//         }
//     },
// };
// for (let a of numbers) {
//     console.log(a);
// }
// let allNumbers = [...numbers];
// console.log(allNumbers);
// let [one, two, ...rest] = numbers;
// console.log(one);
// console.log(two);
// console.log(rest);
// console.log('=====Call Signature=====');
// type Log = (message: string, userId?: string) => void;
// let log: Log = (message, userId = 'Not signed in') => {
//     let time = new Date().toISOString();
//     console.log(time, message, userId);
// };
// log('hi');
// console.log('=====Contextual Typing=====');
// function times(f: (index: number) => void, n: number) {
//     for (let i = 0; i < n; i++) {
//         f(i);
//     }
// }
// times((n) => console.log(n), 4);
// console.log('=====Overloaded Function=====');
// type Reserve = {
//     (from: Date, to: Date, destination: string): void;
//     (from: Date, destination: string): void;
// };
// let reserve: Reserve = (
//     from: Date,
//     toOrDestination: Date | string,
//     destination?: string
// ) => {
//     if (toOrDestination instanceof Date && destination !== undefined) {
//         console.log('편도');
//         console.log('from', from);
//         console.log('toOrDestination', toOrDestination);
//         console.log('destination', destination);
//     } else if (typeof toOrDestination === 'string') {
//         console.log('왕복');
//         console.log('from', from);
//         console.log('toOrDestination', toOrDestination);
//         console.log('destination', destination);
//     }
// };
// reserve(new Date(), new Date(), '발리');
// reserve(new Date(), '쿨리');
// console.log('=====다형성=====');
// type Filter = {
//     <T>(array: T[], f: (item: T) => boolean): T[];
// };
// let filter: Filter = (array, f) => {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         let item = array[i];
//         if (f(item)) {
//             result.push(item);
//         }
//     }
//     return result;
// };
// console.log(filter([1, 2, 3, 4], (_) => _ < 3));
// console.log(filter(['a', 'b'], (_) => _ != 'b'));
// let promise = new Promise<number>((resolve) => resolve(45));
// promise.then((result) => console.log(result * 4));
// console.log('=====제네릭 타입 별칭=====');
// type MyEvent<T> = {
//     target: T;
//     type: string;
// };
// type ButtonEvent = MyEvent<HTMLButtonElement>;
// let myEvent: MyEvent<HTMLButtonElement | null> = {
//     target: document.querySelector('button'),
//     type: 'click',
// };
// type TimedEvent<T> = {
//     event: MyEvent<T>;
//     from: Date;
//     to: Date;
// };
// function triggerEvent<T>(event: MyEvent<T>): void {}
// triggerEvent({
//     target: document.querySelector('button'),
//     type: 'mouseover',
// });
console.log('=====한정된 다형성=====');
// type TreeNode = {
//     value: string;
// };
// type LeafNode = TreeNode & {
//     isLeaf: true;
// };
// type InnerNode = TreeNode & {
//     children: [TreeNode] | [TreeNode, TreeNode];
// };
// let a: TreeNode = { value: 'a' };
// let b: LeafNode = { value: 'b', isLeaf: true };
// let c: InnerNode = { value: 'c', children: [b] };
// function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
//     return { ...node, value: f(node.value) };
// }
// let a1 = mapNode(a, (_) => _.toUpperCase());
// let b1 = mapNode(b, (_) => _.toUpperCase());
// let c1 = mapNode(c, (_) => _.toUpperCase());
// console.log('a1', a1); // a1 { value: 'A' }
// console.log('b1', b1); // b1 { value: 'B', isLeaf: true }
// console.log('c1', c1); // c1 { value: 'C', children: [ { value: 'b', isLeaf: true } ] }
// console.log('=====제한을 여러 개 적용한 한정된 다형성=====');
// type HasSides = { numberOfSides: number };
// type SidesHaveLength = { sideLength: number };
// function logPerimeter<Shape extends HasSides & SidesHaveLength>(s: Shape) {
//     console.log('s.numberOfSides', s.numberOfSides);
//     console.log('s.sideLength', s.sideLength);
//     console.log('logPerimeter', s.numberOfSides * s.sideLength);
//     return s;
// }
// type Suqare = HasSides & SidesHaveLength;
// let suqare: Suqare = { numberOfSides: 4, sideLength: 3 };
// logPerimeter(suqare);
// console.log('=====한정된 다형성으로 인수의 개수 정의하기=====');
// // function call(f: (...args: unknown[]) => unknown, ...args: unknown[]): unknown {
// //     return f(...args);
// // }
// function call<T extends unknown[], R>(f: (...args: T) => R, ...args: T): R {
//     console.log('f', f);
//     console.log('args', args);
//     return f(...args);
// }
// function fill(length: number, value: string): string[] {
//     console.log('length', length);
//     console.log('value', value);
//     return Array.from({ length }, () => value);
// }
// console.log(call(fill, 10, 'a'));
