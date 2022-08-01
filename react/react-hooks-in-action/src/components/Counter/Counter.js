let count = 0;

const reducer = (state, action) => {
  if (action.type === 'inc') {
    return state + 1;
  }
  if (action.type === 'dec') {
    return state - 1;
  }
  if (action.type === 'add') {
    return state + action.payload;
  }
  if (action.type === 'sub') {
    return state - action.payload;
  }
  if (action.type === 'set') {
    return action.payload;
  }
  return state;
};

// count = reducer(count, 'inc');
// count = reducer(count, 'inc');
// count = reducer(count, 'dec');

count = reducer(count, { type: 'add', payload: 3 });
console.log('add', count);
count = reducer(count, { type: 'sub', payload: 10 });
console.log('sub', count);
count = reducer(count, { type: 'set', payload: 41 });
console.log('set', count);
count = reducer(count, { type: 'inc' });
console.log('total', count);
