import React, { useEffect } from 'react'
import { MovieListing } from '../components'
import { useDispatch } from 'react-redux'
import { listMoviesAction, listShowsAction } from '../redux/feature/movieSlice'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listMoviesAction())
        dispatch(listShowsAction())
    }, [])
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    )
}

export default Home