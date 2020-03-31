import React, { Component } from 'react';
import Post from './Post'

const Header = () => {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Profile</li>
      <li>Sign Up</li>
    </ul>
  )
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <Post />
      </div>
    )
  }
}

export default App;
