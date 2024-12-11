export declare enum ColumnType {
    Id = "id",
    String = "string",
    Long = "long",
    Decimal = "decimal",
    Boolean = "boolean",
    Date = "date",
    Time = "time",
    DateTime = "date_time"
}
export interface Column {
    name: string;
    type: ColumnType;
}
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
