import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    movies: {},
    shows: {},
    movieOrShows: {}
};

export const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {
        listMovies: (state, action) => {
            state.movies = action.payload;
        },
        listShows: (state, action) => {
            state.shows = action.payload; // Change state.shows to state.movies
        },
        listMovieOrShows: (state, action) => {
            state.movieOrShows = action.payload;
        },
        emptyMovieOrShows: (state, action) => {
            state.movieOrShows = {};
        }
    }
});

export const { listMovies, listShows, emptyMovieOrShows, listMovieOrShows } = movieSlice.actions; // Add listMovies and listShows here

export default movieSlice.reducer;

export const listMoviesAction = (movieText = "Harry") => dispatch => {

    axios.get(`https://www.omdbapi.com/?apiKey=2b5c6f59&s&s=${movieText}&type=movie`).then(res => {
        dispatch(listMovies(res.data));
    });
};

export const listShowsAction = (seriesText = "Friends") => dispatch => {

    axios.get(`https://www.omdbapi.com/?apiKey=2b5c6f59&&s=${seriesText}&type=series`).then(res => {
        console.log(res.data);
        dispatch(listShows(res.data));
    });
};
export const listMovieOrShowsAction = (id) => dispatch => {

    axios.get(`https://www.omdbapi.com/?apiKey=2b5c6f59&&i=${id}&Plot=full`).then(res => {
        console.log(res.data);
        dispatch(listMovieOrShows(res.data));
    });
};

