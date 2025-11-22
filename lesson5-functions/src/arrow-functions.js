import { filterArrayByType } from './tradition-function.js';

const logArrayValue = (arr, type) => {
    if (!Array.isArray(arr)) {
        return;
    }

    const resultingArray = type && typeof type === 'string' ? filterArrayByType(arr, type) : arr;

    resultingArray.forEach(element => {
        console.log(element);
    });
}

console.log('logArrayValue([...anyArray, ...[6, \'true\', false]]);');
logArrayValue([...[1, '2', true], ...[6, 'true', false]]);
console.log('logArrayValue([...anyArray, ...[6, \'true\', false]]), \'string\';');
logArrayValue([...[3, '6', {}], ...[6, 'true', false]], 'string');
console.log('logArrayValue([...anyArray, ...[6, \'true\', false]], true);');
logArrayValue([...[ false ], ...[3, '6', {}], ...[6, 'true', false]], true);

const sum = (a, b) => a + b;
console.log(sum(1, 2));

console.log('-------sort callback-----------');
const extract = (a, b) => a - b;
function extract2(a, b) {
    return b - a;
}
const numbers = [1, 8, 3, 4, 2];

numbers.sort(extract);
console.log(numbers);

numbers.sort(extract2);
console.log(numbers);
