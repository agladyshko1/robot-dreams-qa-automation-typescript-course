const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const value of arrNum) {
    if (value < 5) {
        continue;
    }
    console.log(value);
}

console.log('-------------');

for (let i = 100; i > 0; i -= 10) {
    console.log(i);
}

console.log('-------------');
let i = 0;
while (i < 50) {
    if (i % 3 === 0) {
        console.log(i);
    }
    i ++;
}


