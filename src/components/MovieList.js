import React from 'react'
import Movie from './Movie'
import style from '../styles/MovieDatabase.module.css'

const MovieList = ({ items }) => {
    console.log(items);
    return (
        <section className={style.movieListContainer}>
            {
                items ?
                    items.map((item) => {
                        return <Movie key={item.imdbID} item={item} />
                    })
                    : ''
            }
        </section>
    )
}

export default MovieList
