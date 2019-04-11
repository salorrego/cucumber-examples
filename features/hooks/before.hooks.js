const { Before, BeforeAll } = require('cucumber');
const accessToken = require('./../../auth_config.json').access_token;

Before('@skip', function () {
  return 'skipped';
});

BeforeAll(function() {
  this.accessToken = accessToken;
});

Before('@better', function() {
  console.log('\tTHIS IS A BETTER TEST (⌐■_■)')
})