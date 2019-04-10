const { Given } = require('cucumber');

Given('today is {string}', function (givenDay) {
  this.today = givenDay;
});
