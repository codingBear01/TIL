"use strict";
// npm i typescript
// npm i ts-node
function showItems(arr) {
    arr.forEach((item) => console.log(item));
}
showItems([1, 2, 3]);
const age = 30;
const isAdult = true;
const a = [1, 2, 3];
const a2 = [1, 2, 3];
const week1 = ['mon', 'tue', 'wed'];
const week2 = ['mon', 'tue', 'wed'];
console.log('-----Tuple-----');
/* Tuple - 인덱스별로 자료형이 다를 때 쓰임*/
let b;
b = [1, 'z'];
console.log('-----기본 자료형-----');
/* void, never */
// void: 함수의 반환값이 없을 때
function sayHello() {
    console.log('void');
}
// never: 항상 err를 반환하거나 infinite loop일 때
function showError() {
    throw new Error();
}
function infLoop() {
    while (true) { }
}
/* enum - 할당된 값들이 자동으로 1씩 증가함. 임의의 값을 할당하면 그 값부터 증가함.*/
var Os;
(function (Os) {
    Os[Os["Window"] = 0] = "Window";
    Os[Os["Ios"] = 1] = "Ios";
    Os[Os["Android"] = 2] = "Android";
})(Os || (Os = {}));
console.log('enum', Os.Window); // 0
console.log('enum', Os.Ios); // 1
console.log('enum', Os.Android); // 2
console.log('enum', Os[1]); // Ios
console.log('enum', Os['Ios']); // 1
let myOs;
myOs = Os.Window;
console.log('enum', myOs);
/* null, undefined */
const nullA = null;
const undB = undefined;
console.log('-----interface-----');
const user = {
    name: 'kang',
    age: 30,
    birthYear: 2000,
};
user.age = 10;
user.gender = 'male';
console.log(user);
