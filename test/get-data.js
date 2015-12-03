'use strict';

var test = require('tap').test;
var interests = require('../')();
var data = require('../data.json');

test('get all interests', function (t) {
  t.equal(interests.getData().length, data.length, 'data list should be the same lenght as data.json');
  t.type(interests.getData(), Array, 'data list is an array');
  t.type(interests.getData()[0], 'string', 'first item in list should be string');
  t.end();
});
