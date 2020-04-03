import React, { Component } from 'react'
import '../styles/Nav.css'

class Nav extends Component {

    state = {
        isSignedIn: true
    }

    handleLogIn = () => {
        this.setState(prevState => {
            return {
                isSignedIn: !prevState.isSignedIn
            }
        })
    }

    render() {
        return (
            <div className="header">
                <h1 className="logo">Code Blog</h1>
                <nav>
                    <button>Home</button>
                    <button>About</button>
                    <button>Profile</button>
                    <button onClick={this.handleLogIn}>{this.state.isSignedIn ? 'Log Out' : 'Log In'}</button>
                </nav>
            </div>
        )
    }
}

export default Nav