let a = 5;
let b = 10;
let c = '15';
let d = 'string';

console.log(a, '>', b, '-', a > b);
console.log(a, '<', b, '-', a < b);

console.log(a, '>', c, '-', a > c);
console.log(b, '<', d, '-', b < d);

console.log(a > b && b >= c);
console.log(a <= b && b <= c);

console.log(a > b || b <= c);
console.log(a != d || b <= a);

console.log(!(a > b));
console.log(!(a > c));
console.log(a > c);
console.log(!(a < d));