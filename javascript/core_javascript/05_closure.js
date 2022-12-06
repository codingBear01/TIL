// const fruits = ['apple', 'banana', 'peach'];
// const $ul = document.createElement('ul');

// // const alertFruit = function (fruit) {
// //     alert(`your choice is ${fruit}`);
// //     console.log(this);
// //     // bind 없으면 callback 함수는 addEventListener에 종속되어 있으므로 this는 HTML element인 <li></li> 출력.
// //     // .bind(null, val)을 적용하면 this를 없애기 때문에 함수가 호출될 때 기본 this인 전역 객체 출력.
// // };

// const alertFruitBuilder = function (fruit) {
//     return function () {
//         alert(`your choice is ${fruit}`);
//         console.log(this); // <li></li>
//     };
// };

// fruits.forEach(function (fruit) {
//     const $li = document.createElement('li');
//     $li.innerText = fruit;
//     // $li.addEventListener('click', alertFruit.bind(null, fruit));
//     // $li.addEventListener('click', alertFruit);
//     $li.addEventListener('click', alertFruitBuilder(fruit));
//     $ul.appendChild($li);
// });
// document.body.appendChild($ul);
// // alertFruit(fruits[1]);
// alertFruitBuilder(fruits[1]);

console.log('===== 정보 은닉 예제 =====');
// 클로저로 변수를 보호하지 않은 객체
const notProtectedCar = {
    fuel: Math.ceil(Math.random() * 10 + 10), // 연료(L)
    power: Math.ceil(Math.random() * 3 + 2), // 연비(km/L)
    moved: 0, // 총 이동거리
    run: function () {
        const km = Math.ceil(Math.random() * 6);
        const wasteFuel = km / this.power;
        if (this.fuel < wasteFuel) {
            console.log('이동불가');
            return;
        }
        this.fuel -= wasteFuel;
        this.moved += km;
        console.log(`${km}km 이동 (총 ${this.moved}km)`);
    },
};

// 클로저로 변수를 보호한 객체
const createCar = function () {
    let fuel = Math.ceil(Math.random() * 10 + 10); // 연료(L)
    const power = Math.ceil(Math.random() * 3 + 2); // 연비(km/L)
    let moved = 0; // 총 이동거리
    const publicMembers = {
        get moved() {
            return moved;
        },
        run: function () {
            const km = Math.ceil(Math.random() * 6);
            const wasteFuel = km / power;
            if (fuel < wasteFuel) {
                console.log('이동불가');
                return;
            }
            fuel -= wasteFuel;
            moved += km;
            console.log(`${km}km 이동 (총 ${moved}km)`);
        },
    };
    Object.freeze(publicMembers);
    return publicMembers;
};
const car = createCar();

car.run(); // {생성된 값}km 이동 (총 {생성된 값}km)
console.log('moved', car.moved); // 생성된 값
console.log('fuel', car.fuel); // undefined
console.log('power', car.power); // undefined

console.log('===== 부분 적용 함수=====');
// 부분 적용 함수 구현 1
const partial = function () {
    const originalPartialArgs = arguments;
    const func = originalPartialArgs[0];
    if (typeof func !== 'function') {
        throw new Error('첫 번째 인자가 함수가 아닙니다.');
    }
    console.log('originalPartialArgs', originalPartialArgs);
    /**
      [Arguments] {
              '0': [Function: add],
              '1': 1,
              '2': 2,
              '3': 3,
              '4': 4,
              '5': 5
          }
      [Arguments] { '0': [Function (anonymous)], '1': '왈왈, ' }
    */
    console.log('func', func); // func [Function: add] / [Function (anonymous)]
    return function () {
        const partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
        const restArgs = Array.prototype.slice.call(arguments);
        console.log('arguments', arguments);
        /**
          [Arguments] { '0': 6, '1': 7, '2': 8, '3': 9, '4': 10 }
          [Arguments] { '0': '입니다!' }
        */
        console.log('partialArgs', partialArgs);
        /**
          [ 1, 2, 3, 4, 5 ]
          [ '왈왈, ' ]
        */
        console.log('restArgs', restArgs);
        /**
          [ 6, 7, 8, 9, 10 ]
          [ '입니다!' ]
        */
        console.log('this', this); // [global] / { name: '강아지', greet: [Function (anonymous)] }
        return func.apply(this, partialArgs.concat(restArgs));
    };
};

// bind 메서드를 활용한 부분 적용 함수
const add = function () {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
};
const addPartial = partial(add, 1, 2, 3, 4, 5);
console.log('addPartial', addPartial(6, 7, 8, 9, 10)); // 55

