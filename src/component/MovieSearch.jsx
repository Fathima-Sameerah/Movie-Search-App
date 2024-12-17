import React, { useState } from "react";




const MovieSearch = () => {
  const [query, setQuery] = useState(""); // State for search query
  const [movies, setMovies] = useState([]); // State to store search results
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(""); // State for error handling

  const apiKey = "67d04f42"; // Your OMDB API key

  // Function to fetch movies from the OMDB API
  const fetchMovies = async () => {
    setLoading(true);
    setError("");
    setMovies([]);

    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search); // Update movies state with search results
      } else {
        setError(data.Error); // Handle errors from the API
      }
    } catch (err) {
      setError("An error occurred while fetching the data."); // Handle network errors
    } finally {
      setLoading(false); // Stop loading after the fetch is complete
    }
  };

  return (
    <div className="movie-search">
      <input
        type="text"
        placeholder="Search for a movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state
      />
      <button onClick={fetchMovies}>Search</button>

      {loading && <p>Loading...</p>} {/* Display loading message */}
      {error && <p className="error">{error}</p>} {/* Display error message */}

      <div className="movie-list">
        {movies.length > 0 &&
          movies.map((movie) => (
            <div className="movie" key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>Released: {movie.Year}</p>
              <p>IMDB ID: {movie.imdbID}</p>
            </div>
          ))}
      </div>
    </div>
  );
};




export default MovieSearch;
