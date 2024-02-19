// MovieSearch.js
import React, { useState } from "react";
import MovieDetails from "./MovieDetails";
import SearchBar from "./SearchBar";
import "./MovieSearch.scss";
import { TailSpin } from "react-loader-spinner";

const MovieSearch = () => {
  const [title, setTitle] = useState("");
  const [movie, setMovie] = useState(null);
  const [searchDone, setSearchDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSearchClick = async () => {
    if (!title.trim()) {
      setErrorMessage("Por favor, insira um valor antes de buscar.");
      return;
    }
    setErrorMessage("");
    try {
      setSearchDone(false);
      setLoading(true);
      const response = await fetch(`/movies/search?title=${title}`);
      const data = await response.json();
      if (Object.keys(data).length > 0) {
        setMovie(data);
        setSearchDone(true);
      } else {
        setMovie(null);
        setSearchDone(true);
      }
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar filme:", error);
      setLoading(false);
    }
  };

  const handleResetClick = () => {
    setTitle("");
    setMovie(null);
    setSearchDone(false);
    setErrorMessage("");
  };

  const handleFocus = () => {
    setSearchDone(false);
    setErrorMessage("");
  };

  return (
    <div>
      <SearchBar
        searchTerm={title}
        onSearchChange={handleInputChange}
        onSearchClick={handleSearchClick}
        onResetClick={handleResetClick}
        onFocus={handleFocus}
      />
      {errorMessage && <p className="empty-error-message">{errorMessage}</p>}
      {searchDone && !movie && (
        <p className="no-results-message">
          Nenhum resultado encontrado para "{title}".
        </p>
      )}
      {loading && (
        <div className="spinner-container">
          <TailSpin color="#00BFFF" height={80} width={80} />
        </div>
      )}
      {!loading && movie && <MovieDetails movie={movie} />}
    </div>
  );
};

export default MovieSearch;