const dog = {
    name: '강아지',
    greet: partial(function (prefix, suffix) {
        console.log('prefix', prefix); // 왈왈,
        console.log('suffix', suffix); // 입니다!
        return prefix + this.name + suffix;
    }, '왈왈, '),
};
console.log('dog.greet', dog.greet('입니다!')); // 왈왈, 강아지입니다!

// 부분 적용 함수 구현 2
// Object.defineProperty(global, '_', {
//     value: 'EMPTY_SPACE',
//     writable: false,
//     configurable: false,
//     enumerable: false,
// });

// const partial2 = function () {
//     const originalPartialArgs = arguments;
//     const func = originalPartialArgs[0];
//     if (typeof func !== 'function') {
//         throw new Error('첫 번째 인자가 함수가 아닙니다.');
//     }
//     console.log('originalPartialArgs', originalPartialArgs); /**
//     originalPartialArgs [Arguments] {
//         '0': [Function: add],
//         '1': 1,
//         '2': 2,
//         '3': 'EMPTY_SPACE',
//         '4': 4,
//         '5': 5,
//         '6': 'EMPTY_SPACE',
//         '7': 'EMPTY_SPACE',
//         '8': 8,
//         '9': 9
//     }
//     [Arguments] { '0': [Function (anonymous)], '1': '왈왈, ' }
//     */
//     console.log('func', func); // [Function: add] / [Function (anonymous)]
//     return function () {
//         const partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
//         const restArgs = Array.prototype.slice.call(arguments);
//         console.log('arguments', arguments);
//         /**
//           [Arguments] { '0': 3, '1': 6, '2': 7, '3': 10 }
//           [Arguments] { '0': '배고파요!' }
//         */
//         console.log('partialArgs', partialArgs);
//         /**
//           [ 1, 2, 'EMPTY_SPACE', 4, 5, 'EMPTY_SPACE', 'EMPTY_SPACE', 8, 9 ]
//           [ '왈왈, ' ]
//         */
//         console.log('restArgs', restArgs);
//         /**
//           [ 3, 6, 7, 10 ]
//           [ '배고파요!' ]
//         */
//         console.log('this', this);
//         /**
//           [global]
//           { name: '강아지', greet: [Function (anonymous)] }
//         */
//         for (let i = 0; i < partialArgs.length; i++) {
//             if (partialArgs[i] === _) {
//                 partialArgs[i] = restArgs.shift();
//             }
//         }

//         return func.apply(this, partialArgs.concat(restArgs));
//     };
// };

// const addPartial2 = partial2(add, 1, 2, _, 4, 5, _, _, 8, 9);
// console.log('addPartial2', addPartial2(3, 6, 7, 10)); // 55

// const dog2 = {
//     name: '강아지',
//     greet: partial2(function (prefix, suffix) {
//         console.log('prefix2', prefix); // 왈왈,
//         console.log('suffix2', suffix); // 입니다!
//         return prefix + this.name + suffix;
//     }, '왈왈, '),
// };
// console.log('dog.greet', dog2.greet('배고파요!')); // 왈왈, 강아지입니다!

const partial3 = function () {
    const originalPartialArgs = arguments;
    const func = originalPartialArgs[0];
    if (typeof func !== 'function') {
        throw new Error('첫 번째 인자가 함수가 아닙니다.');
    }
    return function () {
        const partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
        const restArgs = Array.prototype.slice.call(arguments);
        for (let i = 0; i < partialArgs.length; i++) {
            if (partialArgs[i] === Symbol.for('EMPTY_SPACE')) {
                partialArgs[i] = restArgs.shift();
            }
        }

        return func.apply(this, partialArgs.concat(restArgs));
    };
};

const _ = Symbol.for('EMPTY_SPACE');
const addPartial3 = partial3(add, 1, 2, _, 4, 5, _, _, 8, 9);
console.log('addPartial3', addPartial3(3, 6, 7, 10)); // 55

console.log('===== 디바운스 예시=====');
const debounce = function (eventName, func, wait) {
    let timeoutId = null;
    return function (event) {
        const self = this;
        console.log(eventName, 'event 발생');
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func.bind(self, event), wait);
    };
};

const moveHandler = function (e) {
    console.log('move event 처리');
};

const wheelHandler = function (e) {
    console.log('wheel event 처리');
};

document.body.addEventListener('mousemove', debounce('move', moveHandler, 500));
document.body.addEventListener(
    'mousewheel',
    debounce('wheel', wheelHandler, 700)
);
