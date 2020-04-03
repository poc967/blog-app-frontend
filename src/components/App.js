import React, { Component } from 'react';
import Nav from './Nav'
import LoginForm from './LoginForm';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <LoginForm />
      </div>
    )
  }
}

export default App;
