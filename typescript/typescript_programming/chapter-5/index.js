"use strict";
console.log('=====Chess Engine=====');
class Game {
    constructor() {
        this.pieces = Game.makePieces();
    }
    static makePieces() {
        return [
            // Kings
            new King('White', 'E', 1),
            new King('Black', 'E', 8),
        ];
    }
}
class Position {
    constructor(file, rank) {
        this.file = file;
        this.rank = rank;
    }
    distanceFrom(position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
        };
    }
}
class Piece {
    constructor(color, file, rank) {
        this.color = color;
        this.position = new Position(file, rank);
    }
    moveTo(position) {
        this.position = position;
    }
}
class King extends Piece {
    canMoveTo(position) {
        let distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    }
}
// class Queen extends Piece {}
// class Bishop extends Piece {}
// class Knight extends Piece {}
// class Rook extends Piece {}
// class Pawn extends Piece {}
class Set1 {
    add(value) {
        return this;
    }
}
class MutableSet extends Set1 {
    remove(value) {
        return true;
    }
}
const set1 = new Set1();
const set2 = new MutableSet();
console.log(set1.add(1));
console.log(set2.add(2));
console.log('=====Type vs Interface=====');
// interface A {
//     good(ax: number): string;
//     bad(ax: number): string;
// }
// interface B extends A {
//     good(bx: string | number): string;
//     bad(bx: string): string;
// }
/**
index.ts:75:11 - error TS2430: Interface 'B' incorrectly extends interface 'A'.
  Types of property 'bad' are incompatible.
    Type '(x: string) => string' is not assignable to type '(x: number) => string'.
      Types of parameters 'x' and 'x' are incompatible.
        Type 'number' is not assignable to type 'string'.
 */
// type A = {
//     good(x: number): string;
//     bad(x: number): string;
// };
// type B = A & {
//     good(x: string | number): string;
//     bad(x: string): string;
// };
console.log('=====declaration merging=====');
let a = {
    name: 'Biden',
    age: 30,
};
console.log('let a: User', a.name);
console.log('let a: User', a.age);
console.log('=====implements=====');
class Cat {
    constructor() {
        this.name = 'Nabi';
    }
    eat(food) {
        console.info(`${this.name} Ate some ${food} mmm!`);
    }
    sleep(hours) {
        console.info(`${this.name} slept for ${hours} hours`);
    }
    meow() {
        console.info(`${this.name} is crying MEOW!!!`);
    }
}
const cat = new Cat();
console.log('cat name:', cat.name);
cat.eat('chewru');
cat.sleep(9);
cat.meow();
class Ax {
    constructor() {
        this.x = 1;
    }
}
class Bx extends Ax {
}
function fx(a) { }
fx(new Ax());
fx(new Bx());
// fx({ x: 1 });
/**
TS2345: Argument of type '{ x: number; }' is not assignable to parameter of type 'Ax'.
Property 'x' is private in type 'Ax' but not in type '{ x: number; }'.
  */
class C {
}
let c = new C();
console.log('=====Design Patterns=====');
class BalletFlat {
    constructor() {
        this.purpose = 'dancing';
    }
}
class Boot {
    constructor() {
        this.purpose = 'woodcutting';
    }
}
class Sneaker {
    constructor() {
        this.purpose = 'walking';
    }
}
let Shoe = {
    create(type) {
        switch (type) {
            case 'balletFlat':
                return new BalletFlat();
            case 'boot':
                return new Boot();
            case 'sneaker':
                return new Sneaker();
        }
    },
};
console.log(Shoe);
console.log(Shoe.create('balletFlat'));
console.log(Shoe.create('boot'));
console.log(Shoe.create('sneaker'));
