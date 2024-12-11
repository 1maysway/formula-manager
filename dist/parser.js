import { v4 as uuidv4 } from 'uuid';
export class FormulaParser {
    constructor(allowedColumns) {
        this.allowedColumns = allowedColumns;
    }
    parse(formula) {
        try {
            return this.parseFormula(formula.trim());
        }
        catch (error) {
            if (error instanceof Error) {
                throw 'Error'; // new ParseError(error.message, 0, 'Valid formula');
            }
            throw error;
        }
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
    parseFormula(formula) {
        // Basic implementation - expand based on requirements
        if (formula.startsWith('{') && formula.endsWith('}')) {
            const columnName = formula.slice(1, -1);
            if (!this.allowedColumns.find(col => col.name === columnName)) {
                throw new Error(`Column ${columnName} is not available`);
            }
            return {
                id: uuidv4(),
                type: 'column',
                value: columnName
            };
        }
        // Add more parsing logic for functions and operators
        throw new Error('Not implemented');
    }
}
