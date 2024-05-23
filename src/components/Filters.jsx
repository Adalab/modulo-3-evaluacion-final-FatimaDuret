import React from 'react';

function Filters({ setSearch }) {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search" className="search">Search Characters:</label>
      <input
        type="text"
        id="search"
        name="search"
        onChange={handleChange}
      />
    </form>
  );
}

export default Filters;