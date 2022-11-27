const obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 4,
};

Array.prototype.push.call(obj, 'd');
console.log(obj);

const arr = Array.prototype.slice.call(obj);
console.log(arr);

// 일반 함수의 this: 자신이 종속된 객체
function BlackDog() {
    this.name = '흰둥이';
    return {
        name: '검둥이',
        bark: function () {
            console.log(`일반 함수: ${this.name} 멍멍!'`);
        },
    };
}

const blackDog = new BlackDog();
blackDog.bark();

// 화살표 함수의 this: 자신이 종속된 인스턴스
function WhiteDog() {
    this.name = '흰둥이';
    return {
        name: '검둥이',
        bark: () => console.log(`화살표 함수: ${this.name} 멍멍!'`),
    };
}

const whiteDog = new WhiteDog();
whiteDog.bark();

const objCall = {
    outer: function () {
        console.log('objCall outer', this);
        const innerFunc = function () {
            console.log('objCall inner', this);
        };
        innerFunc.call(this); // call 안 붙이면 global 참조 why? 함수로 호출되었기 때문
    },
};
objCall.outer();

const objBind = {
    outer: function () {
        console.log('objBind outer', this);
        const innerFunc = function () {
            console.log('objBind inner', this);
        }.bind(this);
        innerFunc(); // Bind 안 붙이면 global 참조 why? 함수로 호출되었기 때문
    },
};
objBind.outer();

const objArrow = {
    outer: function () {
        console.log('objArrow outer', this);
        // 화살표 함수 내부에는 this가 아예 없어서 스코프체인상 가장 가까운 this에 접근함.
        const innerFunc = () => {
            console.log('objArrow inner', this);
        };
        innerFunc();
    },
};
objArrow.outer();

const testArrow = () => console.log(this); // {}
function testNormal() {
    console.log(this);
} // global

testArrow();
testNormal();
