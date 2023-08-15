'use strict';

const birthday = Symbol('birthday')
const user = {
  name: 'Alex',
  surname: 'Smith',
  [birthday]: '20/04/2021',
  showMyPublicData: function() {
    console.log(`${this.name} ${this.surname}`);
  }
}

// Object.defineProperty(user, 'birthday', {value: '02/02/2021', enumerable: true, configurable: true, writable: false});

// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperty(user, 'showMyPublicData', {enumerable: false})

for(let key in user) console.log(key);
console.log(Object.getOwnPropertyDescriptor(user, birthday));

Object.defineProperties(user, {
  name: {writable: false},
  surname: {writable: false}
})

// writable
// enumerable
// configurable
