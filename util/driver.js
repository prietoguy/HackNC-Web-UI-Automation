'use strict';

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var assert = chai.assert;

module.exports = {

  assert : assert,

  goTo(URL) {
    browser.get(URL);
  },

  getUrl : browser.getCurrentUrl,

  getTitle : browser.getTitle

};