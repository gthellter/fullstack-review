import React, {useState, useEffect} from 'react';

const Search = ({ onSearch, value, setValue }) => {


  function onChange (e) {
    console.log(e.target.value);
    setValue(e.target.value);
  };


  return (
    <div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={ value } onChange={ onChange }/>
      <button onClick={ (e) => { onSearch(value) } }> Add Repos </button>
    </div>
    )
  }


export default Search;