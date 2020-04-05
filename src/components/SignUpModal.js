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
        const { firstName, lastName, email, password, confirmPassword } = this.state

        e.preventDefault()
        if (firstName && lastName && email && password && confirmPassword) {
            console.log('submitted')
        } else {
            console.log('missing fields')
        }
    }

    render() {
        return (
            <div className="signUp">
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        value={this.state.firstName}
                        placeholder="first name"
                        name="firstName"
                        onChange={this.handleInputChange} />
                    <input type="text"
                        value={this.state.lastName}
                        placeholder="last name"
                        name="lastName"
                        onChange={this.handleInputChange} />
                    <input type="text"
                        value={this.state.email}
                        placeholder="email"
                        name="email"
                        onChange={this.handleInputChange} />
                    <input type="password"
                        value={this.state.password}
                        placeholder="password"
                        name="password"
                        onChange={this.handleInputChange} />
                    <input type="password"
                        value={this.state.confirmPassword}
                        placeholder="confirm password"
                        name="confirmPassword"
                        onChange={this.handleInputChange} />
                    <input className="submit"
                        type="submit"
                        value="Sign Up" />
                </form>
            </div>
        )
    }
}

export default SignUpModal