import { Column, FormulaNode } from '../types';
export declare class FormulaParser {
    private allowedColumns;
    private functionRegistry;
    constructor(allowedColumns: Column[]);
    parse(formula: string): FormulaNode;
    private parseTokens;
    stringify(node: FormulaNode): string;
}
