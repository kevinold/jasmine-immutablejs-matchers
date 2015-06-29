# jasmine-immutablejs-matchers
Jasmine matchers for Immutable.js

# Usage

This package provides 2 matchers `toBeImmutable` and `is` for testing and verifying Immutable objects.

# Examples

```
// confirm Immutability
var data = Immutable.Map({'a': 1, 'b': 2});
expect(data).toBeImmutable();

// confirm equality
var data = Immutable.Map({'a': 1, 'b': 2});
expect(data).is(data);

// confirm inequalitiy
var obj = {'a': 1, 'b': 2};
var data = Immutable.Map(obj);
expect(data).not.is(obj);
```
