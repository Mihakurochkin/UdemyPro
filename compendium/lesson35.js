let a = 5;
b = a

b = b + 5

 console.log('b', b);
console.log('a', a);

const obj = {
  a: 5,
  b: 1
}

// 1const copy = obj;
//
// copy.a = 10
//
// console.log('copy', copy);
// console.log('obj', obj);

function copy(mainObj) {
  let objCopy = {};
  let key;
  for(key in mainObj) {
     objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers);
newNumbers.a = 10
newNumbers.c.x = 10;
console.log('newNumbers', newNumbers);
console.log('numbers', numbers);


const add = {
  d: 17,
  e: 20
}

const clone = (Object.assign({}, add));

clone.d = 20

// console.log('add', add);
// console.log('clone', clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'adskf;kj'
// console.log('oldArray', oldArray);
// console.log('newArray', newArray);

const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'bloder'];
const internet = [... video, ...blogs, 'vk', 'facebook'];
console.log('internet', internet);



function log(a, b, c) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
  one: 1,
  two: 2,
  
}

const newObj = {...q};

console.log('newObj', newObj);


