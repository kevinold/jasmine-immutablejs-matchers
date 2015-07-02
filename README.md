# jasmine-immutablejs-matchers
Jasmine matchers for Immutable.js

[![Build Status](https://travis-ci.org/kevinold/jasmine-immutablejs-matchers.svg?branch=master)](https://travis-ci.org/kevinold/jasmine-immutablejs-matchers)

# Installation

```
npm install jasmine-immutablejs-matchers
```

# Usage

This package provides 2 matchers `toBeImmutable` and `toEqualImmutable` for testing and verifying Immutable objects.

# Examples

## toBeImmutable()

```javascript
// confirm Immutability
var data = Immutable.Map({'a': 1, 'b': 2});
expect(data).toBeImmutable();
```

## toEqualImmutable()

```javascript
// confirm equality
var data = Immutable.Map({'a': 1, 'b': 2});
expect(data).toEqualImmutable(data);

// confirm inequalitiy
var obj = {'a': 1, 'b': 2};
var data = Immutable.Map(obj);
expect(data).not.toEqualImmutable(obj);
```

# Credits

`toEqualImmutable` based on the `is` matcher is straight from [Lee Byron's gist](https://gist.github.com/leebyron/755227877ce47077e16d)
Joel Lanciaux
Ryan Lanciaux
Jeff Barczewski
