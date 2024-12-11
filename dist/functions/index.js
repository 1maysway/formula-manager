import { ColumnType } from '../types';
export const functions = {
    ADD: {
        name: 'ADD',
        minArgs: 2,
        maxArgs: 2,
        validateArgs: (args) => args.every(arg => typeof arg === 'number'),
        allowedTypes: [ColumnType.Long, ColumnType.Decimal]
    },
    // Add other function definitions here
};
