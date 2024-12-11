import { ColumnType } from '../types';

export interface FunctionDefinition {
  name: string;
  minArgs: number;
  maxArgs: number;
  validateArgs: (args: any[]) => boolean;
  allowedTypes: ColumnType[];
}

export const functions: Record<string, FunctionDefinition> = {
  ADD: {
    name: 'ADD',
    minArgs: 2,
    maxArgs: 2,
    validateArgs: (args) => args.every(arg => typeof arg === 'number'),
    allowedTypes: [ColumnType.Long, ColumnType.Decimal]
  },
  // Add other function definitions here
};