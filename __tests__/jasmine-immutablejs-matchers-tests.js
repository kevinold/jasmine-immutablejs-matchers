jest.dontMock('immutable');
var Immutable = require('immutable');
require('../src/jasmine-immutablejs-matchers');

describe("isImmutable", function() {

  describe("when invoked", function() {

    describe("when expected Immutable object is actual Immutable object", function() {

      it("should confirm Immutability", function() {
        var data = Immutable.Map({'a': 1, 'b': 2});
        expect(data).toBeImmutable();
      });

      it("should confirm", function() {
        var data = Immutable.Map({'a': 1, 'b': 2});
        expect(data).is(data);
      });

      it("should be false when NOT a match", function() {
        var obj = {'a': 1, 'b': 2};
        var data = Immutable.Map(obj);
        expect(data).not.is(obj);
      });

    });

  });
});

