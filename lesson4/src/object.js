const obj = {}; // створили область в пам'яті ПК
obj.key1 = 'val1';
obj['key2'] = 'val2';
obj['key3 with space'] = 'val3 with spaces';
obj.key4 = {
    subKey1: 1,
    subKey2: '2',
    subKey3: true,
    subKey4: []
};

console.log(obj);
console.log(JSON.stringify(obj));
console.log('-----------');

const wantedCopy = obj; // присвоїли посилання на пам'ять об'єкту obj новому об'єкту
// і змінна wantedCopy і об'єкт obj посилаються на одну і ту ж комірку пам'яті
wantedCopy.key1 = 1;
console.log(obj, wantedCopy);

//Одновимірне копіювання
const singleLevelCopy = { ...obj };
singleLevelCopy.key2 = 'changed value in copied object';
singleLevelCopy.key4.subKey1 = 'changed nested object property';
console.log('--- single level copy ---');
console.log(obj, singleLevelCopy);

// Повне копіювання об'єкта
const deepCopy = structuredClone(obj);
const deepCopyWithDoubleConversion = JSON.parse(JSON.stringify(obj));
deepCopy.key4.subKey3 = 'changed nested prop from deep copy demo';
deepCopyWithDoubleConversion.key4.subKey3 = 'changed nested prop from deep copy with double conversion demo';
console.log('---deep copy ---');
console.log(obj, deepCopy, deepCopyWithDoubleConversion);


// Методи для об'єктів
console.log('\n---common used object methods ---');
const objKeys = Object.keys(obj); // Виводить масив ключів одного виміру об'єкта
const objValues = Object.values(obj); // Виводить масив значень одного виміру об'єкта
const objEntries = Object.entries(obj); // Виводить масив ключів і значень одного виміру об'єкта
console.log(objKeys, objValues, objEntries);

console.log(Object.keys(obj.key4)); // Виводить масив ключів вкладеного об'єкта

console.log('---function with method ---');
const objWithMethod = structuredClone(obj);
objWithMethod.objMethod = function () {
    console.log('objMethod');
    console.log(this);
    console.log(this.key1);
};
objWithMethod.objMethod();

