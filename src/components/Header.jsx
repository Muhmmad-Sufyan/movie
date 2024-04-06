import React, { useState } from 'react'
import "./Header.scss";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { listMoviesAction, listShowsAction } from '../redux/feature/movieSlice';

const Header = () => {
    const [movieText, setMovieText] = useState('')
    const [showText, setShowText] = useState('')
    const dispatch = useDispatch()
    const hanndleMovieName = () => {
        dispatch(listMoviesAction(movieText))
        setMovieText('')
    }
    const hanndleshowName = () => {
        dispatch(listShowsAction(showText))
        setShowText('')
    }
    return (
        <div className="header">
            <Link to="/">
                <div className="logo">Movie App</div>

            </Link>
            <form action="">
                <label style={{ color: "white", fontSize: "20px", fontFamily: "sans-serif" }}> Movie
                    <input type="text" value={movieText} onChange={(e) => setMovieText(e.target.value)} />
                    <button type='button' onClick={hanndleMovieName}>Submit</button>

                </label>
                <label style={{ color: "white", fontSize: "20px", fontFamily: "sans-serif" }}> Show
                    <input type="text" value={showText} onChange={(e) => setShowText(e.target.value)} />
                    <button type='button' onClick={hanndleshowName}>Submit</button>

                </label>

            </form>
            <div className="user-image">
                <img src="src/assets/images/user.png" alt="user" />
            </div>
        </div>
    )
}

export default Header