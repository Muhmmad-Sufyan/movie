import React from 'react';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';
import "./MovieListing.scss";

const MovieListing = () => {
    const { shows, movies } = useSelector(state => state.movie);

    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {
                        movies.Response === "True" ? (
                            movies.Search.map((movie, index) => (
                                <MovieCard key={index} movie={movie} />
                            ))
                        ) : (
                            <div className="movies-error">
                                <h3>{movies.Error}</h3>
                            </div>
                        )}
                </div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="movie-container">
                    {shows.Response === "True" ? (
                        shows.Search.map((show, index) => ( // Fix here: Change movies.Search to shows.Search
                            <MovieCard key={index} movie={show} /> // Fix here: Change movie to show
                        ))
                    ) : (
                        <div className="movies-error">
                            <h3>{shows.Error}</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MovieListing;
