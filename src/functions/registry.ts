import { FunctionDefinition } from './types';
import { mathFunctions } from './definitions/math';
import { logicalFunctions } from './definitions/logical';

export class FunctionRegistry {
  private functions: Map<string, FunctionDefinition>;

  constructor() {
    this.functions = new Map();
    this.registerBuiltInFunctions();
  }

  private registerBuiltInFunctions(): void {
    const allFunctions = {
      ...mathFunctions,
      ...logicalFunctions
    };

    Object.entries(allFunctions).forEach(([name, def]) => {
      this.functions.set(name, def);
    });
  }

  get(name: string): FunctionDefinition | undefined {
    return this.functions.get(name);
  }

  has(name: string): boolean {
    return this.functions.has(name);
  }
}