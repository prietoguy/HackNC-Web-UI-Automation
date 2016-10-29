'use strict';

let pages = require('../pages/');

module.exports = function() {

  this.When(/^the dashboard button is clicked$/, function () {
    pages.home.dashboardBTN.click();
  });

};