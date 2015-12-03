'use strict';

var test = require('tap').test;
var interests = require('../')();
var data = require('../data.json');
var _ = require('lodash');

test('get all interests', function (t) {
  // console.log(_.chain(data).sortBy().uniq().value());

  t.equal(interests.getData().length, data.length, 'data list should be the same lenght as data.json');
  t.type(interests.getData(), Array, 'data list is an array');
  t.type(interests.getData()[0], 'string', 'first item in list should be string');
  t.end();
});
