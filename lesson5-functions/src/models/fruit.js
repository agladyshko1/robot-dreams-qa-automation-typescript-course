export class Fruit {
    #name;
    #color;
    sweetnwss;

    constructor(name, color, sweetness) {
        this.#name = name;
        this.#color = color;
        this.sweetness = sweetness;
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
        console.log(this.#name, this.color, this.sweetness);
    }
};



