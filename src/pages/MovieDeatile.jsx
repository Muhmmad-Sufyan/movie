import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import "./MovieDeatile.scss";
import { emptyMovieOrShows, listMovieOrShowsAction } from '../redux/feature/movieSlice';
const MovieDeatile = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const { movieOrShows } = useSelector(state => state.movie);
    useEffect(() => {
        if (movieId) {
            dispatch(listMovieOrShowsAction(movieId))
        }
        return () => {
            dispatch(emptyMovieOrShows());
        };
    }, [movieId])
    return (
        <div className="movie-section">
            {Object.keys(movieOrShows).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <>
                    <div className="section-left">
                        <div className="movie-title">{movieOrShows.Title}</div>
                        <div className="movie-rating">
                            <span>
                                IMDB Rating <i className="fa fa-star"></i> : {movieOrShows.imdbRating}
                            </span>
                            <span>
                                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                                {movieOrShows.imdbVotes}
                            </span>
                            <span>
                                Runtime <i className="fa fa-film"></i> : {movieOrShows.Runtime}
                            </span>
                            <span>
                                Year <i className="fa fa-calendar"></i> : {movieOrShows.Year}
                            </span>
                        </div>
                        <div className="movie-plot">{movieOrShows.Plot}</div>
                        <div className="movie-info">
                            <div>
                                <span>Director</span>
                                <span>{movieOrShows.Director}</span>
                            </div>
                            <div>
                                <span>Stars</span>
                                <span>{movieOrShows.Actors}</span>
                            </div>
                            <div>
                                <span>Generes</span>
                                <span>{movieOrShows.Genre}</span>
                            </div>
                            <div>
                                <span>Languages</span>
                                <span>{movieOrShows.Language}</span>
                            </div>
                            <div>
                                <span>Awards</span>
                                <span>{movieOrShows.Awards}</span>
                            </div>
                        </div>
                    </div>
                    <div className="section-right">
                        <img src={movieOrShows.Poster} alt={movieOrShows.Title} />
                    </div>
                </>
            )}
        </div>
    )
}

export default MovieDeatile