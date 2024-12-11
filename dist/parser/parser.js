import { FunctionRegistry } from '../functions/registry';
import { Tokenizer } from './tokenizer';
export class FormulaParser {
    constructor(allowedColumns) {
        this.allowedColumns = allowedColumns;
        this.functionRegistry = new FunctionRegistry();
    }
    parse(formula) {
        try {
            const tokenizer = new Tokenizer(formula);
            const tokens = tokenizer.tokenize();
            return this.parseTokens(tokens);
        }
        catch (error) {
            if (error instanceof Error) {
                throw 'Error'; // new ParseError(error.message, 0, 'Valid formula');
            }
            throw error;
        }
    }
    parseTokens(tokens) {
        // Implement token parsing logic
        throw new Error('Not implemented');
    }
    stringify(node) {
        switch (node.type) {
            case 'function':
                const args = node.children?.map(child => this.stringify(child)).join(', ') || '';
                return `${node.value}(${args})`;
            case 'column':
                return `{${node.value}}`;
            case 'literal':
                return node.value;
            case 'operator':
                const [left, right] = node.children || [];
                return `(${this.stringify(left)} ${node.value} ${this.stringify(right)})`;
            default:
                throw new Error(`Unknown node type: ${node.type}`);
        }
    }
}
