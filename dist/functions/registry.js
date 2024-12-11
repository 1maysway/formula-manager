import { mathFunctions } from './definitions/math';
import { logicalFunctions } from './definitions/logical';
export class FunctionRegistry {
    constructor() {
        this.functions = new Map();
        this.registerBuiltInFunctions();
    }
    registerBuiltInFunctions() {
        const allFunctions = {
            ...mathFunctions,
            ...logicalFunctions
        };
        Object.entries(allFunctions).forEach(([name, def]) => {
            this.functions.set(name, def);
        });
    }
    get(name) {
        return this.functions.get(name);
    }
    has(name) {
        return this.functions.has(name);
    }
}
