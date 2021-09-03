class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.current = Math.ceil(this.min + (this.max - this.min)/2);
    }

    guess() {
        return this.current;
    }

    lower() {
        this.max = this.current;
        this.current = Math.ceil(this.min + (this.max - this.min)/2);
    }

    greater() {
        this.min = this.current;
        this.current = Math.ceil(this.min + (this.max - this.min)/2);
    }
}

module.exports = GuessingGame;
