import React, {useState, useEffect} from 'react';

const SingleRepo = ({repo}) => {

  var style = {
    backgroundColor: 'Gray',
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
    textDecoration: "none"
  }
  return (
    <div style={style} >
      <a style={{textDecoration: 'none', color: 'black'}} href={repo.Repo_url} class="title" >{repo.Repo_Name}</a>
      <p> ({repo.Forks} Forks)</p>
    </div>
  )
}

export default SingleRepo;