import { Tokenizer } from '../../parser/tokenizer';

describe('Tokenizer', () => {
  test('tokenizes function name', () => {
    const tokenizer = new Tokenizer('ADD');
    const tokens = tokenizer.tokenize();
    expect(tokens).toHaveLength(1);
    expect(tokens[0]).toEqual({
      type: 'function',
      value: 'ADD',
      position: 0
    });
  });

  // Add more tokenizer tests
});