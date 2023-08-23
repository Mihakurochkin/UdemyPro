'use strict';

const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

function unique(arr) {
  return Array.from(new Set(arr));
}

console.log(unique(arr));

const set = new Set(arr);

set.add('Ivan');
set.add('Oleg');

console.log('set', set);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// 1
for(let value of  set) {
  console.log('value', value);
}

// // 2
set.forEach((value, valueAgain, set) => {
  console.log('value', value);
  console.log('valueAgain', valueAgain);
})

console.log(set.values());
console.log(set.keys());
console.log(set.entries());


