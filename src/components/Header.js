import React from 'react'
import logo from '../img/logo.png'
import style from '../styles/Header.module.css'

function Header() {
    return (
        <header className={style.headerWrapper}>
            <div className={style.logoWrapper}>
                <img src={logo} alt="movie logo" width='250' height='auto' />
                <h1>OMDB Database</h1>
            </div>
        </header>
    )
}

export default Header
