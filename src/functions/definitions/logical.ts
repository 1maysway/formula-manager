import { ColumnType } from '../../types';
import { FunctionDefinition } from '../types';

export const logicalFunctions: Record<string, FunctionDefinition> = {
  AND: {
    name: 'AND',
    minArgs: 2,
    maxArgs: -1,
    validateArgs: (args) => args.every(arg => typeof arg === 'boolean'),
    allowedTypes: [ColumnType.Boolean]
  },
  OR: {
    name: 'OR',
    minArgs: 2,
    maxArgs: -1,
    validateArgs: (args) => args.every(arg => typeof arg === 'boolean'),
    allowedTypes: [ColumnType.Boolean]
  }
};