for (let i = 0; i < 10; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
    if (i === 7) {
        break;
    }
}

console.log('--------------');
const arr = [1, true, 3, 4, 5, 6, { a: 1, b: 2 }, 8, '9', 10];
for (const value of arr) {
    if (value < 3) {
        console.log('skipped index, ', arr.indexOf(value));
        continue;
    } else if (value > 7) {
        break;
    }

    console.log(value);
}

console.log('--------------');
for (const index in arr) {
    if (index < 3) {
        continue;
    } else if (index > 7) {
        break;
    }

    console.log(index);
}

console.log(arr.indexOf('9'), arr.indexOf(15), arr.includes(1));

console.log('--------------');
let iterator = -1;
while (iterator < 10) {
    iterator++; // iterator = iterator + 1
    if (iterator === 2) {
        continue;
    } else if (iterator === 7) {
        break;
    }
    console.log(iterator);
}

const outerObject = [];
arr.forEach((value, index) => {
    if (index < 5) {
        return;
    }
    outerObject.push(value);
    console.log(value);
});

console.log(outerObject);
console.log('-----map----');
const map = arr.map((value, index) => {
    if (index >= 5) {
        return value;
    }
}).filter((value) => value);
console.log(map);
