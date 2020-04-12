import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import SignUpModal from './SignUpModal'
import LogInModal from './LoginModal'
import Footer from './Footer'
import '../styles/App.css'

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

        <BrowserRouter>
          <Nav
            user={this.state.user}
            handleLogIn={this.handleLogIn} />
          <Route exact path='/' component={Home} />
          {/* <Route path='/about' component={About} /> */}
          <Route path='/signup' component={SignUpModal} />
          <Route path='/login' component={LogInModal} />
          <Footer />
        </BrowserRouter>


      </div>
    )
  }
}

export default App;
