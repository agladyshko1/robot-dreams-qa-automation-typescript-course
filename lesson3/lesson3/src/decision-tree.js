let a = 5;
let b = 10;
let c = '15';
let d = 'string';

if (a > b) {
    console.log(a, '>', b);
} else if (a > c) {
    console.log(a, '>', c);
} else if (a > d) {
    console.log(a, '>', d);
} else {
    console.log('Nothing above');
}

if (a > b || a > c) {
    console.log('a > b || a > c');
} else if (a < b || a > b) {
    console.log('a < b || a > b');
} else {
    console.log('Nothing above');
}

if (a < b && c !== d) {
    console.log('a < b && c !== d');
} else if (a > c && с > b) {
    console.log('a > c && с > b');
} else if (!(a > b) || !(b > c)) {
    console.log('!(a > b) || !(b > c)');
}
