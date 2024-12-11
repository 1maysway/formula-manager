import { v4 as uuidv4 } from 'uuid';
import { Column, FormulaNode, ParseError } from '../types';
import { FunctionRegistry } from '../functions/registry';
import { Tokenizer, Token } from './tokenizer';

export class FormulaParser {
  private allowedColumns: Column[];
  private functionRegistry: FunctionRegistry;

  constructor(allowedColumns: Column[]) {
    this.allowedColumns = allowedColumns;
    this.functionRegistry = new FunctionRegistry();
  }

  parse(formula: string): FormulaNode {
    try {
      const tokenizer = new Tokenizer(formula);
      const tokens = tokenizer.tokenize();
      return this.parseTokens(tokens);
    } catch (error) {
      if (error instanceof Error) {
        throw 'Error'; // new ParseError(error.message, 0, 'Valid formula');
      }
      throw error;
    }
  }

  private parseTokens(tokens: Token[]): FormulaNode {
    // Implement token parsing logic
    throw new Error('Not implemented');
  }

  stringify(node: FormulaNode): string {
    switch (node.type) {
      case 'function':
        const args = node.children?.map(child => this.stringify(child)).join(', ') || '';
        return `${node.value}(${args})`;
      case 'column':
        return `{${node.value}}`;
      case 'literal':
        return node.value;
      case 'operator':
        const [left, right] = node.children || [];
        return `(${this.stringify(left)} ${node.value} ${this.stringify(right)})`;
      default:
        throw new Error(`Unknown node type: ${node.type}`);
    }
  }
}