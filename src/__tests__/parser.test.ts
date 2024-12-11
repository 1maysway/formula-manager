import { FormulaParser } from '../parser';
import { ColumnType } from '../types';

describe('FormulaParser', () => {
  const allowedColumns = [
    { name: 'Revenue', type: ColumnType.Decimal },
    { name: 'Quantity', type: ColumnType.Long }
  ];

  const parser = new FormulaParser(allowedColumns);

  test('parses simple column reference', () => {
    const ast = parser.parse('{Revenue}');
    expect(ast.type).toBe('column');
    expect(ast.value).toBe('Revenue');
  });

  test('throws error for invalid column', () => {
    expect(() => parser.parse('{InvalidColumn}')).toThrow();
  });

  // Add more tests
});