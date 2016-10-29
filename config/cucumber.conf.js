'use strict';

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  getPageTimeout: 30000,

  capabilities: {
    browserName: 'chrome',
    'maxInstances': 1
  },

  onPrepare: function() {
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;
  },

  specs: ['../features/*.feature'],

  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    format: 'pretty',
    require: [
      '../features/steps/steps.js',
      '../features/steps/*.steps.js'
    ]
  }
};