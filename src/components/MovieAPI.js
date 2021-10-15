import React, { useState, useEffect } from 'react'
import Form from './Form';
import MovieList from './MovieList';
import style from '../styles/MovieDatabase.module.css'

const MovieAPI = () => {
    const [items, setItems] = useState([]);
    const [fetchData, setFetchData] = useState('');

    useEffect(() => {
        const fetchDatabase = async () => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?apikey=83256d1f&s=${fetchData}`);
                const data = await response.json();

                setItems(data.Search);

                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchDatabase();
    }, [fetchData])


    return (
        <div className={style.databaseWrapper}>
            <div className={style.formWrapper}>
                <Form
                    getQuery={(query) => setFetchData(query)}
                />
            </div>
            <div className={style.displayWrapper}>
                <MovieList
                    items={items}
                />
            </div>
        </div>
    )
}

export default MovieAPI
