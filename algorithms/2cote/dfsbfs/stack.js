const stack = [];

stack.push(5);
stack.push(2);
stack.push(3);
stack.push(7);
stack.pop();
stack.push(1);
stack.push(4);
stack.pop();

console.log(stack);
console.log(stack.reverse());

// const reversedStack = [];

// for (let i = 0; i < stack.length; i++) {
//   reversedStack.push(stack[stack.length - (i + 1)]);
// }

// console.log(reversedStack);
