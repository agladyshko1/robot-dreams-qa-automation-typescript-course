let valueNumberOne = 5;
let valueNumberTwo = 10;
let valueStringOne = '5';
let valueStringTwo = 'string';

console.log(valueNumberOne + " + " + valueNumberTwo + " = " + (valueNumberOne + valueNumberTwo));
console.log(valueNumberOne + " + " + valueStringOne + " = " + (valueNumberOne + valueStringOne));
console.log(valueNumberOne + " - " + valueNumberTwo + " = " + (valueNumberOne - valueNumberTwo));
console.log(valueStringTwo + " - " + valueStringOne + " = " + (valueStringTwo - valueStringOne));
console.log(valueNumberOne + " - " + valueStringOne + " = " + (valueNumberOne - valueStringOne), typeof(valueNumberOne - valueStringOne));


console.log('valueNumberOne * valueNumberTwo = ', valueNumberOne * valueNumberTwo);
console.log('valueNumberOne / valueNumberTwo = ', valueNumberOne / valueNumberTwo);
console.log('valueNumberOne % valueNumberTwo = ', valueNumberOne % valueNumberTwo);
console.log('valueNumberOne ** valueNumberTwo = ', valueNumberOne ** valueNumberTwo);

console.log('----------------');

valueNumberOne += valueNumberOne;
console.log('valueNumberOne + valueNumberTwo = ', valueNumberOne);


// a += a;
// console.log(a);
// a -= a;
// a = 5;
// console.log(a);
// a *= a;
// console.log(a);
// a /= a;
// console.log(a);
// a %= a;
// console.log(a);
// a = 5;
// a **= a;
// console.log(a);