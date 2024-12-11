import { Column, FormulaNode } from './types';
export declare class FormulaParser {
    private allowedColumns;
    constructor(allowedColumns: Column[]);
    parse(formula: string): FormulaNode;
    stringify(node: FormulaNode): string;
    private parseFormula;
}
