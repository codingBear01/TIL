// npm i typescript
// npm i ts-node

function showItems(arr: number[]) {
  arr.forEach((item) => console.log(item));
}
showItems([1, 2, 3]);

const age: number = 30;
const isAdult: boolean = true;
const a: number[] = [1, 2, 3];
const a2: Array<number> = [1, 2, 3];
const week1: string[] = ['mon', 'tue', 'wed'];
const week2: string[] = ['mon', 'tue', 'wed'];

console.log('-----Tuple-----');
/* Tuple - 인덱스별로 자료형이 다를 때 쓰임*/
let b: [number, string];
b = [1, 'z'];

console.log('-----기본 자료형-----');
/* void, never */
// void: 함수의 반환값이 없을 때
function sayHello(): void {
  console.log('void');
}

// never: 항상 err를 반환하거나 infinite loop일 때
function showError(): never {
  throw new Error();
}
function infLoop(): never {
  while (true) {}
}

/* enum - 할당된 값들이 자동으로 1씩 증가함. 임의의 값을 할당하면 그 값부터 증가함.*/
enum Os {
  Window,
  Ios,
  Android,
}
console.log('enum', Os.Window); // 0
console.log('enum', Os.Ios); // 1
console.log('enum', Os.Android); // 2
console.log('enum', Os[1]); // Ios
console.log('enum', Os['Ios']); // 1

let myOs: Os;
myOs = Os.Window;
console.log('enum', myOs);

/* null, undefined */
const nullA: null = null;
const undB: undefined = undefined;

console.log('-----interface-----');
/* interface */
type Score = 'A' | 'B' | 'C' | 'F'; // Score에 지정한 값만을 할당 가능

// objects
interface User {
  name: string;
  age: number;
  gender?: string; // ?: optional
  readonly birthYear: number; // readonly: 읽기 전용
  [grade: number]: Score; // string을 value로 삼는 number값을 여러 개 입력 가능하다는 뜻
}
const user: User = {
  name: 'kang',
  age: 30,
  birthYear: 2000,
  1: 'A',
  2: 'B',
};
user.age = 10;
user.gender = 'male';
console.log(user);

// functions
interface Add {
  (num1: number, num2: number): number;
}
const add: Add = (x, y) => x + y;
console.log('interface Add', add(10, 20));

interface IsAdult {
  (age: number): boolean;
}
const isAdult2: IsAdult = (age) => age > 19;
console.log('interface IsAdult', isAdult2(20));

// Class, implements
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  name: string;
}

// extends를 통해 확장 가능
interface Benz extends Car {
  door: number;
  stop(): void;
}

// 2개 이상 사용하여 동시 확장도 가능
interface ToyCar extends Car, Toy {
  price: number;
}

const benz: Benz = {
  door: 5,
  stop() {
    console.log('stop!');
  },
  color: 'black',
  wheels: 4,
  start() {},
};

class Bmw implements Car {
  color;
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log('go!');
  }
}
const bmw = new Bmw('green');
console.log(bmw);
bmw.start();

console.log('-----functions-----');
/* functions */
// ?: optional
const hello = (name?: string) => `Hello, ${name || 'world'}`;
const hello2 = (name = 'world') => `Hello, ${name}`;
// (): return data type
const hello3 = (age: number | undefined, name: string): string => {
  if (age !== undefined) return `Hello, ${name}. You are ${age}`;
  else return `Hello, ${name}`;
};

console.log('hello1', hello());
console.log('hello1', hello('sam'));
console.log('hello2', hello2());
console.log('hello3', hello3(30, 'sam'));
console.log('hello3', hello3(undefined, 'sam'));

