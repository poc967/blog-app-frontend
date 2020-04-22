import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../styles/App.css'
import axios from 'axios'

//import required components
import Nav from './Nav'
import Home from './Home'
import Blog from './Blog'
import SignUpModal from './SignUpModal'
import LogInModal from './LoginModal'
import Footer from './Footer'
import NotFound from './NotFound'

class App extends Component {

  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:8080/posts')
    console.log(response)

    this.setState({
      posts: response.data
    })
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

  handlePostDelete = (id) => {
    console.log(id)

    return axios.delete(`http://localhost:8080/posts/${id}`)
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
            <Route path='/blog' render={() => <Blog posts={this.state.posts}
              handlePostDelete={this.handlePostDelete} />} />
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