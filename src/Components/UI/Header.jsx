import React from 'react'
import './Header.css'
import logo from '../../../img/logo.png'

const Header = () => {
    return (
        <header className='logo'>
            <img src={logo} alt="" />
        </header>
    )
}

export default Header
