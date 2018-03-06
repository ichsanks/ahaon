import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <div className="navbar__menu">
                <ul className="hr-list">
                    <li><Link to="/">Home</Link></li>
                    <li className="dropdown">
                        <a href="#">Dropdown#1</a>
                        <ul className="dropdown__menu">
                            <li><Link to="/pages">Pages</Link></li>
                            <li><Link to="/posts">Posts</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu