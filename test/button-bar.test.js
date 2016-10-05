var assert = require('assert');
var fs = require('fs');

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

describe('Topcoat button bar', function() {
  'use strict';

  it('should output correct desktop light css', function() {
    var actual = read('css/desktop-light.css');
    var expected = read('test/expected/desktop-light.css');
    assert.equal(actual, expected, 'should generate correct css');
  });

  it('should output correct desktop dark css', function() {
    var actual = read('css/desktop-dark.css');
    var expected = read('test/expected/desktop-dark.css');
    assert.equal(actual, expected, 'should generate correct css');
  });

  it('should output correct mobile light css', function() {
    var actual = read('css/mobile-light.css');
    var expected = read('test/expected/mobile-light.css');
    assert.equal(actual, expected, 'should generate correct css');
  });

  it('should output correct mobile dark css', function() {
    var actual = read('css/mobile-dark.css');
    var expected = read('test/expected/mobile-dark.css');
    assert.equal(actual, expected, 'should generate correct css');
  });

  it('mobile light should not have any unrendered variables', function() {
    var actual = read('css/mobile-light.css');
    assert.equal(actual.match(/var-[a-z-]*[a-z]+/g), null, 'should not have missing vars');
  });


  it('should output correct mobile dark css', function() {
    var actual = read('css/mobile-dark.css');
    var expected = read('test/expected/mobile-dark.css');
    assert.equal(actual, expected, 'should generate correct css');
  });

  it('mobile dark should not have any unrendered variables', function() {
    var actual = read('css/mobile-dark.css');
    assert.equal(actual.match(/var-[a-z-]*[a-z]+/g), null, 'should not have missing vars');
  });

  it('should output correct desktop dark css', function() {
    var actual = read('css/desktop-dark.css');
    var expected = read('test/expected/desktop-dark.css');
    assert.equal(actual, expected, 'should generate correct css');
  });

  it('desktop dark should not have any unrendered variables', function() {
    var actual = read('css/desktop-dark.css');
    assert.equal(actual.match(/var-[a-z-]*[a-z]+/g), null, 'should not have missing vars');
  });


  it('should output correct desktop light css', function() {
    var actual = read('css/desktop-light.css');
    var expected = read('test/expected/desktop-light.css');
    assert.equal(actual, expected, 'should generate correct css');
  });

  it('desktop light should not have any unrendered variables', function() {
    var actual = read('css/desktop-light.css');
    assert.equal(actual.match(/var-[a-z-]*[a-z]+/g), null, 'should not have missing vars');
  });

});
