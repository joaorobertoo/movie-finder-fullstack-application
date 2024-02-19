import React from "react";
import "./SearchBar.scss";
import { Button } from "@ui5/webcomponents-react";

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
        onChange={onSearchChange}
        onFocus={onFocus}
        placeholder="Insert the movie title"
      />
      <Button onClick={onSearchClick}>Search</Button>
      <Button className="reset" onClick={onResetClick}>
        Reset
      </Button>
    </div>
  );
};

export default SearchBar;
