let a = 2;
let b = '2';
let c = true;

console.log(a == b);
console.log(a == c);
console.log(a != b);
console.log(a != c);
console.log('---- з приведенням типів ----');
console.log(a === b);
console.log(a === c);
console.log(a !== b);
console.log(a !== c);

a = 2;
b = '3';
c = false;

console.log('---- порівняння з приведенням типів ----');
console.log(a > b);
console.log(a > c);
console.log(a < b);
console.log(a < c);
console.log(a >= b);
console.log(a >= c);
console.log(a <= b);
console.log(a <= c);

console.log('---- порівняння стрінгів ----');
a = 'str1';
b = 'str2';

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

