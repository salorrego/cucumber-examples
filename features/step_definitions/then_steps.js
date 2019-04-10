const assert = require('assert');
const { Then } = require('cucumber');

Then('I should be told {string}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});
