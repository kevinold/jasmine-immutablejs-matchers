var Immutable = require('immutable');

beforeEach(function () {

  this.addMatchers({

    toBeImmutable: function() {
      return Immutable.Iterable.isIterable(this.actual);
    },

    toBeActualImmutable: function(expected) {
      return Immutable.is(this.actual, expected);
    }

  });

});
