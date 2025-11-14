const arr = [];

arr.push('1');
arr.push(2);
arr.push(true);

console.log(arr, ',', arr.length);
console.log(arr[0], arr[2]);

arr[2] = 'changed value';
console.log(arr);

const element = arr.pop();
console.log(element);

arr.push(1);
arr.push({a:1, b:2});
arr.push(3);
arr.push(true);
arr.push('5');
arr.push(1);

console.log('--------', arr, '---------');
console.log("---------");
const filtefedArr = arr.filter((item) => typeof item === 'string');
const foundElement = arr.find((item) => typeof item === 'string');
const filterArr1 = arr.filter((item) => item === 1);
console.log(filtefedArr, ', ', foundElement, ', ', filterArr1);

console.log("---------");
const sortedArrABS = arr.sort((a, b) => a - b);
const sortedArrDESC = arr.sort((a, b) => b - a);
console.log(sortedArrABS, ', ', sortedArrDESC);

//reduce
const sum = [1, 2, 3, 4, 5].reduce((acc, item) => acc + item, 0);
console.log(sum);

