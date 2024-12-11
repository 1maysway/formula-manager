import { FunctionRegistry } from '../../functions/registry';

describe('FunctionRegistry', () => {
  const registry = new FunctionRegistry();

  test('has ADD function', () => {
    expect(registry.has('ADD')).toBe(true);
  });

  test('has AND function', () => {
    expect(registry.has('AND')).toBe(true);
  });

  // Add more registry tests
});