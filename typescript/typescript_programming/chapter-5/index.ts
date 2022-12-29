console.log('=====Chess Engine=====');

type Color = 'Black' | 'White';
type File1 = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class Game {
    private pieces = Game.makePieces();
    private static makePieces() {
        return [
            // Kings
            new King('White', 'E', 1),
            new King('Black', 'E', 8),
        ];
    }
}
class Position {
    constructor(private file: File1, private rank: Rank) {}
    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(
                position.file.charCodeAt(0) - this.file.charCodeAt(0)
            ),
        };
    }
}
abstract class Piece {
    protected position: Position;
    constructor(private readonly color: Color, file: File1, rank: Rank) {
        this.position = new Position(file, rank);
    }
    moveTo(position: Position) {
        this.position = position;
    }
    abstract canMoveTo(position: Position): boolean;
}

class King extends Piece {
    canMoveTo(position: Position) {
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
    add(value: number): this {
        return this;
    }
}

class MutableSet extends Set1 {
    remove(value: number): boolean {
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

interface User {
    name: string;
}

interface User {
    age: number;
}

let a: User = {
    name: 'Biden',
    age: 30,
};
console.log('let a: User', a.name);
console.log('let a: User', a.age);

console.log('=====implements=====');

interface Animal {
    readonly name: string;
    eat(food: string): void;
    sleep(hours: number): void;
}

interface Feline {
    meow(): void;
}

class Cat implements Animal, Feline {
    name = 'Nabi';
    eat(food: string) {
        console.info(`${this.name} Ate some ${food} mmm!`);
    }
    sleep(hours: number): void {
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
    private x = 1;
}
class Bx extends Ax {}

function fx(a: Ax) {}

fx(new Ax());
fx(new Bx());

// fx({ x: 1 });
/**
TS2345: Argument of type '{ x: number; }' is not assignable to parameter of type 'Ax'.
Property 'x' is private in type 'Ax' but not in type '{ x: number; }'.
  */

class C {}
let c: C = new C();

console.log('=====Factory Pattern=====');
interface Shoe {
    purpose: string;
}

class BalletFlat implements Shoe {
    purpose = 'dancing';
}
class Boot implements Shoe {
    purpose = 'woodcutting';
}
class Sneaker implements Shoe {
    purpose = 'walking';
}

let Shoe = {
    create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
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

console.log('=====Builder Pattern=====');
