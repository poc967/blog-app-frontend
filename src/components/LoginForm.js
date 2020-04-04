import React, { Component } from 'react'
import '../styles/LoginForm.css'

class LoginForm extends Component {

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

    render() {
        return (
            <div className="logIn">
                <h2>Log In</h2>
                <form>
                    <input type="text"
                        name="email"
                        checked={this.state.email}
                        placeholder="email"
                        onChange={this.handleValueChange} />
                    <input type="text"
                        name="password"
                        value={this.state.password}
                        placeholder="password"
                        onChange={this.handleValueChange} />
                    <input type="submit" value="Sign In" />
                </form>
            </div>
        )
    }
}

export default LoginForm