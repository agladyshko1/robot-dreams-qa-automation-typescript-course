export class Vegetable {
    #name;
    #color;
    size;

    constructor(name, color, size) {
        this.#name = name;
        this.#color = color;
        this.size = size;
    }

    get name() {
        return this._name.toLocaleUpperCase();
    };

    get color() {
        return this.#color;
    }

    set name(value) {
        this._name = value.toLocaleLowerCase();
    }

    logInfo() {
        console.log(this.#name, this.color, this.size);
    }
};



