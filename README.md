# jasmine-immutablejs-matchers
Jasmine matchers for Immutable.js

[![Build Status](https://travis-ci.org/kevinold/jasmine-immutablejs-matchers.svg?branch=master)](https://travis-ci.org/kevinold/jasmine-immutablejs-matchers)

This package provides 2 matchers `toBeImmutable` and `toEqualImmutable` for testing and verifying Immutable objects for *Jasmine 2.x*

# Requirements

  - Jasmine 2.x

# Installation

Install via npm:

```
npm install jasmine-immutablejs-matchers
```

# Usage

### Node.js

Require into your tests and use:

```javascript
require('jamsine-immutablejs-matchers');

it("should confirm Immutability", function() {
  var data = Immutable.Map({'a': 1, 'b': 2});
  expect(data).toBeImmutable();
});
```

### Browser

```javascript
<script src="/node_modules/jasmine-immutablejs-matchers/index.js"></script>
```

# Matchers

## toBeImmutable() - confirm Immutability

```javascript
var data = Immutable.Map({'a': 1, 'b': 2});
expect(data).toBeImmutable();
```

## toEqualImmutable() - confirm equality / inequalitiy

```javascript
var data = Immutable.Map({'a': 1, 'b': 2});
expect(data).toEqualImmutable(data);

var obj = {'a': 1, 'b': 2};
var data = Immutable.Map(obj);
expect(data).not.toEqualImmutable(obj);
```

# Credits

- `toEqualImmutable` based on the `is` matcher straight from [Lee Byron's gist](https://gist.github.com/leebyron/755227877ce47077e16d)
- Joel Lanciaux
- Ryan Lanciaux
- Jeff Barczewski
