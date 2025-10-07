const obj = {}; // створили олбласть в пам"яті ПК address #8ACD45E56

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

// на лекції ми розглянули копіювання шорткатів на рідмі
const wantedCopy = obj; // ми присвоїли посилання на пам"ять одб"єкту obj новому об"єкту <-- #8ACD45E56
wantedCopy.key1 = 1;
console.log(obj, wantedCopy);

const singleLevelCopy = { ...obj };
singleLevelCopy.key2 = 'changed value in copied object';
singleLevelCopy.key4.subKey1 = 'changed nested object property';
console.log('---single level copy ---');
console.log(obj, singleLevelCopy);

const deepCopy = structuredClone(obj);
const deppCopyWithDoubleConversion = JSON.parse(JSON.stringify(obj));
deepCopy.key4.subKey3 = 'changed nested prop fro deep copy demo';
deppCopyWithDoubleConversion.key4.subKey3 = 'changed nested prop fro deep copy with double conversion demo';
console.log('---deep copy ---');
console.log(obj, deepCopy, deppCopyWithDoubleConversion);

console.log('\ncommon used object methods');
const objKeys = Object.keys(obj);
const objValues = Object.values(obj);
const objEntries = Object.entries(obj);
console.log(objKeys, objValues, objEntries);

console.log(Object.keys(obj.key4));

const objWithMethod = structuredClone(obj);
objWithMethod.objMethod = function () {
    console.log('objMethod');
    console.log(this);
    console.log(this.key1);
};

objWithMethod.objMethod();

// object constructor
function objectConstructor(name, prop) {
    this.name = name;
    this.prop = prop;
}
const objFromConstructor = new objectConstructor('name', {key: 'value'});
console.log(objFromConstructor);
