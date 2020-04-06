import React, { Component } from 'react';
import Nav from './Nav'
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal'
import Post from './Post'

class App extends Component {

  state = {
    user:
      { isSignedIn: false }
  }

  handleLogIn = () => {
    this.setState(prevState => {
      return {
        user: {
          isSignedIn: !prevState.user.isSignedIn
        }
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Nav
          user={this.state.user}
          handleLogIn={this.handleLogIn} />
        <LoginModal />
        <SignUpModal />

      </div>
    )
  }
}

export default App;
