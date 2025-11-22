function sumAny(a, b) {
    return a + b;
}
const result = sumAny(1, 2);
const result2 = sumAny('2', 4);
console.log(result, result2);
console.log('----------');

function logArrayValue(arr, type) {
    if (!Array.isArray(arr)) {
        return;
    }

    const resultingArray = type && typeof type === 'string' ? filterArrayByType(arr, type) : arr;

    resultingArray.forEach(element => {
        console.log(element);
    });
}

const arr1 = [1, 2, 3];
const arr2 = ['string', 'number', 'someValue'];
console.log('-----------');

export function filterArrayByType(arr, type) {
    return arr.filter(item => typeof item === type);
}

export const anyArray = [1, '2', true, {num: 4}];

console.log(filterArrayByType(anyArray, 'string'));
console.log(filterArrayByType(anyArray, 'object'));

logArrayValue(arr1);
logArrayValue(arr2);
logArrayValue(1);
console.log('logArrayValue([...anyArray, ...[6, \'true\', false]]);');
logArrayValue([...anyArray, ...[6, 'true', false]]);
console.log('logArrayValue([...anyArray, ...[6, \'true\', false]]), \'string\';');
logArrayValue([...anyArray, ...[6, 'true', false]], 'string');
console.log('logArrayValue([...anyArray, ...[6, \'true\', false]], true);');
logArrayValue([...anyArray, ...[6, 'true', false]], true);


