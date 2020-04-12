import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
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
                    <NavLink exact to="/"><button>Home</button></NavLink>
                    <NavLink to="/about"><button>About</button></NavLink>
                    <NavLink to="/signup"><button>{this.props.user.isSignedIn ? 'Profile' : 'Sign Up'}</button></NavLink>
                    <NavLink to="/login"><button onClick={this.toggleSignInStatus}>{this.props.user.isSignedIn ? 'Log Out' : 'Log In'}</button></NavLink>
                </nav>
            </div >
        )
    }
}

export default Nav