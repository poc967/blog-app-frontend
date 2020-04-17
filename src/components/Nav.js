import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'

class Nav extends Component {

    render() {
        return (
            <div className="header">
                <h1 className="logo"><NavLink exact to="/">Code Blog</NavLink></h1>
                <nav>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                    <li><NavLink to="/login">Log In</NavLink></li>
                </nav>
            </div >
        )
    }
}

export default Nav