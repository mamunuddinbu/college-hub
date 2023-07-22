// CollegeSearch.jsx
import React, { useState } from 'react';

const CollegeSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a college name..."
      value={searchQuery}
      onChange={handleSearchChange}
      className="border p-2"
    />
  );
};

export default CollegeSearch;
