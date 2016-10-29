'use strict';

let pages = require('../pages/');
let wd = require('../../util/driver.js');
let assert = wd.assert;

module.exports = function() {

  this.Given(/^I am at the "([^"]*)" page$/, function (name) {
    wd.goTo(pages[name].url);
    return assert.eventually.equal(wd.getUrl(),pages[name].url);
  });

  this.Then(/^I will be taken to the "([^"]*)" page$/, function (name) {
    return assert.eventually.equal(wd.getUrl(),pages[name].url);
  });

};