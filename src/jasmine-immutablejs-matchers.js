var Immutable = require('immutable');

beforeEach(function () {

  this.addMatchers({
    toBeImmutable: function() {
      return Immutable.Iterable.isIterable(this.actual);
    }
    is: function(expected) {
      if (this.toBeImmutable(expected) && this.toBeImutable(this.actual)) {
        return Immutable.is(this.actual, expected);
      }
      return false;
    }
  });

});
