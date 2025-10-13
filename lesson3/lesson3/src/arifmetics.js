let a = 5;
let b = 10;
let c = '5';
let d = 'string';

console.log(a, " + ", b, " = ", (a + b));
console.log(a, " + ", c, " = ", (a + c));
console.log(a, " - ", b, " = ", (a - b));
console.log(a, " - ", c, " = ", (a - c), ',', typeof(a - c));
console.log(a, " * ", b, " = ", (a * b));
console.log(a, " / ", b, " = ", (a / b));
console.log(a, " % ", b, " = ", (a % b));
console.log(a, " ** ", b, " = ", (a ** b));
console.log(a, " - ", d, " = ", (a - d));
console.log(a, " + ", d, " = ", (a + d));
console.log(b, " * ", d, " = ", (b * d));
console.log(c, " % ", d, " = ", (c % d));


console.log('----------------');

a += a;
console.log('a + a = ', a);

a -= a;
console.log('a - a = ', a);

a = 5;
a *= a;
console.log('a * a = ', a);

a /= a;
console.log('a / a = ', a);

a = 5;
a %= a;
console.log('a % a = ', a);

a = 5;
a **= a;
console.log('a ** a = ', a);

d *= d;
console.log('d * d = ', d);


