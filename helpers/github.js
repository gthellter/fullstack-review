const axios = require('axios');
const config = require('../config.js');

var getUser = axios.create({
 baseURL: 'https://api.github.com/',
 timeout: 1000,
 headers: {
   'User-Agent': 'request',
   'Authorization': `token ${config.TOKEN}`
 }});
async function getReposByUsername (username, callback) {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  try {
    const response =  await getUser.get(`users/${username}/repos`);
    const userRepos = response.data.map((repo, i) => {
      let currentRepo = {
        Repo_id: repo.id,
        Repo_Name: repo.name,
        Repo_url: repo.html_url,
        Owner_login: repo.owner.login,
        Owner_img: repo.owner.avatar_url,
        Watchers_count: repo.watchers_count,
        Stargazers_count: repo.stargazers_count,
        Forks: repo.forks
      }
      return currentRepo;
    });
    callback(null, userRepos);
  } catch (e) {
    console.log(e);
    callback(e, null);
  }


}
/*
user_login = response.data.owner.login
user_id = response.data.owner.id
user_img = response.data.owner.avatar_url
repo_url = response.data.html_url
repo_name = response.data.name
repo_id = response.data.id
stargazers_count = response.data.stargazers_count
watchers_count = response.data.watchers_count
forks = response.data.forks
date_added_to_list = date()


*/
module.exports.getReposByUsername = getReposByUsername;