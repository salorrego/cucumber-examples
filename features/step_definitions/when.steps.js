const { When } = require('cucumber');
const agent = require('superagent-promise')(require('superagent'), Promise);

When('User tries to get repos of {string}', async function (userName) {
  await agent.get(this.userInfo.repos_url)
    .auth('token', this.accessToken)
    .then((response) => {
      this.repos = response.body;
  });
});

When('User tries to get {string} repo from {string} user', async function(expectedRepository, userName) {
  await agent.get(this.userInfo.repos_url)
    .auth('token', this.accessToken)
    .then((response) => {
      this.repository = response.body.find(repos => repos.name === expectedRepository);
  });

  await agent.get(`${this.repository.url}/contents`)
    .auth('token', this.accessToken)
    .then((response) => {
      this.packageJson = response.body.find(files => files.name === 'package.json');
  });
});

When('User tries to get {string} repo from pulled repos', async function(expectedRepository) {
  this.repository = this.repos.find(repos => repos.name === expectedRepository);

  await agent.get(`${this.repository.url}/contents`)
    .auth('token', this.accessToken)
    .then((response) => {
      this.packageJson = response.body.find(files => files.name === 'package.json');
  });
});
