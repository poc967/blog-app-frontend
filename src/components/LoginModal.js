import React, { Component } from 'react'
import '../styles/LoginModal.css'

class LoginModal extends Component {

    state = {
        email: "",
        password: ""
    }

    handleValueChange = (e) => {
        const target = e.target
        const value = target.name === 'email' ? target.value : target.value
        const key = target.name
        console.log(e.target.value)

        this.setState({
            [key]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div className="logIn">
                <div className="logInForm">
                    <h2>Log In</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            name="email"
                            checked={this.state.email}
                            placeholder="email"
                            onChange={this.handleValueChange}
                            className="input"
                            pattern="^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$"
                            required />
                        <input type="password"
                            name="password"
                            value={this.state.password}
                            placeholder="password"
                            onChange={this.handleValueChange}
                            className="input"
                            required />
                        <input className="submit"
                            type="submit"
                            value="Sign In" />
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginModal