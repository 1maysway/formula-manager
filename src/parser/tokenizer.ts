export interface Token {
  type: 'function' | 'operator' | 'column' | 'literal' | 'parenthesis' | 'comma';
  value: string;
  position: number;
}

export class Tokenizer {
  private input: string;
  private position: number;

  constructor(input: string) {
    this.input = input;
    this.position = 0;
  }

  tokenize(): Token[] {
    const tokens: Token[] = [];
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

  private isWhitespace(char: string): boolean {
    return /\s/.test(char);
  }

  private isLetter(char: string): boolean {
    return /[a-zA-Z]/.test(char);
  }

  private readIdentifier(): Token {
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