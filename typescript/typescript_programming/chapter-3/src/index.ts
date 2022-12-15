// type Cat = { name: string; purrs: boolean };
// type Dog = { name: string; barks: boolean; wags: boolean };
// type CatOrDogOrBoth = Cat | Dog;
// type CatAndDog = Cat & Dog;

// let a: CatAndDog = {
//     name: '야옹이',
//     purrs: true,
//     barks: true,
//     wags: true,
// };

// let b: CatOrDogOrBoth = {
//     name: '멍멍이',
//     wags: true,
//     purrs: true,
// };

// b = {
//     name: '뭉뭉이',
//     barks: false,
//     purrs: false,
// };

// console.log('a', a);
// console.log('b', b);

let a = 1042;
let b = 'apples and oranges';
const c = 'pineapples';
let d = [true, true, false];
let e = { type: 'ficus' };
let f = [1, false];
const g = [3];
let h = null; // any
// let k: never = 4; // never는 말 그대로 예외를 던지거나 영원히 실행되는 등 절대 반환할 일이 없는 함수 타입이다.
let l: unknown = 4;
// let m = l * 2; // unknown 타입을 다른 타입으로 가정하여 다른 타입이 지원하는 기능을 활용할 수는 없음.
