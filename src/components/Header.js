import React from 'react'

import Menu from './Menu'
import UserMenu from './UserMenu'

const Header = () => (
    <header>
        <div className="navbar">
            <div className="container">
                <div className="navbar__toggle"></div>
                <div className="navbar__logo"></div>
                <Menu />
                <UserMenu />
            </div>
        </div>
    </header>
)

export default Header