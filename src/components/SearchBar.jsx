// SearchBar.js
import React from "react";

const SearchBar = ({ searchTerm, handleSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={handleSearchChange}
      className="border p-2 mb-4 w-full"
    />
  );
};

export default SearchBar;
