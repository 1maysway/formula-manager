import { FunctionDefinition } from './types';
export declare class FunctionRegistry {
    private functions;
    constructor();
    private registerBuiltInFunctions;
    get(name: string): FunctionDefinition | undefined;
    has(name: string): boolean;
}
