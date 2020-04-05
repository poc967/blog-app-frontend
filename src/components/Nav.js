import React, { Component } from 'react'
import '../styles/Nav.css'

class Nav extends Component {

    toggleSignInStatus = (e) => {
        this.props.handleLogIn(this.props.user.isSignedIn)
    }

    render() {
        return (
            <div className="header">
                <h1 className="logo">Code Blog</h1>
                <nav>
                    <button>Home</button>
                    <button>About</button>
                    <button>{this.props.user.isSignedIn ? 'Profile' : 'Sign Up'}</button>
                    <button onClick={this.toggleSignInStatus}>{this.props.user.isSignedIn ? 'Log Out' : 'Log In'}</button>
                </nav>
            </div>
        )
    }
}

export default Nav