import { filterArrayByType } from './tradition-function.js';

const logArrayValue = function(arr, type) {
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



