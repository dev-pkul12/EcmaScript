/* Symbols in Ecma Script */

// Symbols are new primitive type introduced in ES6. Symbols are completely unique identifiers. Just like their primitive counterparts (Number, String, Boolean), they can be created using the factory function Symbol() which returns a Symbol.

const symbol = Symbol('description')

Symbol() === Symbol()
false