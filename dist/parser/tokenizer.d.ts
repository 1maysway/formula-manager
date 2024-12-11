export interface Token {
    type: 'function' | 'operator' | 'column' | 'literal' | 'parenthesis' | 'comma';
    value: string;
    position: number;
}
export declare class Tokenizer {
    private input;
    private position;
    constructor(input: string);
    tokenize(): Token[];
    private isWhitespace;
    private isLetter;
    private readIdentifier;
}