const reduced = (...nums: number[]) => nums.reduce((res, num) => res + num, 0);
console.log('reduced', reduced(1, 2, 3));
console.log('reduced', reduced(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log('=====this=====');
/* this */
interface User2 {
  name: string;
}
const Sam: User2 = { name: 'Sam' };
// this활용 시 interface를 할당
function showName(this: User2, age: number, gender: 'm' | 'f') {
  console.log(this.name, age, gender);
}
const a3 = showName.bind(Sam);
a3(30, 'm');

console.log('=====overloading=====');
// overloading
interface User3 {
  name: string;
  age: number;
}

function join(name: string, age: string): string;
function join(name: string, age: number): User3;
function join(name: string, age: number | string): User3 | string {
  if (typeof age === 'number') {
    return {
      name,
      age,
    };
  } else {
    return '나이는 숫자로 입력해주세요.';
  }
}

const sam: User3 = join('sam', 30);
const jane: string = join('jane', '30');
console.log('overloading User3', sam);
console.log('overloading string', jane);

/* literal types */
const userName1 = 'Bob';
let userName2: string | number = 'Tom'; // userName2에는 string or number 할당 가능

type Job = 'police' | 'developer' | 'teacher'; // |: union type

interface User4 {
  name: string;
  job: Job; // type Job에서 지정한 값만 할당 가능
}

const user4: User4 = {
  name: 'Bob',
  job: 'developer',
};

// union types
interface Car2 {
  name: 'car';
  color: string;
  start(): void;
}

interface Mobile {
  name: 'mobile';
  color: string;
  call(): void;
}

const getGift = (gift: Car2 | Mobile) => {
  console.log(gift.color);
  if (gift.name === 'car') {
    gift.start();
  } else {
    gift.call();
  }
};

// intersection types
interface Car3 {
  name: string;
  start(): void;
}

interface Toy2 {
  name: string;
  color: string;
  price: number;
}

const toyCar2: Toy2 & Car3 = {
  name: '타요',
  start() {},
  color: 'blue',
  price: 1000,
};

console.log('=====Class=====');
/* Class */
class Car4 {
  color: string; // typescript에서 class를 사용할 때 멤버 변수 미리 선언해줘야 함
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
}

const car4 = new Car4('red');
console.log(car4);

// 접근 제한자(Access modifier) - public, private, protected
class Car5 {
  // public: 자식 Class, Class Instance 모두 접근 가능
  // name: string = 'car';
  // public name: string = 'car';

  // private: 해당 Class 내부에서만 접근 가능
  // private name: string = 'car';
  // #name: string = 'car';

  // protected: 자식 Class에서 접근 가능 but Class Instance X
  name: string = 'car';
  color: string;
  static wheels = 4;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
    console.log(this.name);
    // console.log(this.#name);
    console.log(Car5.wheels); // static으로 선언한 변수는 클래스명.변수명으로 씀
  }
}

class Audi extends Car5 {
  constructor(color: string) {
    super(color);
  }
  showName() {
    console.log(this.name);
  }
}
const audi = new Audi('black');
audi.showName();

// 추상 Class: new 키워드를 통해 생성 불가. only 상속을 통해서 활용 가능. 추상화란 프로퍼티나 메서드의 이름만 선언하고, 구체적인 기능은 상속 받는 쪽에서 구현하는 것.
abstract class Car6 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
  abstract doSomething(): void;
}

class Hyundai extends Car6 {
  constructor(color: string) {
    super(color);
  }
  doSomething() {
    console.log('do it!');
  }
}

const hyundai = new Hyundai('white');
console.log(hyundai);
hyundai.doSomething();

/* Generics */
function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
// 함수 호출 시 <> 안에 인자의 자료형을 적어넣음. but 적어넣지 않아도 typescript는 자료형을 자동으로 감지
getSize<number>(arr1);
const arr2 = ['a', 'b', 'c'];
getSize<string>(arr2);

interface Mobile2<T> {
  name: string;
  price: number;
  option: T;
}

// const m1: Mobile2<object> = {
const m1: Mobile2<{ color: string; coupon: boolean }> = {
  name: 's21',
  price: 1000,
  option: {
    color: 'red',
    coupon: false,
  },
};

const m2: Mobile2<string> = {
  name: 's20',
  price: 900,
  option: 'good',
};

interface User5 {
  name: string;
  age: number;
}

interface Car8 {
  name: string;
  color: string;
}

interface Book {
  price: number;
}

const user5: User5 = { name: 'a', age: 10 };
const car8: Car8 = { name: 'a', color: 'red' };
const book: Book = { price: 3000 };

// 인자에서 name의 자료형은 string이라고 명시. name이 없거나 자료형이 일치하지 않으면 err
function showName1<T extends { name: string }>(data: T): string {
  return data.name;
}

showName1(user);
showName1(car8);

/* utility types */
interface User7 {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

type UserKey = keyof User7; // keyof를 쓰면 interface의 key값을 union type으로 가져올 수 있음
const uk: UserKey = 'id';
console.log(uk); // id

// Partial<T> - interface 내 모든 프로퍼티를 optional로 변경
let admin: Partial<User7> = {
  id: 1,
  name: 'bob',
};

// Required<T> - interface 내 모든 프로퍼티를 필수값으로 변경
// Readonly<T> - interface 내 모든 프로퍼티를 읽기 전용으로 변경

// Record<K, T>
type Grade = '1' | '2' | '3' | '4';
type Score1 = 'A' | 'B' | 'C' | 'D' | 'F';

const score: Record<Grade, Score1> = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
};
console.log(score);

interface User8 {
  id: number;
  name: string;
  age: number;
}

function isValid(user: User8) {
  const result: Record<keyof User8, boolean> = {
    id: user.id > 0,
    name: user.name !== '',
    age: user.age > 0,
  };
  return result;
}

// Pick<T, K> - K자리에 전달한 특정 프로퍼티만 사용 가능
const admin1: Pick<User8, 'id' | 'name'> = {
  id: 0,
  name: 'Bob',
};
// Omit<T, K> - K자리에 전달한 특정 프로퍼티만 제외 가능
const admin2: Omit<User8, 'age' | 'gender'> = {
  id: 0,
  name: 'Bob',
};
// Exclude<T1, T2> - T1 type 중 에서 T2 type과 중복되는 것을 제거
type T1 = string | number;
type T2 = Exclude<T1, number>; // string만 남음
// NonNullable<Type>
type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>; // string | void만 남음
