const Constructor = function (name) {
    this.name = name;
};

Constructor.prototype.method1 = function () {};
Constructor.prototype.property1 = 'Constructor Prototype Property';

const instance = new Constructor('Instance');
console.log(Constructor);
console.log(instance);

// TODO: sdfsdf
// FIXME: sdfsdf
