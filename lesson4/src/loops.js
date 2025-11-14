for (let i = 0; i < 10; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
    if (i === 7) {
        break;
    }
}

console.log('----------');
const array = [1, true, 3, 4, 5, 6, {a:1, b:2}, 8, 'word', 10];
for (const value of array) {
    if (value < 3) {
        console.log('skipped index: ', array.indexOf(value));
        continue;
    } else if (value > 7) {
        break;
    }

    console.log(value);
}

console.log(array.indexOf('word'), array.indexOf(15), array.indexOf(1));

console.log('------while------');
let iterator = 0;
while (iterator < 10) {
    iterator++;
    if (iterator === 2) {
        continue;
    } else if (iterator === 7) {
        break;
    }
    console.log(iterator);
}

console.log('------forEach------');
const outerObject = [];
array.forEach((value, index) => {
    if (index < 5) {
        return;
    }
    outerObject.push(value);
    console.log(value);
});
console.log(outerObject);

console.log('-----map-----');
const map = array.map((value, index) => {
    if (index >= 5) {
        return value;
    }
}).filter((value) => value);
console.log(map);

