import { ColumnType } from '../types';
export interface FunctionDefinition {
    name: string;
    minArgs: number;
    maxArgs: number;
    validateArgs: (args: any[]) => boolean;
    allowedTypes: ColumnType[];
}
export declare const functions: Record<string, FunctionDefinition>;
