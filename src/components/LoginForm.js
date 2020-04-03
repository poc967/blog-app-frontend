import React, { Component } from 'react'
import '../styles/LoginForm.css'

class LoginForm extends Component {

    state = {
        value: ''
    }

    render() {
        return (
            <div className="logIn">
                <h2>Log In</h2>
                <form>
                    <input type="text"
                        value={this.state.value}
                        placeholder="email" />
                    <input type="text"
                        value={this.state.value}
                        placeholder="password" />
                    <input type="submit" value="Sign In" />
                </form>
            </div>
        )
    }
}

export default LoginForm