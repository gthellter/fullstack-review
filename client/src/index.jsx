import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = () => {


  function getRepos () {
    $.ajax ({
      url: 'http://127.0.0.1:1128/repos',
      type: 'GET',
      contentType: 'application/json',
      success: (serverRepos) => {
        console.log(serverRepos);
        setRepos(serverRepos);
       },
      error: (error) => {console.log(error)}
    })
  }

useEffect(() => {
  getRepos();
}, [])

  const [value, setValue] = useState('');
  const [repos, setRepos] = useState([]);

  function search (username) {
    console.log(username);
    let user = {'username': username};
    console.log(user);
    $.ajax ({
      url: 'http://127.0.0.1:1128/repos',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(user),
      success: (serverRepos) => {
        console.log(serverRepos);
        setRepos(serverRepos);
       },
      error: (error) => {console.log(error)}
    })
  }

return (
  <div>
    <h1>Github Fetcher</h1>
    <RepoList repos={repos}/>
    <Search onSearch={search} value={value} setValue={setValue}/>
  </div>
)
}

ReactDOM.render(<App />, document.getElementById('app'));