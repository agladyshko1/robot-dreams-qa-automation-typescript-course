const apple = {
    color: 'red',
    weight: 150,
    season: 'fall',

    get validWeight() {
        return this.weight;
    },
    set validWeight(newWeight) {
        if (newWeight < 200 || newWeight > 1000) {
            console.log('this fruit isn`t normal');
            return;
        }
        this.weight = newWeight;

    },

    set color(value) {
        this._color = value.toUpperCase();
    },
    get color() {
        return this._color;
    }
};

apple.validWeight = 1500;
console.log(apple.validWeight);

apple.color = 'green';
console.log(apple.color);
console.log('-----------------');

const user = {
    _name: 'John',
    set name(value) {
        console.log(`New name: ${value}`);
        this._name = value;
    },
    get name() {
        return this._name;
    }
};
user.name = 'Mike';
console.log(user.name);
console.log('-----------------');

const person = {
    _age: 30,
    set age(value) {
        if (value < 18 || value > 65) {
            console.log(`Age: ${value} - not a worker`);
        } else console.log(`Age: ${value} - good worker`);
        this._age = value;
    },
    get age() {
        return this._age;
    }
};
person.age = 40;
console.log(person.age);
console.log('-------------');

const book = {
    _tittle: '',
    set title(value) {
        this._tittle = value.toUpperCase();
    },
    get title() {
        return this._tittle;
    }
};
book.title = 'big title';
console.log(book.title);
console.log('------------');


const cart = {
    _item: [],
    set addItem(value) {
        if (value > 0) {
            this._item.push(value);
        } else console.log('Item < 0');
    },
    get total() {
        let counter = 0;
        for (const value of this._item) {
            counter += value;
        }
        return counter;
    }
};
cart.addItem = 5;
cart.addItem = -5;
cart.addItem = 17;
cart.addItem = -10;
console.log(cart.total);
