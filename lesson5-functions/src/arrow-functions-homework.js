const arifmetikAdd = (array) => {
    let counter = 0;
    for (const value of array) {
        counter += value;
    }
    return counter;
}

function summator(arr) {
    return arr.reduce((acc, el) => acc + el, 0);
}

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(arifmetikAdd(array));
console.log('sum ' + summator(array));

console.log('----------------');

const arrayNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayStrings = ['apple', 'fruit', 'juice', 'banana'];

const twoArrays = (firstArr, secondArr) => {
    for (const value of firstArr) {
        if (value < secondArr.length) {
            console.log(secondArr[value]);
        }
    }
}

twoArrays(arrayNumbers, arrayStrings);
