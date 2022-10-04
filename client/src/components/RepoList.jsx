import React from 'react';
import SingleRepo from './SingleRepo.jsx'
const RepoList = ({ repos }) => {

  return (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    {repos.map((repo) => (
      <SingleRepo repo={repo} />
    )
    )}
  </div>
)};

export default RepoList;