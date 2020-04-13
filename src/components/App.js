import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../styles/App.css'

//import required components
import Nav from './Nav'
import Home from './Home'
import Posts from './Posts'
import SignUpModal from './SignUpModal'
import LogInModal from './LoginModal'
import Footer from './Footer'
import NotFound from './NotFound'

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
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/blog' component={Posts} />
            {/* <Route path='/about' component={About} /> */}
            <Route path='/signup' component={SignUpModal} />
            <Route path='/login' component={LogInModal} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>

      </div>
    )
  }
}

export default App;
