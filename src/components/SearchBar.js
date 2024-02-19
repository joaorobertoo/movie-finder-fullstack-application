import React from "react";
import "./SearchBar.scss";

const SearchBar = ({
  onSearchChange,
  onSearchClick,
  onResetClick,
  searchTerm,
  onFocus,
}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onKeyPress={(e) => e.key === "Enter" && onSearchClick()}
        onChange={onSearchChange}
        onFocus={onFocus}
        placeholder="Digite o título do filme"
      />
      <button onClick={onSearchClick}>Buscar</button>
      <button className="reset" onClick={onResetClick}>
        Reset
      </button>
    </div>
  );
};

export default SearchBar;
