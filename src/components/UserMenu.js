import React, {Component} from 'react'

class UserMenu extends Component {
    render() {
        return (
            <div className="navbar__user-menu">
                <ul>
                    <li className="dropdown">
                        <a href="#">Usermenu</a>
                        <ul className="dropdown__menu">
                            <li>
                                <span>Username</span>
                            </li>
                            <li>
                                <a href="#">Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserMenu