import React, { useState } from 'react'
import style from '../styles/MovieDatabase.module.css'

function Form({ getQuery }) {
    const [search, setSearch] = useState('');

    const onChange = (query) => {
        setSearch(query)
        getQuery(query)
    }

    return (
        <section>
            <form>
                <input
                    className={style.searchInput}
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => onChange(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Form
