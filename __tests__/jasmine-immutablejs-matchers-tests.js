jest.dontMock('immutable');
var Immutable = require('immutable');
require('../src/jasmine-immutablejs-matchers');

describe("jasmine immutable matchers", function() {
  
  var data;
  var immutableData;

  beforeEach(function() {
    data = {'a': 1, 'b': 2};
    immutableData = Immutable.Map(data);
  });

  describe("toBeImmutable", function() {

    it("should confirm Immutability", function() {
      expect(immutableData).toBeImmutable();
    });

  });

  describe("toBeActualImmutable", function() {

    describe("when expected Immutable object is actual Immutable object", function() {

      it("should confirm expected is actual", function() {
        expect(data).toBeActualImmutable(data);
      });

      it("should be false when NOT a match", function() {
        expect(immutableData).not.toBeActualImmutable(data);
      });

    });

  });

});  
