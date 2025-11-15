const homeObject = {};
homeObject.homekey1 = 'value1';
homeObject['homekey2 with home space'] = 'value2 with home space';
homeObject['homekey3'] = [10, 'massvalue2', true];
homeObject.homekey4 = {
    homeSubKey1: true,
    homeSubKey2: 'homeSubValue2',
    homeSubKey3: [],
    homeSubKey4: 123
};

console.log(homeObject);
console.log(JSON.stringify(homeObject));

console.log('\n---Show object`s keys and values ---');

const homeObjectEntries = Object.entries(homeObject);
const homeObjectEntriesHomeKey4 = Object.entries(homeObject.homekey4);
console.log(homeObjectEntries, homeObjectEntriesHomeKey4);
