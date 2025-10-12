let a = 'value';

switch (a) {
    case 1: {
        console.log('Type 1');
        break;
    }
    case 'string': {
        console.log('Type string');
        break;
    }
    case 'value': {
        console.log('Type value');
        break;
    }
    default:
        console.log('Nothing above');
}