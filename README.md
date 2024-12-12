# Excel Formula Builder

A type-safe TypeScript library for building and managing Excel formulas.

## Features

- Support for common Excel formula functions
- Type checking for formula arguments
- Column reference handling
- Error validation
- Localization support
- Parse formulas to AST and back

## Installation

```bash
npm install excel-formula-builder
```

## Usage

```typescript
import { FormulaParser, ColumnType } from 'excel-formula-builder';

// Define allowed columns
const allowedColumns = [
  { name: 'Revenue', type: ColumnType.Decimal },
  { name: 'Quantity', type: ColumnType.Long }
];

// Create parser instance
const parser = new FormulaParser(allowedColumns);

// Parse formula
try {
  const ast = parser.parse('ADD({Revenue}, MULTIPLY({Quantity}, 2))');
  console.log(ast);
  
  // Convert back to string
  const formula = parser.stringify(ast);
  console.log(formula);
} catch (error) {
  console.error('Formula error:', error.message);
}
```

## License

MIT
