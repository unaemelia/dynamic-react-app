import React from 'react'
import style from '../styles/MovieDatabase.module.css'

const Movie = ({ item }) => {

    return (
        <div className={style.movieDisplay}>
            <h2>{item.Title}</h2>
            <p>{item.Type}</p>
            <p>{item.Year}</p>
            <img src={item.Poster} alt="Movies/Series Poster" />
        </div>
    )
}

export default Movie
