const set = new Set();
set.add(1);
set.add('22');
set.has(3) ? set.delete(3) : set.add(3);

const values = set.values();
console.log(values, Array.from(values));

const arr = [1, 2, 3, 1, 3, 5, 7, 2];
const set2 = new Set(arr);
console.log(Array.from(set2.values()));


const map = new Map();
map.set('1', 1);
map.set(2, '2');
map.set(3, {a: 1, b: 2});
map.has('4') ? map.delete('4') : map.set('4', {a: 1});
if (map.has('3')) {
    map.set(5, '5');
} else (map.set('6', 6));

const mapEntries = map.entries();
const someValue = map.get('1');
const keys = Array.from(map.keys());
const mapValues = Array.from(map.values());
console.log(someValue, ', ', keys, ', ', map.keys(), ', ', mapValues);
