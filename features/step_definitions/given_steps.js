const { Given } = require('cucumber');
const agent = require('superagent-promise')(require('superagent'), Promise);
const accessToken = require('./../../auth_config.json').access_token;

const urlBase = 'https://api.github.com';


Given('User is logged in', async function () {
  this.urlBase = urlBase;
  this.accessToken = accessToken;
  await agent.get(`${this.urlBase}/users/salorrego`)
    .auth('token', accessToken)
    .then((response) => {
      this.userInfo = response.body;
    });
});
