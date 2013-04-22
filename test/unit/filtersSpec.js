'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {
  beforeEach(module('myApp.filters'));


  describe('interpolate', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER');
    }));


    it('should replace VERSION', inject(function(interpolateFilter) {
      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
    }));
  });

  describe('reverse', function(){
  	it('should reverse string', inject(function(reverseFilter){
  		expect(reverseFilter('test')).toEqual('tset');

  		var testFunc = function(){
  			reverseFilter(1234);
  		}
  		expect(testFunc).toThrow(new TypeError("Object 1234 has no method 'split'"))

  		expect(reverseFilter(null)).toEqual(null);
  		expect(reverseFilter("")).toEqual("");
  	}));
  });
});
