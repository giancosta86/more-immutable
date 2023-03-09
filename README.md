# more-immutable

_Utilities complementing Immutable.js_

**more-immutable** is a tiny TypeScript library currently containing _sorting_ and _testing_ utilities for [immutable](https://www.npmjs.com/package/immutable).

## Installation

```bash
npm install @giancosta86/more-immutable
```

or

```bash
yarn add @giancosta86/more-immutable
```

The public API entirely resides in the root package index, so one shouldn't reference specific modules.

## Usage

Please, refer to:

- `Comparator` and its `PairSorting` enum

- `expectSorting()` - with a fluent notation that one can use to test sorting algorithms

- `testEqualsAndHashCode()` - to be called within a Jest `describe` block in order to automatically generate tests related to _equality_ and _hash code_ for classes implementing the `ValueObject` interface

## Further references

- [immutable](https://www.npmjs.com/package/immutable)
