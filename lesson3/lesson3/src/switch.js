const a = 5;
switch (a) {
    case 1: {
        console.log('a === 1');
        break;
    }
    case 2:
        console.log('a === 2');
        break;
    case 5:
        console.log('a === 5');
        break;
    default:
        console.log('non of the conditions above');
}


const b = 'string';
switch (b) {
    case 'string': {
        console.log('Type string');
        break;
    }
    case 'string1':
        console.log('Type string1');
        break;
    default:
        console.log('non of the conditions above');
}
