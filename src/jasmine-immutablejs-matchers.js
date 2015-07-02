var Immutable = require('immutable');

beforeEach(function () {

  jasmine.addMatchers({
    toBeImmutable: function() {
      return {
        compare: function(actual, expected) {
          return { pass: Immutable.Iterable.isIterable(actual) };
        }
      };
    },
    is: function(expected) {
      //return Immutable.is(actual, expected);
      return {
        compare: function(actual, expected) {
          return { pass: Immutable.is(actual, expected) };
        }
      };
    }
  });

});
