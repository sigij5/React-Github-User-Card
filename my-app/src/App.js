import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import User from './components/User'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userText:'sigij5',
      userInfo: {},
      following: []
    }
    console.log('constructor is running')
  }

  componentDidMount() {
    console.log('cdm is running')
    axios.get(`https://api.github.com/users/${this.state.userText}`)
    .then(res => {
      console.log(res.data)
      this.setState({
        userInfo: res.data
      })
    })
  }

  fetchFollowing = e => {
    e.preventDefault()
    axios.get(`https://api.github.com/users/${this.state.userInfo.login}/following`)
    .then(res => {
        this.setState({
            following: res.data
        })
    })
  }

  handleChanges = e => {
    this.setState({
      userText: e.target.value
    })
  }

  fetchUser = e => {
    e.preventDefault()
    axios.get(`https://api.github.com/users/${this.state.userText}/`)
    .then(res => {
      this.setState({
        userInfo:res.data
      })
    })
  }

  render() {
    console.log('rendering')
  return (
    <div className="App">
      <header className="App-header">
        <h1>Github User Cards</h1>
        <input
          type="text"
          value={this.state.userText}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchUser}>Find User</button>
      </header>

      <User info={this.state.userInfo} />

      <div className='following'>
      <h3 onClick={this.fetchFollowing}>Following</h3>

      {this.state.following.map(user => 
        <User info={user} />
        )}
      </div>

      

      {/* {this.state.users.map(user => <div>{user.username}</div>)} */}
    </div>
  );
  }
} 

export default App;
