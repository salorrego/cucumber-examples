const assert = require('assert');
const { Then } = require('cucumber');

Then('User should get public repos of {string}', function (userName) {
  assert.equal(this.userInfo.login, userName);
  assert.equal(this.repos.length > 0, true)
});

Then('User should get a "cucumber-examples" repo with package.json file', function(){
  assert.equal(this.repository.full_name, "salorrego/cucumber-examples");
  assert.equal(this.repository.private, false);
  assert.equal(this.repository.default_branch, 'master');
  assert.equal(this.packageJson.name, 'package.json');
});
