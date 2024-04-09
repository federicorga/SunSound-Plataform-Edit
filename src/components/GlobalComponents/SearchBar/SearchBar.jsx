import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar la búsqueda
    console.log(`Do a search with: ${searchQuery}`);
  };

  return (
    <div className="search-bar">
      <form className='form-search-bar' onSubmit={handleSearchSubmit}>
        <input className='input-search-bar'
          type="text"
          placeholder="Search by genre, artist, or song title..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className='button-search-bar' type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            width="30px"
            height="30px"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14A4.5 4.5 0 1 1 14 9.5 4.49 4.49 0 0 1 9.5 14z" />
          </svg>
        </button>
      </form>
    </div>
  );
};



export default SearchBar;