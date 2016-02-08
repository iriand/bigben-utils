var assert = require('assert');
var StringUtils = require('../src/StringUtils');

describe('StringUtils', function () {
    describe('endsWith()', function () {
        it('should return false when initial string doesn\'t end with parameter string', function () {
            assert.equal(false, StringUtils.endsWith('Hello World', 'world'));
            assert.equal(false, StringUtils.endsWith('abc', 'abcd'));
        });
        it('should return true when initial string ends with parameter string', function () {
            assert.equal(true, StringUtils.endsWith('Hello World', 'World'));
            assert.equal(true, StringUtils.endsWith('ABC', 'ABC'));
            assert.equal(true, StringUtils.endsWith('ABcD', 'cD'));
        });
        it('should return false on empty initial string', function () {
            assert.equal(false, StringUtils.endsWith('', 'world'));
        });
        it('should return true on empty parameter string', function () {
            assert.equal(true, StringUtils.endsWith('Some Text', ''));
        });
        it('should return true on empty initial and parameter string', function () {
            assert.equal(true, StringUtils.endsWith('', ''));
        });
        it('should return false on NULL initial string', function () {
            assert.equal(false, StringUtils.endsWith(null, ''));
            assert.equal(false, StringUtils.endsWith(null, '?'));
        });
        it('should return false on NULL parameter string', function () {
            assert.equal(false, StringUtils.endsWith('I am here again', null));
        });
        it('should return false on NULL initial and parameter string', function () {
            assert.equal(false, StringUtils.endsWith(null, null));
        });
    });
});
