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
