const arrStr = ['string', 'number', 'bool', 'space'];
const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const strBool = [true, false, false, true];
const arrAny = ['tab', 11, true];

arrStr.push('power');
console.log(arrStr);
console.log(arrNum.pop());
console.log(arrNum[8]); // deleted value
console.log(arrStr.shift()); // delete first element
console.log(arrStr); // delete first element
console.log(arrStr.unshift('firstElement')); // add first element

console.log('------forEach-------');
const resultForEach = [];
arrStr.forEach((value, index) => {
    if (value === 'space') return;
    else if (value.length < 6) {
        resultForEach.push(value);
        console.log(value);
    }
});
console.log(resultForEach);

console.log('------map-------');
const resultMap = arrNum.map((value, index) => {
    if (value >= 5 || value < 2) {
        return value;
    }
}).filter(value => value !== undefined);
console.log(resultMap);


