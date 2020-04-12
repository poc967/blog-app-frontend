import React, { Component } from 'react'
import '../styles/SignUpModal.css'

class SignUpModal extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleInputChange = (e) => {
        const value = e.target.value
        const key = e.target.name

        this.setState({
            [key]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div className="signUp">
                <div className="signUpForm">
                    <h2>Sign Up</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            value={this.state.firstName}
                            placeholder="first name"
                            name="firstName"
                            required
                            onChange={this.handleInputChange} />
                        <input type="text"
                            value={this.state.lastName}
                            placeholder="last name"
                            name="lastName"
                            required
                            onChange={this.handleInputChange} />
                        <input type="text"
                            value={this.state.email}
                            placeholder="email"
                            name="email"
                            pattern="^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$"
                            required
                            onChange={this.handleInputChange} />
                        <input type="password"
                            value={this.state.password}
                            placeholder="password"
                            name="password"
                            required
                            onChange={this.handleInputChange} />
                        <input type="password"
                            value={this.state.confirmPassword}
                            placeholder="confirm password"
                            name="confirmPassword"
                            required
                            onChange={this.handleInputChange} />
                        <input className="submit"
                            type="submit"
                            value="Sign Up" />
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUpModal