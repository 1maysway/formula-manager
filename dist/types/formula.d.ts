export interface FormulaNode {
    id: string;
    type: 'function' | 'operator' | 'column' | 'literal';
    value: string;
    children?: FormulaNode[];
}
export interface ParseError extends Error {
    position: number;
    expected: string;
}
