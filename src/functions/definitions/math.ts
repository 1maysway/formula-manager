import { ColumnType } from '../../types';
import { FunctionDefinition } from '../types';

export const mathFunctions: Record<string, FunctionDefinition> = {
  ADD: {
    name: 'ADD',
    minArgs: 2,
    maxArgs: 2,
    validateArgs: (args) => args.every(arg => typeof arg === 'number'),
    allowedTypes: [ColumnType.Long, ColumnType.Decimal]
  },
  MULTIPLY: {
    name: 'MULTIPLY',
    minArgs: 2,
    maxArgs: 2,
    validateArgs: (args) => args.every(arg => typeof arg === 'number'),
    allowedTypes: [ColumnType.Long, ColumnType.Decimal]
  }
};