'use strict';

const bigInt = 20983479190874097234908798769n;

const sameBigInt = BigInt(20983479190874097234908798769)

console.log(2n === 2);

let bigInt2 = 1n;
let number = 2;

console.log(bigInt2 + BigInt(number));
console.log(Number(bigInt2) + number);
