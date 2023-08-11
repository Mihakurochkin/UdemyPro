'use strict';

const userData = {
  name: 'Ivan',
  age: null,
  say: () => {
    console.log('Hello');
  }
}

userData.say();
userData.hey?.();

console.log('', userData.skills?.js);
