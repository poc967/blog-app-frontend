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
        if (this.state.email && this.state.password) {
            //Handlerfunction will go here
        } else {
            console.log('not submitted')
        }
    }

    render() {
        return (
            <div className="logIn">
                <h2>Log In</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        name="email"
                        checked={this.state.email}
                        placeholder="email"
                        onChange={this.handleValueChange}
                        className="input" />
                    <input type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="password"
                        onChange={this.handleValueChange}
                        className="input" />
                    <input className="submit"
                        type="submit"
                        value="Sign In" />
                </form>
            </div>
        )
    }
}

export default LoginModal