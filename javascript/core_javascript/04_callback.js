// Promise
const addCoffeePromise = (name) => (prevName) =>
    new Promise((resolve) =>
        setTimeout(() => {
            const newName = prevName ? prevName + ', ' + name : name;
            console.log('addCoffeePromise', newName);
            resolve(newName);
        }, 500)
    );

addCoffeePromise('에스프레소')()
    .then(addCoffeePromise('아메리카노'))
    .then(addCoffeePromise('카페모카'))
    .then(addCoffeePromise('카페라떼'));

// Generator
const addCoffeeGenerator = (prevName, name) =>
    setTimeout(
        () =>
            coffeeMakerGenerator.next(prevName ? prevName + ', ' + name : name),
        500
    );

const coffeeGenerator = function* () {
    const espresso = yield addCoffeeGenerator('', '에스프레소');
    console.log('addCoffeeGenerator', espresso);
    const americano = yield addCoffeeGenerator(espresso, '아메리카노');
    console.log('addCoffeeGenerator', americano);
    const mocha = yield addCoffeeGenerator(americano, '카페모카');
    console.log('addCoffeeGenerator', mocha);
    const latte = yield addCoffeeGenerator(mocha, '카페라떼');
    console.log('addCoffeeGenerator', latte);
};

const coffeeMakerGenerator = coffeeGenerator();
coffeeMakerGenerator.next();

// Async/await
const addCoffeeAsync = (name) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(name), 500);
    });

const coffeeMakerAsync = async () => {
    let coffeeList = '';
    const addCoffee = async (name) =>
        (coffeeList += (coffeeList ? ',' : '') + (await addCoffeeAsync(name)));

    await addCoffee('에스프레소');
    console.log('addCoffeeAsync', coffeeList);
    await addCoffee('아메리카노');
    console.log('addCoffeeAsync', coffeeList);
    await addCoffee('카페모카');
    console.log('addCoffeeAsync', coffeeList);
    await addCoffee('카페라떼');
    console.log('addCoffeeAsync', coffeeList);
};

coffeeMakerAsync();
