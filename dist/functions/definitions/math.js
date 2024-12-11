import { ColumnType } from '../../types';
export const mathFunctions = {
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
