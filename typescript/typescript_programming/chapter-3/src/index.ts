type Cat = { name: string; purrs: boolean };
type Dog = { name: string; barks: boolean; wags: boolean };
type CatOrDogOrBoth = Cat | Dog;
type CatAndDog = Cat & Dog;

let a: CatAndDog = {
    name: '야옹이',
    purrs: true,
    barks: true,
    wags: true,
};

let b: CatOrDogOrBoth = {
    name: '멍멍이',
    wags: true,
    purrs: true,
};

b = {
    name: '뭉뭉이',
    barks: false,
    purrs: false,
};

console.log('a', a);
console.log('b', b);
