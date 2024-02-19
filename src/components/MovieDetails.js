import React from "react";
import "./MovieDetails.scss";
import placeholder from "../assets/poster-nao-encontrado.png";

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-details">
      <div className="text-content">
        <h2>{movie.title}</h2>
        <p>{movie.year}</p>
        <p>{movie.genre}</p>
        <p>{movie.plot}</p>
        {movie.ratings && (
          <div className="ratings">
            <h3>Ratings:</h3>
            {movie.ratings.map((rating, index) => (
              <p key={index}>
                {rating.source}: {rating.value}
              </p>
            ))}
          </div>
        )}
      </div>
      {movie.poster && (
        <img
          className="movie-poster"
          src={movie.poster ? movie.poster : placeholder}
          alt={
            movie.poster ? `Poster de ${movie.title}` : "Poster não disponível"
          }
        />
      )}
    </div>
  );
};

export default MovieDetails;
