export class Tokenizer {
    constructor(input) {
        this.input = input;
        this.position = 0;
    }
    tokenize() {
        const tokens = [];
        while (this.position < this.input.length) {
            const char = this.input[this.position];
            if (this.isWhitespace(char)) {
                this.position++;
                continue;
            }
            if (this.isLetter(char)) {
                tokens.push(this.readIdentifier());
                continue;
            }
            // Add more token parsing logic here
            this.position++;
        }
        return tokens;
    }
    isWhitespace(char) {
        return /\s/.test(char);
    }
    isLetter(char) {
        return /[a-zA-Z]/.test(char);
    }
    readIdentifier() {
        const start = this.position;
        while (this.position < this.input.length && this.isLetter(this.input[this.position])) {
            this.position++;
        }
        return {
            type: 'function',
            value: this.input.slice(start, this.position),
            position: start
        };
    }
}
