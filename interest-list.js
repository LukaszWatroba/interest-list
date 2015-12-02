'use strict';

var data = require('./data.json');

function InterestList () {
  if (!(this instanceof InterestList)) return new InterestList();
}

InterestList.prototype.getData = function getData () {
  return data;
};

module.exports = InterestList;
