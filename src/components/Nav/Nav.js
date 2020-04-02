import React, { Component } from 'react'
import './Nav.css'


class Nav extends Component {

    state = {
        isSignedIn: true
    }

    render() {
        return (
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Profile</a>
                <a href="#">{this.state.isSignedIn ? 'Log Out' : 'Log In'}</a>
            </nav>
        )
    }
}

export default Nav