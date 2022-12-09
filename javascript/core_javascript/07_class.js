// const extendClass1 = function (SuperClass, SubClass, subMethods) {
//     SubClass.prototype = new SuperClass();

//     for (let prop in SubClass.prototype) {
//         if (SubClass.prototype.hasOwnProperty(prop)) {
//             delete SubClass.prototype[prop];
//         }
//     }

//     if (subMethods) {
//         for (let method in subMethods) {
//             SubClass.prototype[method] = subMethods[method];
//         }
//     }
//     Object.freeze(SubClass.prototype);

//     return SubClass;
// };

// Square.prototype = new Rectangle();

/* ES5 version Class 상속 */
// const extendClass = function (SuperClass, SubClass, subMethods) {
//     SubClass.prototype = Object.create(SuperClass.prototype);
//     SubClass.prototype.constructor = SubClass;
//     SubClass.prototype.super = function (propName) {
//         const self = this;

//         if (!propName)
//             return function () {
//                 SuperClass.apply(self, arguments);
//             };

//         const prop = SuperClass.prototype[propName];

//         if (typeof prop !== 'function') return prop;

//         return function () {
//             return prop.apply(self, arguments);
//         };
//     };

//     if (subMethods) {
//         for (const method in subMethods) {
//             SubClass.prototype[method] = subMethods[method];
//         }
//     }

//     Object.freeze(SubClass.prototype);

//     return SubClass;
// };

// const Rectangle = function (width, height) {
//     this.width = width;
//     this.height = height;
// };

// Rectangle.prototype.getArea = function () {
//     return this.width * this.height;
// };

// const Square = extendClass(
//     Rectangle,
//     function (width) {
//         this.super()(width, width);
//     },
//     {
//         getArea: function () {
//             console.log(`size is ${this.super('getArea')()}`);
//         },
//     }
// );

// const sq = new Square(5);
// sq.getArea();
// console.log(sq.super('getArea')());

/* ES5와 ES6 Class 비교 */
const ES5 = function (name) {
    this.name = name;
};
ES5.staticMethod = function () {
    return this.name + ' static Method';
};
ES5.prototype.method = function () {
    return this.name + ' method';
};
const es5Instance = new ES5('es5');
console.log(ES5.staticMethod());
console.log(es5Instance.method());

const ES6 = class {
    constructor(name) {
        this.name = name;
    }
    static staticMethod() {
        return this.name + ' static Method';
    }
    method = function () {
        return this.name + ' method';
    };
};
const es6Instance = new ES6('es6');
console.log(ES6.staticMethod());
console.log(es6Instance.method());

/* ES6 Class 상속 */
const Rectangle = class {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
};

const Square = class extends Rectangle {
    constructor(width) {
        super(width, width);
    }
    getArea() {
        console.log(`size is ${super.getArea()}`);
    }
};

sq = new Square(5, 5);
sq.getArea();
